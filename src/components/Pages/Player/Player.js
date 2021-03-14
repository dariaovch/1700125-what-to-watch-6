import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import PlayerControls from './PlayerControls/PlayerControls';
import PlayerProgressbar from './PlayerProgressbar/PlayerProgressbar';
import useVideoPlayer from '../../../hooks/useVideoPlayer';


function Player({movies}) {
  const videoRef = React.useRef();
  // const [isLoaded, setIsLoaded] = React.useState(false);
  // const [isPlaying, setIsPlaying] = React.useState(false);
  // const [duration, setDuration] = React.useState(0);
  // const [currentTime, setCurrentTime] = React.useState(0);

  const {id} = useParams();
  const history = useHistory();

  const currentMovie = movies.find((item) => item.id === id);

  const handleExit = () => history.push(`/films/${currentMovie.id}`); // button

  const {
    isLoaded,
    handleVideoMetadataLoaded,
    isPlaying,
    handlePlayClick,
    handleTimeUpdate,
    processVideoTime,
    handleFullscreenButtonClick,
    duration,
    currentTime
  } = useVideoPlayer(videoRef);

  // const handleVideoMetadataLoaded = () => {
  //   setDuration(videoRef.current.duration);
  //   setCurrentTime(videoRef.current.currentTime);
  //   setIsLoaded(true);
  // };

  // const handleTimeUpdate = () => setCurrentTime(videoRef.current.currentTime);

  // const handlePlayClick = () => {
  //   setIsPlaying(!isPlaying);
  //   if (!isPlaying) {
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // };

  // const processVideoTime = (time) => {
  //   videoRef.current.currentTime = time;
  // };

  // const handleFullscreenButtonClick = () => videoRef.current.requestFullscreen();

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
          <PlayerProgressbar
            duration={duration}
            currentTime={currentTime}
            processVideoTime={processVideoTime}
          />

          <PlayerControls
            onPlayClick={handlePlayClick}
            isPlaying={isPlaying}
            isLoaded={isLoaded}
            title={currentMovie.title}
            onFullscreenClick={handleFullscreenButtonClick}
          />
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
