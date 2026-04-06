import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
export default function AboutPage() {
  return (
    <main><Navbar /><section className="pt-24 pb-16 px-4 min-h-screen"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold mb-8">Sobre o TechHub</h1><p className="text-gray-600 text-lg">Plataforma de Noticias e Recursos sobre IA e Tecnologia, integrada ao ecossistema OpenClaude.</p></div></section><Footer /></main>
  );
}