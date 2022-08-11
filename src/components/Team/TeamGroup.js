import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMembers } from '../../actions/members';
import '../../assets/css/TeamGroup.css';
import TeamCard from '../Cards/TeamCard';

const TeamGroup = () => {

    const members = useSelector((state) => state.members);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getMembers());
    }, [dispatch]);

    return (
        <section className='team-section'>
            <div className='team-group-container'>
                {members.map((item, index) => (
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