import formatDuration from 'src/utils/format-duration';

let duration = null;

describe(`Format duration function works correctly`, () => {

  it(`Format duration function returns correct value`, () => {
    duration = 604;
    expect(formatDuration(duration)).toStrictEqual(`10:04`);

    duration = 4242;
    expect(formatDuration(duration)).toStrictEqual(`70:42`);
  });
});
