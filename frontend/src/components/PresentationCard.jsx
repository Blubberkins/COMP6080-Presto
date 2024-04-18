// import React from 'react';
// import { useStyles } from '../styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const PresentationCard = () => {
//   const classes = useStyles();
//   const theme = useTheme();

//   const matches = useMediaQuery(theme.breakpoints.up('sm'));
//   return (
//     <Card className={classes.root} style={{ minWidth: 100, maxWidth: matches ? 345 : 100 }}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://via.placeholder.com/150"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default PresentationCard;
import React from 'react';
import { useStyles } from '../styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PresentationCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const cardWidth = matches ? 400 : 200;
  const cardHeight = Math.max(cardWidth / 2, 100 / 2); // Ensure minimum height of 100px

  return (
    <Card style={{ width: cardWidth, height: cardHeight }}>
      <CardActionArea style={{ height: '100%' }}>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/150"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PresentationCard;
