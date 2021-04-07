import React from 'react';

function useVideoPlayer() {
  const videoPlayerRef = React.useRef();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const handleVideoMetadataLoaded = () => {
    setDuration(videoPlayerRef.current.duration);
    setCurrentTime(videoPlayerRef.current.currentTime);
    setIsLoaded(true);
  };

  const handleTimeUpdate = () => setCurrentTime(videoPlayerRef.current.currentTime);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoPlayerRef.current.play();
    } else {
      videoPlayerRef.current.pause();
    }
  };

  const processVideoTime = (time) => {
    videoPlayerRef.current.currentTime = time;
  };

  const handleFullscreenButtonClick = () => videoPlayerRef.current.requestFullscreen();

  return {
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
  };
}

export default useVideoPlayer;
