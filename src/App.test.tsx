import { render, screen } from '@testing-library/react';
import App from 'App';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

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

    const logo = screen.getByAltText('logo');

    expect(logo).toBeInTheDocument();
  });
});
