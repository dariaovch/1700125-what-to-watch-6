/* eslint-disable camelcase */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMoviesToWatch} from 'src/store/actions/api-actions';
import Header from 'src/components/page-layout/page-header/page-header';
import MoviesList from 'src/components/movies-lists/movies-catalog/movies-catalog';
import Footer from 'src/components/page-layout/page-footer/page-footer';
import Preloader from 'src/components/screens/spinner/spinner';

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
