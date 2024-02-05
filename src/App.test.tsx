import { render, screen } from '@testing-library/react';
import App from 'App';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from 'store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import fetchMock from 'jest-fetch-mock';

describe('<App />', () => {
  test("'/'경로에서는 <Home /> 컴포넌트가 렌더링 되어야 함", () => {
    const route = '/';
    render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );

    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  test("'/order'경로에서는 <Order /> 컴포넌트가 렌더링 되어야 함", () => {
    const mockData = [
      {
        id: 1,
        name: 'product1',
        event: 'event1',
        materialType: 'type1',
        price: 100,
      },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const route = '/order';
    const store = setupStore({});

    render(
      <MemoryRouter initialEntries={[route]}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );

    const orderButton = screen.getByText('주문하기');

    expect(orderButton).toBeInTheDocument();
  });

  test('/complete 경로에서는 <Complete /> 컴포넌트가 렌더링 되어야 함', () => {
    const route = '/complete';
    render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );

    const completeText = screen.getByText('주문이 완료되었습니다.');

    expect(completeText).toBeInTheDocument();
  });

  test('/error 경로에서는 <Error /> 컴포넌트가 렌더링 되어야 함', async () => {
    const route = '/error';
    render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(
      await screen.findByText(/주문에 실패하였습니다./)
    ).toBeInTheDocument();
  });
});
