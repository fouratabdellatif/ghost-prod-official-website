import React, { useEffect } from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg03.jpg'
import Service from '../components/Service'
import { useDispatch, useSelector } from "react-redux";
import { getServices } from '../actions/services'

const ServicesPage = () => {

    const services = useSelector((state) => state.services);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getServices());
    }, [dispatch]);

    return (
        <>
            <CasualPage pageTitle="Nos Services" bg={bgImage} text="what we are experts in..." title="Nos Services" pageContent={
                <>
                    {services.map((item, index) => (
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