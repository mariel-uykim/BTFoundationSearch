import { React, useState, } from 'react'
import '../style/App.css'
import { useTheme } from '@mui/material/styles'
import { TextField, Button, MenuItem, FormControl, 
        InputLabel, Select, Grid, FormGroup }from '@mui/material'

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 20
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
}

const auStates = [ 
    'ALL',
    'NSW',
    'QLD',
    'ACT',
    'WA',
    'TAS',
    'SA',
    'NT'
];

const getStyles = (loc, location, theme) => {
    return {
        fontWeight:
        location.indexOf(loc) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    }
}

const SearchBox = ({onSubmitForm}) => {
  const theme = useTheme()
  const [location, setLocation] = useState("ALL")
  const [query, setQuery] = useState()

  const handleLocChange = (e) => {
    setLocation(e.target.value)    
  }

  const submitData = (e) => {
    console.log("s: " + query + " " + location)
    onSubmitForm({"query": query, "location": location})
  }

  return (
    <div className='search'>
        <h2 className='title'>Grant Search</h2>
        <Grid container justifyContent={"center"} alignContent={"center"}>
        <div className='searchBox'>
            <FormGroup row={true}>
                <TextField
                    sx={{ width: 400 }}
                    id='search-box' 
                    label="Search" 
                    variant="filled" 
                    name="searchQuery"
                    required={true}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className='space'></div>
                <FormControl variant="filled" sx={{ width: 200 }}>
                  <InputLabel id="select-loc-label">Location</InputLabel>
                  <Select
                    sx={{ height: 56 }}
                    labelId="select-loc-label"
                    id="select-loc"
                    value={location}
                    onChange={handleLocChange}
                    label="location"
                    MenuProps={MenuProps}
                  >
                    {auStates.map((loc) => (
                        <MenuItem
                        key={loc}
                        value={loc}
                        style={getStyles(loc, location, theme)}
                        >
                        {loc}
                        </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className='space'></div>
                <Button
                    sx={{ height: 56 }} 
                    className='searchBtn' 
                    variant="contained" 
                    size="large" 
                    type="submit"
                    onClick={submitData} 
                    >
                    Search
                </Button>
            </FormGroup>
        </div>
        </Grid>
    </div>
  )
}

export default SearchBox