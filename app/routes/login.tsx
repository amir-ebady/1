import { Form, Link, useNavigate } from '@remix-run/react';
import { useState } from 'react';
import { useAuth } from '~/context/AuthContext';

export default function LoginPage() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('نام کاربری یا رمز عبور نادرست است');
    }
  };

  if (user) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="p-4 flex flex-col gap-2 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-2">ورود</h1>
      <Form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border p-2"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border p-2"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          ورود
        </button>
      </Form>
      <Link to="/" className="text-blue-500 underline">بازگشت</Link>
    </div>
  );
}
