import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl mt-4">Página não encontrada</h2>
        <Link href="/" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">← Voltar para Home</Link>
      </div>
    </div>
  );
}