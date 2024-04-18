import React from 'react';
import { useStyles } from '../styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const PresentationCard = ({ name, description, numSlides, thumbnail, presentationId }) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const cardWidth = matches ? 400 : 200;
  const cardHeight = Math.max(cardWidth / 2, 100 / 2); // Ensure minimum height of 100px

  const cardOnClick = () => {
    navigate(`/presentation/${presentationId}`);
  };

  return (
    <Card className={classes.presentationCard} style={{ width: cardWidth, height: cardHeight }} >
      <CardMedia style={{ height: '50%' }}
          className={classes.media}
          image="https://via.placeholder.com/150"
          title="Contemplative Reptile"
        />
      <CardActionArea style={{ height: '50%' }} onClick={cardOnClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {numSlides} Slides
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PresentationCard;
