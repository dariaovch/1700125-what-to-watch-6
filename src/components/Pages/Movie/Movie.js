/* eslint-disable camelcase */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import MovieCard from 'src/components/Pages/Movie/MovieCard/MovieCard';
import Footer from 'src/components/Layout/Footer/Footer';
import NotFound from 'src/components/Pages/NotFound/NotFound';
import MoreLikeThis from 'src/components/Pages/Movie/MoreLikeThis/MoreLikeThis';
import {getCurrentMovieData} from 'src/store/actions/apiActions';

function Movie() {
  const {
    currentMovie,
  } = useSelector((state) => state.DATA);

  const {id} = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!currentMovie) {
      dispatch(getCurrentMovieData(id));
    }
  }, [currentMovie]);

  if (!currentMovie) {
    return <NotFound />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
      </div>

      <MovieCard movie={currentMovie} />

      <div className="page-content">

        <MoreLikeThis />

        <Footer />
      </div>
    </>
  );
}

export default Movie;
