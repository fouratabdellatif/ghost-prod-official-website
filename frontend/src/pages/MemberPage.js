/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import CasualPage from './CasualPage'
import bgImage from '../assets/images/bg07.jpg'
import { useParams } from 'react-router-dom'
import Member from '../components/Team/Member'
import { useDispatch, useSelector } from 'react-redux'
import { getMembers } from '../actions/members'


const MemberPage = () => {

    const { id } = useParams();
    // console.log(id)

    const membersData = useSelector((state) => state.members);
    const pages = useSelector((state) => state.pages);

    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getMembers());
    }, [dispatch]);

    let members = membersData.filter((item) => item._id == id).map((item, index) => {
        return item;
    });

    const member = members[0];
    // console.log('artist', member);

    let data = pages.filter((item) => item.name == "team").map((item, index) => {
        return item;
    });

    const page = data[0];

    const title = page?.title;
    const text = page?.text;
    const image = page?.image;

    return (
        <>
            <CasualPage
                pageTitle={`${member.firstname} ${member.lastname} | Notre équipe`}
                bg={page ? image : bgImage}
                text={page ? text : "nos guerriers, nos héros"}
                title={page ? title : "Notre équipe"}
                pageContent={
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