import { React, useState, useEffect } from 'react'
import '../style/App.css'
import { TextField, Button }from '@mui/material'
// import { TextField } from '@mui/material/TextField'

const SearchBox = () => {
  return (
    <div className='search'>
        <h2 className='title'>Grant Search</h2>
        <div className='searchBox'>
            <TextField id='search-box' label="Search" variant="outlined" />
            <Button className='searchBtn' variant="contained">Search</Button>
        </div>
    </div>
  )
}

export default SearchBox