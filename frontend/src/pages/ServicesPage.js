import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg03.jpg'
import { ServicesData } from '../data/ServicesData'
import Service from '../components/Service'

const ServicesPage = () => {

    return (
        <>
            <CasualPage pageTitle="Nos Services" bg={bgImage} text="what we are experts in..." title="Nos Services" pageContent={
                <>
                    {ServicesData.map((item, index) => (
                        index % 2 === 0 ?
                            <Service
                                key={index}
                                item={item}
                                color="#d4d4d4"
                            />
                            :
                            <Service
                                key={index}
                                item={item}
                                color="#e1a33b"
                            />
                    ))}
                </>
            } />
        </>
    )
}

export default ServicesPage