'use client';
import { useState, useEffect } from 'react';
import { Activity, Server, ListTodo, Zap, RefreshCw } from 'lucide-react';
export default function DashboardPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/services/status');
      const data = await res.json();
      if (data.success) setServices(data.output);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };
  useEffect(() => { fetchData(); const i = setInterval(fetchData, 30000); return () => clearInterval(i); }, []);
  if (loading) return <div className="min-h-screen flex items-center justify-center"><Activity className="w-12 h-12 text-blue-600 animate-spin" /></div>;
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🧠 Dashboard OpenClaude</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><Server className="w-5 h-5 text-blue-600" /> Serviços</h2>
          <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(services, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}