import { useEffect, useState } from 'react';

function computeParts(end) {
  const diff = Math.max(0, end.getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return {
    days,
    parts: [
      { value: String(days).padStart(2, '0'), label: 'Days' },
      { value: String(hours).padStart(2, '0'), label: 'Hrs' },
      { value: String(mins).padStart(2, '0'), label: 'Min' },
      { value: String(secs).padStart(2, '0'), label: 'Sec' },
    ],
  };
}

export default function useCountdown(end) {
  const [state, setState] = useState(() => computeParts(end));

  useEffect(() => {
    const id = setInterval(() => setState(computeParts(end)), 1000);
    return () => clearInterval(id);
  }, [end]);

  return state;
}
