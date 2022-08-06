import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { secret } from "../middlewares/auth.js";
import User from "../models/user.js";
import { ROLES } from "../models/role.js";

export const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser)
      return res.status(404).json({ message: "Aucun compte n'existe pour ce username" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong Password." });

    const token = jwt.sign(
      {
        username: existingUser.username,
        name: existingUser.name,
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
        id: existingUser._id,
        role: existingUser.role,
      },
      secret,
      { expiresIn: "24h" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "An error has occurred. Try Again!" });
    console.log(error);
  }
};

export const addUser = async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    password,
    confirmPassword,
  } = req.body;

  try {

    const existingUser = await User.findOne({
      username
    });

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      firstname,
      lastname,
      name: `${firstname} ${lastname}`,
      username,
      password: hashedPassword,
      role: ROLES[1],
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
