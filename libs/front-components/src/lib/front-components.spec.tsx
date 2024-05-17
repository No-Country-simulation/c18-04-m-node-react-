import { render } from '@testing-library/react';

import FrontComponents from './front-components';

describe('FrontComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontComponents />);
    expect(baseElement).toBeTruthy();
  });
});
