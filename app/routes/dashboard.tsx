import { json, type MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { useState } from 'react';
import { ProtectedRoute } from '~/components/ProtectedRoute';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dashboard' },
    { name: 'description', content: 'User dashboard' },
  ];
};

export const loader = () => json({});

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [projectGenerated, setProjectGenerated] = useState(false);

  return (
    <ProtectedRoute>
      <div className="flex flex-col h-full w-full p-4 gap-4">
        <Header />
        {projectGenerated && (
          <div className="flex justify-end">
            <Link
              to="/deployment"
              className="bg-green-500 text-white px-4 py-2"
            >
              درخواست راه‌اندازی
            </Link>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter prompt"
            className="border p-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={() => {
              if (prompt.trim()) setProjectGenerated(true);
            }}
          >
            Generate Project
          </button>
          {projectGenerated && (
            <div className="mt-4 text-sm text-gray-600">
              Project generated for: {prompt}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
