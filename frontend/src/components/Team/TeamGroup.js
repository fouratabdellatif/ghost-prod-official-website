import React from 'react'
import '../../assets/css/TeamGroup.css';
import { TeamData } from '../../data/TeamData';
import TeamCard from '../Cards/TeamCard';

const TeamGroup = () => {

    return (
        <section className='team-section'>
            <div className='team-group-container'>
                {TeamData.map((item, index) => (
                    <TeamCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </section>
    )
}

export default TeamGroup