import React from 'react'
import '../assets/css/Service.css'

function Service({ item, color }) {
    return (
        <div className='service-container'>
            <div className='service__hero-row'>
                <div className='service-col' style={{
                    backgroundColor: `${color}`
                }}>
                    <div className='service__hero-text-wrapper'>
                        <h1 className='service-heading'>
                            {item.title}
                        </h1>
                        <p className='service__hero-quote'>
                            {item.quote}
                        </p>
                        <p className='service__hero-paragraph'>
                            {item.text}
                        </p>
                        <ul className='service__hero-list'>
                        {item.steps.map((step, index) => (
                            <li key={index} className='service__hero-list-item'>
                                {step}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
