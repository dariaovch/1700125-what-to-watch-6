import {
  filterListByGenre
} from './listActions';
import {ActionType} from './actionType';

describe(`List action creators work correctly`, () => {
  it(`Action creator for filter by genre returns correct action`, () => {
    const genre = `All genres`;

    const expectedAction = {
      type: ActionType.FILTER_LIST,
      payload: genre,
    };

    expect(filterListByGenre(genre)).toEqual(expectedAction);
  });
});
