/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import controllersImage from 'src/images/controllersImage.svg';
import PlayerControls from 'src/components/Pages/Player/PlayerControls/PlayerControls';
import PlayerProgressbar from 'src/components/Pages/Player/PlayerProgressbar/PlayerProgressbar';
import useVideoPlayer from 'src/hooks/useVideoPlayer';
import PlayerVideo from 'src/components/Pages/Player/PlayerVideo/PlayerVideo';
import {getCurrentMovieData} from 'src/store/actions/apiActions';
import Preloader from 'src/components/Pages/Preloader/Preloader';
import {getCurrentMovie, getMovies} from 'src/store/reducers/data/selectors';


function Player(props) {
  const {currentMovie, onLoadCurrentMovieData} = props;

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
    onLoadCurrentMovieData(id);
  }, []);

  if (!currentMovie) {
    return <Preloader />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src={controllersImage} />
      </div>

      <div className="player">

        <PlayerVideo
          ref={videoPlayerRef}
          videoSrc={currentMovie.video_link}
          bgImage={currentMovie.background_image}
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

Player.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  currentMovie: PropTypes.object,
  onLoadCurrentMovieData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadCurrentMovieData(id) {
    dispatch(getCurrentMovieData(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
