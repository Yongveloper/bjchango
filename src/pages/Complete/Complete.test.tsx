import { renderWithProviders } from '__test__/renderWithProviders';
import Complete from './Complete';
import { screen } from '@testing-library/dom';

describe('<Complete />', () => {
  test('체크 아이콘 이미지가 렌더링 되어야 함', () => {
    renderWithProviders(<Complete />);

    const checkIcon = screen.getByAltText('check-icon');

    expect(checkIcon).toBeInTheDocument();
  });
});
