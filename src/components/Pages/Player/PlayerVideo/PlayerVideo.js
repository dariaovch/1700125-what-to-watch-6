import React from 'react';
import PropTypes from 'prop-types';

const PlayerVideo = React.forwardRef(({videoSrc, bgImage, handleLoadedMetadata, handleTimeUpdate, isMuted}, ref) => (
  <video
    ref={ref}
    src={videoSrc}
    type="video/webm"
    className="player__video"
    poster={bgImage}
    onLoadedMetadata={handleLoadedMetadata}
    onTimeUpdate={handleTimeUpdate}
    muted={isMuted}
  ></video>
));

PlayerVideo.displayName = `PlayerVideo`;

PlayerVideo.propTypes = {
  videoSrc: PropTypes.string,
  bgImage: PropTypes.string,
  handleLoadedMetadata: PropTypes.func,
  handleTimeUpdate: PropTypes.func,
  isMuted: PropTypes.bool,
};

export default PlayerVideo;

