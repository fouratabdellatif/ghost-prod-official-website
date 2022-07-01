/* eslint-disable jsx-a11y/heading-has-content */
import Input from "../Input/Input";
import '../../assets/css/ContactForm.css';
import { SubmitButton } from "../Button";
import CustomDivider from "../CustomDivider";
import Select from "../Input/Select";
import { useState } from "react";
import { sendReclamation } from "../../actions/reclamations";
import { useDispatch } from "react-redux";

const ContactForm = () => {

    const options = [
        { value: "work", label: "collaboration" },
        { value: "feedback", label: "feedback" },
    ]

    const initState = {
        name: '',
        phone: '',
        email: '',
        category: '',
        text: '',
        spec: ''
    }

    const [formData, setFormData] = useState(initState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(e.target);
        console.log(formData);
    }

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(sendReclamation(formData));
    }

    return (
        <div className="contact-form-container">
            <h1 className="contact-title">Tell Us Something</h1>
            <CustomDivider />
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="testimonial-form-first">
                    <Input
                        name="spec"
                        placeholder="Organization or Speciality"
                        onChange={handleChange}
                    />
                </div>
                <div className="contact-form-first second">
                    <div className="contact-form-second">
                        <div className="contact-form-third">
                            <Input
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                            />
                            <Input
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact-form-third">
                            <Input
                                name="phone"
                                placeholder="Phone"
                                onChange={handleChange}
                            />
                            <Select
                                name="category"
                                placeholder="How Can we help you?"
                                options={options}
                                title="How Can we help you?"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="contact-form-second.second">
                        <Input
                            name="text"
                            placeholder="Message"
                            textarea
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="contact-form-first">
                    <div className="btn-wrapper">
                        <SubmitButton className="send-button" type="submit">
                            Send
                        </SubmitButton>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
