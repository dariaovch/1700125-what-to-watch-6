/* eslint-disable camelcase */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getCurrentMovieData} from 'src/store/actions/api-actions';
import useVideoPlayer from 'src/hooks/use-video-player';
import PlayerControls from 'src/components/pages/player-page/player-controls/player-controls';
import PlayerProgressbar from 'src/components/pages/player-page/player-progressbar/player-progressbar';
import PlayerVideo from 'src/components/pages/player-page/player-video/player-video';
import Preloader from 'src/components/pages/preloader/preloader';


function Player() {
  const {currentMovie} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const {id} = useParams();
  const history = useHistory();

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

  React.useEffect(() => {
    if (!currentMovie) {
      dispatch(getCurrentMovieData(id));
    }
  }, [currentMovie]);

  if (!currentMovie) {
    return <Preloader />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
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
            title={currentMovie.name}
            onFullscreenClick={handleFullscreenButtonClick}
          />
        </div>
      </div>
    </>
  );
}

export default Player;
