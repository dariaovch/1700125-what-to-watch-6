import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Movies/MoviesList/Card/Card';
import {videoDelayTime} from 'src/utils/constants';
import ShowMoreButton from 'src/components/Movies/MoviesList/ShowMoreButton/ShowMoreButton';
import {cardsAmount} from 'src/utils/constants';
import {useDispatch} from 'react-redux';
import {getCurrentMovieData} from 'src/store/actions/apiActions';

function MoviesList({movies}) {
  const dispatch = useDispatch();

  const [activeMovie, setActiveMovie] = React.useState();

  const [shownCards, setShownCards] = React.useState([]);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);

  const handleCardMouseOver = React.useCallback(
      (item, activeVideoRef) => {
        setActiveMovie(item);
        setTimeout(() => {
          activeVideoRef.current.play();
        }, videoDelayTime);
      },
      [activeMovie]
  );

  const handleCardMouseOut = React.useCallback(
      (activeVideoRef) => {
        activeVideoRef.current.pause();
        setActiveMovie();
      },
      [activeMovie]
  );

  const handleCardClick = (id) => {
    dispatch(getCurrentMovieData(id));
  };

  React.useEffect(() => {
    setShownCards(movies.slice(0, cardsAmount));
    if (movies.length <= cardsAmount) {
      setIsMoreButtonVisible(false);
    } else {
      setIsMoreButtonVisible(true);
    }
  }, [movies]);

  const handleMoreButtonClick = React.useCallback(
      () => {
        setShownCards(movies.slice(0, shownCards.length + cardsAmount));
        if (shownCards.length >= movies.length - cardsAmount) {
          setIsMoreButtonVisible(false);
        }
      },
      [shownCards]
  );

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
            onCardClick={handleCardClick}
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
  isMoreButtonVisible: PropTypes.bool,
  onMoreButtonClick: PropTypes.func,
};

export default MoviesList;
