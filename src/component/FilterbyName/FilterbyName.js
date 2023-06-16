import React from 'react'
import { FormControl } from 'react-bootstrap';
import './FilterbyName.css';

const FilterbyName = ({inputSearch,setinputSearch}) => {
  return (
    <div id='yerri'>
        <FormControl
        type='text' placeholder='Enter Movie title'
        className='filter-name'
        style={{width:"1000px"}}
        onChange = {(e)=>setinputSearch(e.target.value)}
        value={inputSearch}
        />
      
    </div>
  )
}

export default FilterbyName
