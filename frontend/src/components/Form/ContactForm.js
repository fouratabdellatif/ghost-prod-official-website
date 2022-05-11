/* eslint-disable jsx-a11y/heading-has-content */
import Input from "../Input/Input";
import '../../assets/css/ContactForm.css';
import { Button } from "../Button";
import CustomDivider from "../CustomDivider";

const ContactForm = () => {

    return (
        <div className="contact-form-container">
            <h1 className="contact-title">Let's Work Together</h1>
            <CustomDivider />
            <form className="contact-form">
                <div className="contact-form-first">
                    <Input
                        placeholder="How can we help you?"
                    />
                </div>
                <div className="contact-form-first second">
                    <div className="contact-form-second">
                        <div className="contact-form-third">
                            <Input
                                placeholder="Name"
                            />
                            <Input
                                placeholder="Email"
                            />
                        </div>
                        <div className="contact-form-third">
                            <Input
                                placeholder="Phone"
                            />
                            <Input
                                placeholder="Organization"
                            />
                        </div>
                    </div>
                    <div className="contact-form-second.second">
                        <Input
                            placeholder="Message"
                            textarea
                        />
                    </div>
                </div>
                <div className="contact-form-first">
                    <div className="btn-wrapper">
                        <Button className="send-button" type="submit">
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
