import React from 'react'
import '../style/App.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Stack }from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DisplayBox = (props) => {
  const openLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <Card sx={{ maxWidth: 345 }} className='displayBox'>
      <CardMedia
        component="img"
        alt="company logo"
        height="130"
        width="130"
        image= {props.image ? props.image
        : "http://atlas-content-cdn.pixelsquid.com/stock-images/animal-egg-x7O64d1-600.jpg"}
      />
      <CardContent className='result-card'>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
            <LocationOnIcon color='disabled' fontSize='small'/>
            <Typography variant="subtitle2" color="text.secondary">{props.loc}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Bookmark</Button>
        <Button size="small" onClick={() => openLink(props.siteURL)}>Open Webpage</Button>
      </CardActions>
    </Card>
  )
}

export default DisplayBox