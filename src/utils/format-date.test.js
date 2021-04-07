import formatDate from 'src/utils/format-date';

let date = null;

describe(`Format date function works correctly`, () => {

  it(`Format date function returns correct date string`, () => {
    date = `2021-03-07T08:04:28.658Z`;
    expect(formatDate(date)).toStrictEqual(`March 7, 2021`);

    date = `2021-02-22T08:04:28.658Z`;
    expect(formatDate(date)).toStrictEqual(`February 22, 2021`);
  });
});
