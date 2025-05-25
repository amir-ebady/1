import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';
import { useAuth } from '~/context/AuthContext';

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  if (!user) return null;
  return children;
}
