import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Card = ({ name, thumbnail, description, numSlides }) => {
    // Determine the aspect ratio for the card
    const aspectRatio = 2 / 1;
  
    // Determine the width of the card based on the aspect ratio
    const minWidth = 100;
    const width = minWidth * aspectRatio;
  
    return (
      <div className="card" style={{ width: `${width}px` }}>
        <div className="thumbnail">
          {thumbnail ? (
            <img src={thumbnail} alt="Thumbnail" />
          ) : (
            <div className="empty-thumbnail" />
          )}
        </div>
        <div className="content">
          <h3>{name}</h3>
          {description && <p>{description}</p>}
          <p>Slides: {numSlides}</p>
        </div>
      </div>
    );
  };
  
  Card.propTypes = {
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    numSlides: PropTypes.number.isRequired,
  };
  
  export default Card;