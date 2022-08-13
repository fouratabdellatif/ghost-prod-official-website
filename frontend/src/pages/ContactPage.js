/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg04.jpg'
import ContactForm from '../components/Form/ContactForm'
import { useSelector } from 'react-redux'

const ContactPage = () => {

    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "contact-us").map((item, index) => {
        return item;
    });

    const page = data[0];

    const pageTitle = page?.pageTitle;
    const title = page?.title;
    const text = page?.text;
    const image = page?.image;

    return (
        <>
            <CasualPage
                pageTitle={page ? pageTitle : "Contact Us"}
                bg={page ? image : bgImage}
                text={page ? text : "Vous avez une question??"}
                title={page ? title : "Contact Us"}
                pageContent={
                    <>
                        <ContactForm />
                    </>
                } />
        </>
    )
}

export default ContactPage