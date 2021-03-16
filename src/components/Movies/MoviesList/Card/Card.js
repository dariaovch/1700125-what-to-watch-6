import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PlayerVideo from 'src/components/Pages/Player/PlayerVideo/PlayerVideo';

function Card({item, onOver, onOut, activeMovie}) {
  const activeVideoRef = React.useRef();

  const handleMouseOver = () => {
    onOver(item, activeVideoRef);
  };

  const handleMouseOut = () => {
    onOut(activeVideoRef);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="small-movie-card__image">
        {!activeMovie && <img src={item.image} alt={item.alt} width="280" height="175" />}
        {activeMovie && <PlayerVideo ref={activeVideoRef} videoSrc={item.videoLink} bgImage={item.image} isMuted={true} />}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${item.id}`}>{item.title}</Link>
      </h3>
    </article>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingLevel: PropTypes.string,
    ratingCount: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  }),
  onOver: PropTypes.func,
  onOut: PropTypes.func,
  activeMovie: PropTypes.object,
};

export default Card;
