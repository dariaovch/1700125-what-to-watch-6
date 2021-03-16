import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import PlayerControls from 'src/components/Pages/Player/PlayerControls/PlayerControls';
import PlayerProgressbar from 'src/components/Pages/Player/PlayerProgressbar/PlayerProgressbar';
import useVideoPlayer from 'src/hooks/useVideoPlayer';
import PlayerVideo from 'src/components/Pages/Player/PlayerVideo/PlayerVideo';


function Player({movies}) {
  const {id} = useParams();
  const history = useHistory();

  const currentMovie = movies.find((item) => item.id === id);

  const handleExit = () => history.push(`/films/${currentMovie.id}`);

  const {
    videoPlayerRef,
    isLoaded,
    handleVideoMetadataLoaded,
    isPlaying,
    handlePlayClick,
    handleTimeUpdate,
    processVideoTime,
    handleFullscreenButtonClick,
    duration,
    currentTime
  } = useVideoPlayer();

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="player">

        <PlayerVideo
          ref={videoPlayerRef}
          videoSrc={currentMovie.videoLink}
          bgImage={currentMovie.bgImage}
          handleLoadedMetadata={handleVideoMetadataLoaded}
          handleTimeUpdate={handleTimeUpdate}
          isMuted={false}
        />

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
    starring: PropTypes.array,
    descriptionShort: PropTypes.string,
    descriptionFull: PropTypes.string,
    videoLink: PropTypes.string,
  }))
};

export default Player;
