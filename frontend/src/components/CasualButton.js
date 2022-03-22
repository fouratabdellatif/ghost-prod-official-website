import React from 'react'
import { PrimaryButton } from './Button'

const CasualButton = ({ link, text, icon }) => {
    return (
        <div className="btn-container">
            <div className="nav-btn">
                <PrimaryButton style={{
                    height: '100%',
                    textTransform: 'initial'
                }} to={link} primary='true'>{text}</PrimaryButton>
            </div>
            {icon}
        </div>
    )
}

export default CasualButton