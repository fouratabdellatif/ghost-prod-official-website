/* eslint-disable jsx-a11y/heading-has-content */
import Input from "../Input/Input";
import '../../assets/css/VoiceOverForm.css';
import { Button } from "../Button";
import CustomDivider from "../CustomDivider";

const VoiceOverForm = () => {

    return (
        <div className="voice-over-form-container">
            <h1 className="voice-over-title">Apply now</h1>
            <CustomDivider />
            <form className="voice-over-form">
                {/* <div className="voice-over-form-first">
                    <Input
                        placeholder="Message"
                    />
                </div> */}
                <div className="voice-over-form-first second">
                    <div className="voice-over-form-second">
                        <div className="voice-over-form-third">
                            <Input
                                placeholder="Name"
                            />
                            <Input
                                placeholder="Email"
                            />
                        </div>
                        <div className="voice-over-form-third">
                            <Input
                                placeholder="Phone"
                            />
                            <Input
                                placeholder="Address"
                            />
                        </div>
                    </div>
                    <div className="voice-over-form-second-second">
                        <Input
                            placeholder="Talk to us about your experience in this domain"
                            textarea
                        />
                    </div>
                </div>
                <div className="voice-over-form-first">
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

export default VoiceOverForm;
