// import { Card, CardActionArea, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
// import React from 'react'
// import "./movie-card.css"
// const FoundMovieCard = ({movieobject}) => {
//   const{ Title,Year,imdbID,type,Poster}=movieobject;
//   const {shadows}=useTheme();
//   return (
//    <CardActionArea className='movie-card'>
//     <Card sx={{height:"450px",position:"relative",
//     ":hover":{boxShadow:shadows[5]},}
//   }>
//       <CardMedia image={Poster} component="img" sx={{height:"100%"}}/>
//       <CardContent className='movie-content' sx={{zIndex:"5",position:"absolute",bottom:"0",backgroundColor:"background.cardContent",width:"100%"}}>
//         <Typography variant='h6' color="text.primary"fontWeight="bold">{Title}</Typography>
//         <Typography variant='h6' color="text.primary"fontWeight="bold"> {Year}</Typography>
//         {/* <Typography>{imdbID}</Typography> */}
//         <Typography variant='h6' color="text.primary"fontWeight="bold">{type}</Typography>
//       </CardContent>
//     </Card>
//    </CardActionArea>
//   )
// }

// export default FoundMovieCard
