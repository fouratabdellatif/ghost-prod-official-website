import React from 'react'
import '../../assets/css/Select.css'

const Select = ({ options, placeholder, name, title, onChange }) => {
    return (
        <div class="custom-select">
            <select onChange={onChange} placeholder={placeholder} name={name}>
                <option disabled hidden selected>{title}</option>
                {options.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
