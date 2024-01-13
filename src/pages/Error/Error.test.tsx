import { renderWithProviders } from '__test__/renderWithProviders';
import Error from './Error';
import { screen } from '@testing-library/dom';

describe('<Error />', () => {
  test('주문 실패한 텍스트가 렌더링 되어야 함', async () => {
    renderWithProviders(<Error />);

    expect(
      await screen.findByText(/주문에 실패하였습니다./)
    ).toBeInTheDocument();
    expect(await screen.findByText(/다시 시도해주세요./)).toBeInTheDocument();
  });
});
