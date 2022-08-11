import React, { useEffect } from 'react'
import '../../assets/css/TestimonialsSection.css';
import SectionTitle from './SectionTitle';
import Testimonial from '../Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedbacks } from '../../actions/reclamations';

const TestimonialsSection = () => {

    const reclamations = useSelector((state) => state.reclamations);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFeedbacks());
    }, [dispatch]);

    return (!reclamations || reclamations.length === 0) ? (
        null
    ) : (
        <section className='testimonial-section'>
            <div className='title-container'>
                <SectionTitle miniTitle="Nos " title="Témoignages" />
            </div>
            <div className='testimonial-container'>
                <Testimonial data={reclamations} />
            </div>
        </section>
    )
}

export default TestimonialsSection