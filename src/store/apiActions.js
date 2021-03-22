import {ActionCreator} from "src/store/action";

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data)))
);
