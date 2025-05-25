import { Link, useNavigate } from '@remix-run/react';
import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useEffect } from 'react';
import { useAuth } from '~/context/AuthContext';

export const meta: MetaFunction = () => [
  { title: 'Bolt' },
  {
    name: 'description',
    content: 'Talk with Bolt, an AI assistant from StackBlitz',
  },
];

export const loader = () => json({});

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="p-4 flex flex-col gap-4 items-center justify-center h-full">
      <h1 className="text-2xl font-bold">به سامانه نمونه خوش آمدید</h1>
      <p className="text-center">این سامانه به شما اجازه می‌دهد پروژه‌های خود را با کمک هوش مصنوعی ایجاد کنید.</p>
      <Link to="/login" className="bg-blue-500 text-white px-4 py-2">ورود</Link>
    </div>
  );
}
