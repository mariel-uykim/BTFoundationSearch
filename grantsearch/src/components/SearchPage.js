import React from 'react';
import SearchBox from './SearchBox';
import '../style/App.css'

const SearchPage = ({onSubmitForm}) => {
  return (
    <div className='search-page'>
        <SearchBox onSubmitForm={onSubmitForm}/>
    </div>
  )
}

export default SearchPage