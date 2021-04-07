import React from 'react';
import PropTypes from 'prop-types';

function PlayerControls({onPlayClick, isPlaying, isLoaded, title, onFullscreenClick}) {
  return (
    <div className="player__controls-row">
      <button type="button" className="player__play" data-testid="play-button" role="play-button" onClick={onPlayClick}>
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
      <div className="player__name">{isLoaded ? `${title}` : `Loading...`}</div>

      <button type="button" className="player__full-screen" onClick={onFullscreenClick}>
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"></use>
        </svg>
        <span>Full screen</span>
      </button>
    </div>
  );
}

PlayerControls.propTypes = {
  onPlayClick: PropTypes.func,
  isPlaying: PropTypes.bool,
  isLoaded: PropTypes.bool,
  title: PropTypes.string,
  onFullscreenClick: PropTypes.func,
};

export default PlayerControls;
