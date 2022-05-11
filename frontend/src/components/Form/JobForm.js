/* eslint-disable jsx-a11y/heading-has-content */
import Input from "../Input/Input";
import '../../assets/css/JobForm.css';
import { Button } from "../Button";
import Select from "../Input/Select";
import CustomDivider from "../CustomDivider";

const JobForm = () => {

    const options = [
        { value: "1", label: "alternance" },
        { value: "2", label: "stage" },
        { value: "3", label: "contrat pro" },
    ]

    return (
        <div className="job-form-container">
            <h1 className="job-title">Join Us Now</h1>
            <CustomDivider />
            <form className="job-form">
                <div className="job-form-first">
                    <Input
                        placeholder="How can we help you?"
                    />
                </div>
                <div className="job-form-first second">
                    <div className="job-form-second">
                        <div className="job-form-third">
                            <Input
                                placeholder="Name"
                            />
                            <Input
                                placeholder="Email"
                            />
                        </div>
                        <div className="job-form-third">
                            <Input
                                placeholder="Phone"
                            />
                            <Select
                                placeholder="Choix"
                                options={options}
                                title="Choix"
                            />
                        </div>
                    </div>
                    <div className="job-form-second.second">
                        <Input
                            placeholder="Message"
                            textarea
                        />
                    </div>
                </div>
                <div className="job-form-first">
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

export default JobForm;
