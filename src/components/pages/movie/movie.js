import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {getCurrentMovieData} from 'src/store/actions/api-actions';
import MovieCard from 'src/components/pages/movie/movie-card/movie-card';
import Footer from 'src/components/page-layout/page-footer/page-footer';
import MoreLikeThis from 'src/components/pages/movie/more-like-this/more-like-this';
import Preloader from 'src/components/pages/preloader/preloader';

function Movie() {
  const {
    currentMovie,
  } = useSelector((state) => state.DATA);

  const {id} = useParams();

  const dispatch = useDispatch();

  const history = useHistory();
  const handlePlayClick = () => {
    history.push(`/player/${id}`);
  };


  React.useEffect(() => {
    if (!currentMovie) {
      dispatch(getCurrentMovieData(id));
      window.scrollTo({top: 0});
    }
  }, [currentMovie]);

  if (currentMovie === null) {
    return <Preloader />;
  }

  return (
    <>
      <div className="visually-hidden">
      </div>

      <MovieCard movie={currentMovie} onPlayClick={handlePlayClick} />

      <div className="page-content">

        <MoreLikeThis />

        <Footer />
      </div>
    </>
  );
}

export default Movie;
