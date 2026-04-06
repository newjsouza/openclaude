import Link from 'next/link';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div><h3 className="font-bold flex items-center gap-2"><Cpu className="w-5 h-5" /> TechHub</h3><p className="text-gray-400 mt-2">Plataforma de IA e Tecnologia</p></div>
        <div><h4 className="font-bold mb-4">Links</h4><ul className="space-y-2"><li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li><li><Link href="/articles" className="text-gray-400 hover:text-white">Artigos</Link></li><li><Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li></ul></div>
        <div><h4 className="font-bold mb-4">Social</h4><div className="flex gap-4"><Github className="w-5 h-5 cursor-pointer" /><Twitter className="w-5 h-5 cursor-pointer" /><Linkedin className="w-5 h-5 cursor-pointer" /></div></div>
        <div><h4 className="font-bold mb-4">Newsletter</h4><p className="text-gray-400 text-sm">Receba novidades sobre IA</p></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">© 2026 TechHub. Todos os direitos reservados.</div>
    </footer>
  );
}