import React from 'react';
import '../assets/css/CustomLoader.css';

const CustomLoader = () => {
    return (
        <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default CustomLoader