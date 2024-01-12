import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAutoRedirectPage(path: string, delay: number) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path);
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, delay]);
}
