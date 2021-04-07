import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {getCurrentMovieData} from 'src/store/actions/api-actions';
import Card from 'src/components/movies-catalog/movies-list/card-item/card-item';
import {VIDEO_DELAY_TIME} from 'src/utils/constants';
import ShowMoreButton from 'src/components/movies-catalog/movies-list/show-more-button/show-more-button';
import {CARDS_AMOUNT} from 'src/utils/constants';

function MoviesList({movies}) {
  const dispatch = useDispatch();

  const [activeMovie, setActiveMovie] = React.useState();

  const [shownCards, setShownCards] = React.useState([]);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);

  const handleCardMouseOver = React.useCallback(
      (item, activeVideoRef) => {
        setActiveMovie(item);
        setTimeout(() => {
          if (activeVideoRef.current) {
            activeVideoRef.current.play();
          }
        }, VIDEO_DELAY_TIME);
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
    setShownCards(movies.slice(0, CARDS_AMOUNT));
    if (movies.length <= CARDS_AMOUNT) {
      setIsMoreButtonVisible(false);
    } else {
      setIsMoreButtonVisible(true);
    }
  }, [movies]);

  const handleMoreButtonClick = React.useCallback(
      () => {
        setShownCards(movies.slice(0, shownCards.length + CARDS_AMOUNT));
        if (shownCards.length >= movies.length - CARDS_AMOUNT) {
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
  movies: PropTypes.arrayOf(PropTypes.object),
  isMoreButtonVisible: PropTypes.bool,
  onMoreButtonClick: PropTypes.func,
};

export default MoviesList;
