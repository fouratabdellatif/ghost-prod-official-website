import React from 'react'
import '../../assets/css/PartnerCard.css'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const PartnerCard = ({ item }) => {
    return (
        <Tippy content={item.name} className='partner-tooltip'>
            <a href={item.link} target="_blank" rel="noreferrer">
                <img className='partner-image' src={item?.imageFile} alt={item?.imageFile} />
            </a>
        </Tippy>
    )
}

export default PartnerCard