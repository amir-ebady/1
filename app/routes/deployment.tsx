import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ProtectedRoute } from '~/components/ProtectedRoute';

export const meta: MetaFunction = () => {
  return [
    { title: 'Deployment Request' },
    { name: 'description', content: 'Deployment request page' },
  ];
};

export const loader = () => json({});

export default function DeploymentRequest() {
  return (
    <ProtectedRoute>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">صفحه درخواست راه‌اندازی - بعداً پیاده‌سازی می‌شود</h1>
      </div>
    </ProtectedRoute>
  );
}
