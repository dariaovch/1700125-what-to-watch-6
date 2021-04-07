/* eslint-disable camelcase */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMoviesToWatch} from 'src/store/actions/api-actions';
import Header from 'src/components/page-layout/page-header/page-header';
import MoviesList from 'src/components/movies-catalog/movies-list/movies-list';
import Footer from 'src/components/page-layout/page-footer/page-footer';
import Preloader from 'src/components/pages/preloader/preloader';

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
