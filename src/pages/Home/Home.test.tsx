import { fireEvent, screen } from '@testing-library/dom';
import Home from './Home';
import renderWithProvider from '__test__/renderWithProviders';

describe('<Home />', () => {
  test('로고 이미지가 정상적으로 렌더링되는지 확인', () => {
    renderWithProvider(<Home />);

    const logoImage = screen.getByAltText('logo');

    expect(logoImage).toBeInTheDocument();
  });

  test("'주문하러 가기' 버튼을 클릭하면 '/order' 경로로 이동하는지 확인", () => {
    const { getByText } = renderWithProvider(<Home />);

    const orderButton = getByText('주문하러 가기');
    fireEvent.click(orderButton);

    expect(window.location.pathname).toBe('/order');
  });
});
