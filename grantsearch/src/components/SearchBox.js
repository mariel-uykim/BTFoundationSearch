import { React, useState, } from 'react'
import '../style/App.css'
import { useTheme } from '@mui/material/styles';
import { Box, TextField, Button, MenuItem, FormControl, 
        InputLabel, OutlinedInput, Chip, Select, Grid }from '@mui/material'

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 20;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

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

const SearchBox = () => {
  const theme = useTheme()
  const [location, setLocation] = useState([])
  const handleChange = (e) => {
    const {
        target: { value },
      } = e;
      setLocation(typeof value === 'string' ? value.split(',') : value,)
  } 
  
  return (
    <div className='search'>
        <h2 className='title'>Grant Search</h2>
        <Grid container justifyContent="center">
        <div className='searchBox'>
            <TextField id='search-box' label="Search" variant="outlined" />
            <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="select-loc-label">Location</InputLabel>
                <Select
                labelId="select-loc-label"
                id="select-loc"
                multiple
                value={location}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-loc" label="Location" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.3 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
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
            <Button className='searchBtn' variant="contained" size="large">Search</Button>
        </div>
        </Grid>
    </div>
  )
}

export default SearchBox