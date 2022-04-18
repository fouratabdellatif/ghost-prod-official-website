import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg04.jpg'
import ContactForm from '../components/Form/ContactForm'

const ContactPage = () => {

    return (
        <>
            <CasualPage pageTitle="Contact Us" bg={bgImage} text="Posez-nous des questions??" title="Contact Us" pageContent={
                <>
                    <ContactForm />
                </>
            } />
        </>
    )
}

export default ContactPage