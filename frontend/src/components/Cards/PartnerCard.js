import React from 'react'
import '../../assets/css/PartnerCard.css'

const PartnerCard = ({ item }) => {
    return (
        <img className='partner-image' src={`/uploads/${item.imageFile}`} alt={item?.imageFile} />
    )
}

export default PartnerCard