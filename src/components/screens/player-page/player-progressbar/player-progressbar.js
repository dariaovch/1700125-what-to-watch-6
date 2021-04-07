import React from 'react';
import PropTypes from 'prop-types';
import formatDuration from 'src/utils/format-duration';
import extractVideoTime from 'src/utils/extract-video-time';

function PlayerProgressbar({duration, currentTime, processVideoTime}) {
  const porgressbarRef = React.useRef();

  const progressbarValue = `${(currentTime / duration) * 100}`;

  const handleTogglerMouseDown = (evt) => {
    processVideoTime(extractVideoTime(evt, porgressbarRef, duration));

    const updateTimeOnMouseMove = (evtMove) => processVideoTime(extractVideoTime(evtMove, porgressbarRef, duration));

    document.addEventListener(`mousemove`, updateTimeOnMouseMove);

    document.addEventListener(`mouseup`, function handleMouseUp() {
      document.removeEventListener(`mousemove`, updateTimeOnMouseMove);
      document.removeEventListener(`mouseup`, handleMouseUp);
    });
  };

  return (
    <div className="player__controls-row">
      <div className="player__time" >
        <progress ref={porgressbarRef} className="player__progress" value={progressbarValue} max="100"></progress>
        <div onMouseDown={handleTogglerMouseDown} className="player__toggler" style={{left: `${progressbarValue}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{formatDuration(duration - currentTime)}</div>
    </div>
  );
}

PlayerProgressbar.propTypes = {
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  processVideoTime: PropTypes.func,
};

export default PlayerProgressbar;
