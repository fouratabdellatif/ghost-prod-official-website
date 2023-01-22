/* eslint-disable jsx-a11y/heading-has-content */
import Input from "../Input/Input";
import '../../assets/css/ContactForm.css';
import { SubmitButton } from "../Button";
import CustomDivider from "../CustomDivider";
// import Select from "../Input/Select";
import { useState } from "react";
import { sendReclamation } from "../../actions/reclamations";
import { useDispatch } from "react-redux";
import CustomLoader from "../CustomLoader";
import styled from "styled-components";


const Item = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #eeeeee;
  position: relative;
  border: 2px solid #eeeeee;
  border-bottom: solid 2px #000000;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #dddddd;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      /* content: "\f005"; */
      font-family: "FontAwesome";
      display: block;
      color: #ffffff;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: #e1a33b;
    border: 2px solid #e1a33b;
  }
  &:checked + ${RadioButtonLabel} {
    background: #e1a33b;
    border: 1px solid #e1a33b;
    &::after {
      /* content: "\f005"; */
      font-family: "FontAwesome";
      display: block;
      color: #ffffff;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;

const ContactForm = () => {

    const options = [
        { value: "devis", label: "DM DEVIS" },
        { value: "feedback", label: "FEEDBACK" },
        { value: "work", label: "CANDIDATURE" },
    ]

    const initState = {
        name: '',
        phone: '',
        email: '',
        category: '',
        text: '',
        spec: '',
        cv: ''
    }

    const [msg, setMsg] = useState(false);
    const [formData, setFormData] = useState(initState);
    const [loader, setLoader] = useState(false);
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "category")
            setSelected(value);
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(e.target);
        // console.log(formData);
    }

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setLoader(true);
        await dispatch(sendReclamation(formData));
        await setLoader(false);
        await setMsg(true);
    }

    const initForm = () => {
        setMsg(false);
        setSelected("");
    }

    return (
        <div className="contact-form-container">
            <h1 className="contact-title">Dites-nous quelque chose</h1>
            <CustomDivider />
            {msg ? (
                <div className="alert">
                    <span onClick={initForm} className="closebtn"> &times;</span>
                    Votre message a été envoyé avec succès. Merci de nous avoir contacter.
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    {/* <div className="contact-form-first">
                </div> */}
                    <div className="contact-form-first second">
                        <div className="contact-form-second">
                            <div className="contact-form-third">
                                <Input
                                    name="name"
                                    placeholder="Nom & Prénom"
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-form-third">
                                <Input
                                    name="phone"
                                    placeholder="N° Tél"
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    name="spec"
                                    placeholder="Organisme ou spécialité"
                                    onChange={handleChange}
                                />
                                {/* <Select
                                name="category"
                                placeholder="..."
                                options={options}
                                title="..."
                                onChange={handleChange}
                                required
                            /> */}
                            </div>
                        </div>
                        <div className="contact-form-second.second">
                            {options.map((option) => (
                                <Item>
                                    <RadioButton
                                        id={option.value}
                                        type="radio"
                                        name="category"
                                        value={option.value}
                                        // checked={selected === option.value}
                                        onChange={handleChange}
                                        required
                                    />
                                    <RadioButtonLabel />
                                    <label for={option.value} className="cat-label">{option.label}</label>
                                </Item>
                            ))}
                        </div>
                    </div>
                    <div className="contact-form-first">
                        <div className="contact-form-third">
                            {selected === "work" && (
                                <Input
                                    accept="application/pdf"
                                    type="file"
                                    file="cv"
                                    name="cv"
                                    placeholder="CV"
                                    onChange={(e) => {
                                      // console.log(e.target.files[0])
                                      setFormData({ ...formData, cv: e.target.files[0] })
                                    }}
                                    required={selected === "work"}
                                />
                            )}
                            <Input
                                name="text"
                                placeholder="Message"
                                textarea
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* <Input
                            name="text"
                            placeholder="Message"
                            textarea
                            onChange={handleChange}
                            required
                        /> */}
                        <div className="btn-wrapper">
                            {loader ? (
                                <CustomLoader />
                            ) : (
                                <SubmitButton className="send-button" type="submit">
                                    Envoyer
                                </SubmitButton>
                            )}
                        </div>
                    </div>
                </form>
            )
            }
        </div >
    );
};

export default ContactForm;
