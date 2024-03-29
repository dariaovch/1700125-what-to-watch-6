import React from 'react';
import {render} from '@testing-library/react';
import Preloader from 'src/components/pages/preloader/preloader';

test(`Preloader component should render correctly`, () => {
  const {container} = render(<Preloader />);

  expect(container).toMatchSnapshot();
});
