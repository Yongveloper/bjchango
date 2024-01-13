import { renderHook } from '@testing-library/react';
import { useAutoRedirectPage } from 'hooks/useAutoRedirect';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

jest.useFakeTimers();

describe('useAutoRedirectPage', () => {
  it('지정된 시간 지연 후 주어진 경로로 리다이렉트해야 함', () => {
    renderHook(() => useAutoRedirectPage('/test', 3000), {
      wrapper: BrowserRouter,
    });

    expect(window.location.pathname).toBe('/');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(window.location.pathname).toBe('/test');
  });
});
