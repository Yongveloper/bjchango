import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './store';
import { theme } from './styles/theme';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
