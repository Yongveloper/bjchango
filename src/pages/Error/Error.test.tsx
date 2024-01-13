import { renderWithProviders } from '__test__/renderWithProviders';
import Error from './Error';
import { screen, waitFor } from '@testing-library/dom';

describe('<Error />', () => {
  test('주문 실패한 텍스트가 렌더링 되어야 함', async () => {
    renderWithProviders(<Error />);

    expect(
      await screen.findByText(/주문에 실패하였습니다./)
    ).toBeInTheDocument();
    expect(await screen.findByText(/다시 시도해주세요./)).toBeInTheDocument();
  });

  test('페이지 진입 후 3초 뒤에 주문 페이지로 이동해야 함', async () => {
    renderWithProviders(<Error />);

    await waitFor(
      () => {
        expect(window.location.pathname).toBe('/order');
      },
      {
        timeout: 3500,
      }
    );
  });
});
