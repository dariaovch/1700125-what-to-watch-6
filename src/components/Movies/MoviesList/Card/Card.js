/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PlayerVideo from 'src/components/Pages/Player/PlayerVideo/PlayerVideo';
import {getCurrentMovieData} from 'src/store/actions/apiActions';

function Card({item, onOver, onOut, activeMovie}) {
  const dispatch = useDispatch();
  const activeVideoRef = React.useRef();

  const handleMouseOver = () => {
    onOver(item, activeVideoRef);
  };

  const handleMouseOut = () => {
    onOut(activeVideoRef);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => dispatch(getCurrentMovieData(item.id))}>
      <div className="small-movie-card__image">
        {!activeMovie && <img src={item.preview_image} alt={item.name} width="280" height="175" />}
        {activeMovie && <PlayerVideo ref={activeVideoRef} videoSrc={item.video_link} bgImage={item.background_image} isMuted={true} />}
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
    poster_image: PropTypes.string,
    preview_image: PropTypes.string,
    background_image: PropTypes.string,
    background_color: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scores_count: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    run_time: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    is_favorite: PropTypes.bool,
    video_link: PropTypes.string,
    preview_video_link: PropTypes.string,
  }),
  onOver: PropTypes.func,
  onOut: PropTypes.func,
  activeMovie: PropTypes.object,
};

export default React.memo(Card, (prevProps, nextProps) => {
  return (prevProps.activeMovie === prevProps.item) === (nextProps.activeMovie === nextProps.item);
});
