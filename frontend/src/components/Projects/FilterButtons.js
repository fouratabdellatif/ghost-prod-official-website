import React from "react";
import '../../assets/css/FilterButtons.css';

const FilterButtons = ({ filterData, setData, menuItems, data }) => {
  return (
    <div className='filter-container'>
      <button
        onClick={() => setData(data)}
      >
        Tout
      </button>
      {menuItems.map((item, index) => {
        return (
          <button
            onClick={() => filterData(item)}
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;