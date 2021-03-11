import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';

function Player({movies}) {

  const [currentMovie, setCurrentMovie] = React.useState({
    id: ``,
    image: ``,
    alt: ``,
    title: ``,
    genre: ``,
    year: ``,
    poster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: ``,
    director: ``,
    starring: ``,
    descriptionShort: ``,
    descriptionFull: ``,
    videoLink: ``,
  });
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef();

  const {id} = useParams();

  const findMovie = () => {
    return movies.find((item) => item.id === id);
  };

  React.useEffect(() => {
    setCurrentMovie(findMovie);
  }, []);

  const history = useHistory();

  function handleExit() {
    history.push(`/films/${currentMovie.id}`);
  }

  function handlePlayClick() {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <>
      <div className="visually-hidden">
        {/* <!-- inject:svg --> */}
        <img src={controllersImage} />
        {/* <!-- endinject --> */}
      </div>

      <div className="player">
        <video ref={videoRef} src={currentMovie.videoLink} type="video/webm" className="player__video" poster={currentMovie.bgImage}></video>

        <button type="button" className="player__exit" onClick={handleExit}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={handlePlayClick}>
              {!isPlaying && <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}

              {isPlaying && <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>}
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Player.propTypes = {
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
    starring: PropTypes.string,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  }))
};

export default Player;
