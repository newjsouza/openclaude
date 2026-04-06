import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  return (
    <main><Navbar /><article className="pt-24 pb-16 px-4 min-h-screen"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-4">{slug}</h1><p className="text-gray-600">Artigo em breve.</p></div></article><Footer /></main>
  );
}