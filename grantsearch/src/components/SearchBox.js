import { React, useState, useEffect } from 'react'
import '../style/App.css'
import { TextField, Button, MenuItem }from '@mui/material'

const auStates = [
    {
      value: 'ALL',
      label: 'All',
    },
    {
      value: 'NSW',
      label: 'NSW',
    },
    {
      value: 'QLD',
      label: 'QLD',
    },
    {
      value: 'ACT',
      label: 'ACT',
    },
    {
        value: 'WA',
        label: 'WA',
    },
    {
        value: 'TAS',
        label: 'TAS',
    },
    {
        value: 'SA',
        label: 'SA',
    },
    {
        value: 'NT',
        label: 'NT',
    }
  ];

const SearchBox = () => {
  const [location, setLocation] = useState('ALL');
  const handleChange = (e) => {
    setLocation(e.target.value)
  } 
  return (
    <div className='search'>
        <h2 className='title'>Grant Search</h2>
        <div className='searchBox'>
            <TextField id='search-box' label="Search" variant="outlined" />
            <TextField
                id="select-location"
                select
                label="Location"
                value={location}
                onChange={handleChange}
                helperText="Please select location"
                variant="outlined"
                >
                {auStates.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button className='searchBtn' variant="contained" size="large">Search</Button>
        </div>
    </div>
  )
}

export default SearchBox