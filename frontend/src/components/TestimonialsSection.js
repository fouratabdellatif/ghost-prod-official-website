import React from 'react'
import '../assets/css/TestimonialsSection.css';
import SectionTitle from './SectionTitle';
import Testimonial from './Testimonial';

const TestimonialsSection = () => {

    return (
        <section className='testimonial-section'>
            <div className='testimonial-container'>
            <SectionTitle title="Témoignages" />
            </div>
                <Testimonial />
        </section>
    )
}

export default TestimonialsSection