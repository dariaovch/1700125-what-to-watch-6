import React from 'react';
import PropTypes from 'prop-types';
import formatDuration from 'src/utils/formatDuration';

function PlayerProgressbar({duration, currentTime, processVideoTime}) {
  const porgressbarRef = React.useRef();

  const progressbarValue = `${(currentTime / duration) * 100}`;

  const extractVideoTime = (evt) => {
    const progressbar = porgressbarRef.current;
    const progressbarWidth = progressbar.clientWidth;
    const progressbarStart = progressbar.getBoundingClientRect().left;
    const clickedPosition = evt.pageX;
    const clickedValue = clickedPosition - progressbarStart;
    const timePerPixel = duration / progressbarWidth;

    return clickedValue * timePerPixel;
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
