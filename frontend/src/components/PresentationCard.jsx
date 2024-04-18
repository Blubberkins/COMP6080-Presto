import React from 'react';
import PropTypes from 'prop-types';

const PresentationCard = ({ name, thumbnail, description, numSlides }) => {
  return <>
    <div></div>
  </>;
};

PresentationCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  numSlides: PropTypes.number.isRequired,
};

export default PresentationCard;
