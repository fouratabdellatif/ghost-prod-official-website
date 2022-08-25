/* eslint-disable jsx-a11y/heading-has-content */
import Input from "../Input/Input";
import '../../assets/css/JobForm.css';
import { SubmitButton } from "../Button";
import Select from "../Input/Select";
import CustomDivider from "../CustomDivider";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendJobRequest } from "../../actions/jobs";
import CustomLoader from "../CustomLoader";

const JobForm = () => {

    const options = [
        { value: "alternance", label: "alternance" },
        { value: "stage", label: "stage" },
        { value: "contrat pro", label: "contrat pro" },
    ]

    const initState = {
        name: '',
        phone: '',
        email: '',
        category: '',
        text: '',
        cv: ''
    }

    const [formData, setFormData] = useState(initState);
    const [loader, setLoader] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
        // console.log(e.target);
        // console.log(formData);
    }

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setLoader(true);
        await dispatch(sendJobRequest(formData));
        await setLoader(false);
    }

    return (
        <div className="job-form-container">
            <h1 className="job-title">Rejoignez nous maintenant</h1>
            <CustomDivider />
            <form
                className="job-form"
                onSubmit={handleSubmit}
                encType="multiple/form-data"
            >
                <div className="job-form-first">
                    <Select
                        name="category"
                        placeholder="Type du contrat"
                        options={options}
                        title="Type du contrat"
                        onChange={handleChange}
                    />
                </div>
                <div className="job-form-first second">
                    <div className="job-form-second">
                        <div className="job-form-third">
                            <Input
                                name="name"
                                placeholder="Nom & Prénom"
                                onChange={handleChange}
                            />
                            <Input
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="job-form-third">
                            <Input
                                name="phone"
                                placeholder="N° Tél"
                                onChange={handleChange}
                            />
                            <Input type='file' placeholder="CV"
                                // ref={inputRef}
                                filename="cv"
                                onChange={(e) => {
                                    // console.log(e.target.files[0])
                                    setFormData({ ...formData, cv: e.target.files[0] })
                                }} />
                        </div>
                    </div>
                    <div className="job-form-second.second">
                        <Input
                            name="text"
                            placeholder="Message"
                            textarea
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="job-form-first">
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
        </div>
    );
};

export default JobForm;
