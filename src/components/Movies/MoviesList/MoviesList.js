import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Movies/MoviesList/Card/Card';
import {videoDelayTime, cardsAmount} from 'src/utils/constants';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';

function MoviesList({movies}) {
  const [activeMovie, setActiveMovie] = React.useState();

  const [shownCards, setShownCards] = React.useState([]);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);


  const handleCardMouseOver = (item, activeVideoRef) => {
    setActiveMovie(item);
    setTimeout(() => {
      activeVideoRef.current.play();
    }, videoDelayTime);
  };

  const handleCardMouseOut = (activeVideoRef) => {
    activeVideoRef.current.pause();
    setActiveMovie();
  };

  React.useEffect(() => {
    setShownCards(movies.slice(0, cardsAmount));
    if (movies.length <= cardsAmount) {
      setIsMoreButtonVisible(false);
    } else {
      setIsMoreButtonVisible(true);
    }
  }, [movies]);

  function handleMoreButtonClick() {
    setShownCards(movies.slice(0, shownCards.length + cardsAmount));
    if (shownCards.length >= movies.length - cardsAmount) {
      setIsMoreButtonVisible(false);
    }
  }

  return (
    <>
      <div className="catalog__movies-list">
        {shownCards.map((item) =>
          <Card
            key={item.id}
            item={item}
            onOver={handleCardMouseOver}
            onOut={handleCardMouseOut}
            activeMovie={activeMovie}
          />
        )}
      </div>
      {isMoreButtonVisible && <ShowMoreButton onButtonClick={handleMoreButtonClick} />}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    bgImage: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  })),
};

export default MoviesList;
