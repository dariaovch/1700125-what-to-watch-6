import {formatRating} from 'src/utils/formatRating';

let rating = null;

describe(`Format ratingfunction works correctly`, () => {

  it(`Format rating function returns correct string`, () => {
    rating = 10;
    expect(formatRating(rating)).toStrictEqual(`Awesome`);

    rating = 8.4;
    expect(formatRating(rating)).toStrictEqual(`Very good`);

    rating = 5.7;
    expect(formatRating(rating)).toStrictEqual(`Good`);

    rating = 4.2;
    expect(formatRating(rating)).toStrictEqual(`Normal`);

    rating = 2.7;
    expect(formatRating(rating)).toStrictEqual(`Bad`);
  });
});
