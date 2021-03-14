import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';


function formatDuration(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if (seconds < 10) {
    seconds = `0` + seconds;
  }

  return `${minutes}:${seconds}`;
}


function Player({movies}) {
  const porgressbarRef = React.useRef();
  const videoRef = React.useRef();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const {id} = useParams();
  const history = useHistory();

  const currentMovie = movies.find((item) => item.id === id);
  const progressbarValue = `${(currentTime / duration) * 100}`;

  const handleExit = () => history.push(`/films/${currentMovie.id}`); // button

  const handleVideoMetadataLoaded = () => {
    setDuration(videoRef.current.duration);
    setCurrentTime(videoRef.current.currentTime);
    setIsLoaded(true);
  };

  const handleTimeUpdate = () => setCurrentTime(videoRef.current.currentTime);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleFullscreenButtonClick = () => videoRef.current.requestFullscreen();

  const extractVideoTime = (evt) => {
    const progressbar = porgressbarRef.current;
    const progressbarWidth = progressbar.clientWidth;
    const progressbarStart = progressbar.getBoundingClientRect().left;
    const clickedPosition = evt.pageX;
    const clickedValue = clickedPosition - progressbarStart;
    const timePerPixel = duration / progressbarWidth;

    return clickedValue * timePerPixel;
  };

  const processVideoTime = (time) => {
    videoRef.current.currentTime = time;
  };

  const handleTogglerMouseDown = (evt) => {
    processVideoTime(extractVideoTime(evt));

    const updateTimeOnMouseMove = (evtMove) => processVideoTime(extractVideoTime(evtMove));

    document.addEventListener(`mousemove`, updateTimeOnMouseMove);
    document.addEventListener(`mouseup`, function handleMouseUp() {
      document.removeEventListener(`mousemove`, updateTimeOnMouseMove);
      document.removeEventListener(`mouseup`, handleMouseUp);
    });
  };

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="player">
        <video
          ref={videoRef}
          src={currentMovie.videoLink}
          type="video/webm"
          className="player__video"
          poster={currentMovie.bgImage}
          onLoadedMetadata={handleVideoMetadataLoaded}
          onTimeUpdate={handleTimeUpdate}
        ></video>

        <button type="button" className="player__exit" onClick={handleExit}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time" >
              <progress ref={porgressbarRef} className="player__progress" value={progressbarValue} max="100"></progress>
              <div onMouseDown={handleTogglerMouseDown} className="player__toggler" style={{left: `${progressbarValue}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatDuration(duration - currentTime)}</div>
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
            <div className="player__name">{isLoaded ? `${currentMovie.title}` : `Loading...`}</div>

            <button type="button" className="player__full-screen" onClick={handleFullscreenButtonClick}>
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
