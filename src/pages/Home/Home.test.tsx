import { screen } from '@testing-library/dom';
import Home from './Home';
import renderWithProvider from '__test__/renderWithProviders';

describe('<Home />', () => {
  test('로고 이미지가 정상적으로 렌더링되는지 확인', () => {
    renderWithProvider(<Home />);

    const logoImage = screen.getByAltText('logo');

    expect(logoImage).toBeInTheDocument();
  });
});
