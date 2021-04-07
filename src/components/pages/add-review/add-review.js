import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getCurrentMovieData} from 'src/store/actions/api-actions';
import Header from 'src/components/page-layout/page-header/page-header';
import ReviewForm from 'src/components/pages/add-review/review-form/review-form';
import {stars} from 'src/utils/constants';


function AddReview() {
  const {currentMovie} = useSelector((state) => state.DATA);

  const {id} = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!currentMovie) {
      dispatch(getCurrentMovieData(id));
    }
  }, [currentMovie]);

  return (
    <>
      <div className="visually-hidden">
        <img src='src/images/controllersImage.svg' />
      </div>

      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={currentMovie.bgImage} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header hasBreadcrumbs={true} movie={currentMovie} />

          <div className="movie-card__poster movie-card__poster--small">
            <img src={currentMovie.posterImage} alt={currentMovie.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm stars={stars} />
        </div>

      </section>

    </>
  );
}

export default AddReview;
