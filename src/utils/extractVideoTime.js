const extractVideoTime = (evt, porgressbarRef, duration) => {
  const progressbar = porgressbarRef.current;
  const progressbarWidth = progressbar.clientWidth;
  const progressbarStart = progressbar.getBoundingClientRect().left;
  const clickedPosition = evt.pageX;
  const clickedValue = clickedPosition - progressbarStart;
  const timePerPixel = duration / progressbarWidth;

  return clickedValue * timePerPixel;
};

export default extractVideoTime;
