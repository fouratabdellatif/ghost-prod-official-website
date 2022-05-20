/* eslint-disable eqeqeq */
import React from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import { useParams } from 'react-router-dom'
import { TeamData } from '../data/TeamData'
import Member from '../components/Team/Member'


const MemberPage = () => {

    const { id } = useParams();
    console.log(id)


    let members = TeamData.filter((item) => item.id == id).map((item, index) => {
        return item;
    });

    const member = members[0];
    console.log('artist', member);

    return (
        <>
            <CasualPage pageTitle={`${member.firstname} ${member.lastname} | Voice-Over`} bg={bgImage} text="our warriors, our heros" title="Our Team" pageContent={
                <>
                    <Member
                        item={member}
                    />
                </>
            } />
        </>
    )
}

export default MemberPage