import { useState, useCallback, useEffect  } from 'react';
import { indexUsers } from '../utils/userUtils';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading'); 
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');

    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        setUsers(indexUsers(data));
        setStatus('success');
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setStatus('error');
      });

    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return { users, status, retry };
}
