import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useStyles } from '../styles';
// import { useStyles } from '../styles';

import PrestoAppBar from '../components/AppBar';
import PresentationCard from '../components/PresentationCard';

function Dashboard ({ token, setTokenFunction }) {
  const [store, setStore] = React.useState({});
  const [slides, setSlides] = React.useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    axios.get('http://localhost:5005/store', {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setStore(response.data.store);
      setSlides(response.data.store.slides || []);
    });
  }, []);

  // user details will be logged every time store is updated
  React.useEffect(() => {
    console.log('Store:', store);
  }, [store]);

  const renderCards = () => {
    const currSlides = Object.entries(slides)
      .filter(([presentationId, presentation]) => !presentation.deleted)
      .map(([presentationId, presentation]) => ({ presentationId, presentation }));

    return currSlides.map(({ presentationId, presentation }, index) => (
      <PresentationCard
        key={presentationId}
        name={presentation.title}
        thumbnail={presentation.thumbnail}
        description={presentation.description}
        numSlides={presentation.numSlides}
        presentationId={presentationId}
        className={classes.presentationCard}
      />
    ));
  };

  if (token === null || token === 'null') {
    return <Navigate to="/login" />
  }
  return (
    <>
      <PrestoAppBar loginCheck={true} token={token} setTokenFunction={setTokenFunction}/>
      <div className={classes.presentationCardContainer}>
        {renderCards()}
      </div>
  </>
  );
}

export default Dashboard;
