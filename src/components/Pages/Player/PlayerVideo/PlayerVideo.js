import React from 'react';
import PropTypes from 'prop-types';

function PlayerVideo() {
  const videoRef = React.useRef();

  return (
    <video
      ref={videoRef}
      src={currentMovie.videoLink}
      type="video/webm"
      className="player__video"
      poster={currentMovie.bgImage}
      onLoadedMetadata={handleVideoMetadataLoaded}
      onTimeUpdate={handleTimeUpdate}
    ></video>
  );
}

export default PlayerVideo;

