import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAutoRedirectPage(path: string, delay: number) {
  const [seconds, setSeconds] = useState(delay / 1000);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate(path);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return seconds;
}
