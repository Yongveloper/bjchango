import { renderWithProviders } from '__test__/renderWithProviders';
import Complete from './Complete';
import { screen, waitFor } from '@testing-library/dom';

describe('<Complete />', () => {
  test('체크 아이콘 이미지가 렌더링 되어야 함', () => {
    renderWithProviders(<Complete />);

    const checkIcon = screen.getByAltText('check-icon');

    expect(checkIcon).toBeInTheDocument();
  });

  test("'주문이 완료되었습니다.' 텍스트가 렌더링 되어야 함", () => {
    renderWithProviders(<Complete />);

    const completeElement = screen.getByText('주문이 완료되었습니다.');

    expect(completeElement).toBeInTheDocument();
  });

  test('페이지 진입 후 3초 뒤에 주문 페이지로 이동해야 함', async () => {
    renderWithProviders(<Complete />);

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
