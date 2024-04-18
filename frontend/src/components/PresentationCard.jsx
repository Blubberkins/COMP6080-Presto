import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';
// thumbnail, description, numSlides
const PresentationCard = ({ name, description, numSlides }) => {
  const classes = useStyles();

  return <>
    <div className={classes.presentationCardContainer}>
        <h1 className={classes.presentationCardH1}>{name}</h1><br/>
        <p1>{description}</p1>
        <p>{numSlides}</p>
    </div>
  </>;
};

PresentationCard.propTypes = {
  name: PropTypes.string.isRequired,
//   thumbnail: PropTypes.string,
//   description: PropTypes.string,
//   numSlides: PropTypes.number.isRequired,
};

export default PresentationCard;
