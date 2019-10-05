import React from 'react';
import './search-box.styles.css.css'
//Props are destructured into placeHolder and handleChange
export const SearchBox =({placeHolder,handleChange}) => {
    return <input type='search' className='search' placeholder={placeHolder} onChange={handleChange} />
};