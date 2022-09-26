import React, { useState } from 'react'

export const SearchBox = ({ setCategory }) => {

  const [inputValue, setinputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();   
    setCategory(inputValue);
  };    

  const handleChange = (e) => {
    setinputValue( e.target.value );
  }

  return (
    <div className="searchBox">
        <form onSubmit={ handleSubmit }>
          <input 
            type="text"
            value={ inputValue }
            onChange={ handleChange }  
          />
        </form>
      </div>
  )
}
