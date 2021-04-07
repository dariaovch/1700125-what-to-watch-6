import {renderHook} from '@testing-library/react-hooks';
import useVideoPlayer from 'src/hooks/use-video-player';

describe(`useVideoplayer custom hook works correctly`, () => {
  it(`useVideoplayer hook returns correct instances`, () => {
    const {result} = renderHook(() => useVideoPlayer());

    const {current} = result;
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
    } = current;

    expect(handleVideoMetadataLoaded).toBeInstanceOf(Function);
    expect(handlePlayClick).toBeInstanceOf(Function);
    expect(handleTimeUpdate).toBeInstanceOf(Function);
    expect(processVideoTime).toBeInstanceOf(Function);
    expect(handleFullscreenButtonClick).toBeInstanceOf(Function);
    expect(isLoaded).toBe(false);
    expect(isPlaying).toBe(false);
    expect(duration).toBe(0);
    expect(currentTime).toBe(0);
  });
});
