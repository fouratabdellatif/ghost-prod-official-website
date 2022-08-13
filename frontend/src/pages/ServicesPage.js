/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg03.jpg'
import Service from '../components/Service'
import { useSelector } from "react-redux";

const ServicesPage = () => {

    const services = useSelector((state) => state.services);
    const pages = useSelector((state) => state.pages);

    let data = pages.filter((item) => item.name == "services").map((item, index) => {
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
                pageTitle={page ? pageTitle : "Nos Services"}
                bg={page ? image : bgImage}
                text={page ? text : "what we are experts in..."}
                title={page ? title : "Nos Services"}
                pageContent={
                    <>
                        {services?.map((item, index) => (
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