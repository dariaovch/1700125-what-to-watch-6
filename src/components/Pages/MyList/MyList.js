/* eslint-disable camelcase */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from 'src/components/Layout/Header/Header';
import MoviesList from 'src/components/Movies/MoviesList/MoviesList';
import Footer from 'src/components/Layout/Footer/Footer';
import Preloader from 'src/components/Pages/Preloader/Preloader';
import {getMoviesToWatch} from 'src/store/actions/apiActions';

function MyList() {
  const {favoriteMovies} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();


  React.useState(() => {
    if (!favoriteMovies) {
      dispatch(getMoviesToWatch());
    }
  }, [favoriteMovies]);

  if (!favoriteMovies) {
    return <Preloader />;
  }

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
      </div>

      <div className="user-page">
        <Header theme="user" />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList movies={favoriteMovies} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
