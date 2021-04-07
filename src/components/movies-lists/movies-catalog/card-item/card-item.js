import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PlayerVideo from 'src/components/screens/player-page/player-video/player-video';

function Card({item, onOver, onOut, activeMovie, onCardClick}) {
  const activeVideoRef = React.useRef();

  const handleMouseOver = () => {
    onOver(item, activeVideoRef);
  };

  const handleMouseOut = () => {
    onOut(activeVideoRef);
  };

  return (
    <article className="small-movie-card catalog__movies-card" data-testid="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => onCardClick(item.id)}>
      <div className="small-movie-card__image">
        {!activeMovie && <img src={item.previewImage} alt={item.name} width="280" height="175" />}
        {activeMovie && <PlayerVideo ref={activeVideoRef} videoSrc={item.videoLink} bgImage={item.bgImage} isMuted={true} />}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${item.id}`}>{item.name}</Link>
      </h3>
    </article>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    bgImage: PropTypes.string,
    bgColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
  }),
  onOver: PropTypes.func,
  onOut: PropTypes.func,
  activeMovie: PropTypes.object,
  onCardClick: PropTypes.func,
};

export default React.memo(Card, (prevProps, nextProps) => {
  return (prevProps.activeMovie === prevProps.item) === (nextProps.activeMovie === nextProps.item);
});
