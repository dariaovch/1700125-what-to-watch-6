/* eslint-disable camelcase */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {getCurrentMovieData} from 'src/store/actions/api-actions';
import MovieCard from 'src/components/pages/movie/movie-card/movie-card';
import Footer from 'src/components/layout/footer/footer';
import NotFound from 'src/components/pages/not-found/not-found';
import MoreLikeThis from 'src/components/pages/movie/more-like-this/more-like-this';

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

      <MovieCard movie={currentMovie} onPlayClick={handlePlayClick} />

      <div className="page-content">

        <MoreLikeThis />

        <Footer />
      </div>
    </>
  );
}

export default Movie;
