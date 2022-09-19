import React from 'react'
import '../style/App.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography }from '@mui/material'

const DisplayBox = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='displayBox'>
      <CardMedia
        component="img"
        alt="company logo"
        height="140"
        image="http://atlas-content-cdn.pixelsquid.com/stock-images/animal-egg-x7O64d1-600.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Bookmark</Button>
        <Button size="small">Open Webpage</Button>
      </CardActions>
    </Card>
  )
}

export default DisplayBox