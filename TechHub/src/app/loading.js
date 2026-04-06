import { Activity } from 'lucide-react';
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Activity className="w-12 h-12 text-blue-600 animate-spin" />
    </div>
  );
}