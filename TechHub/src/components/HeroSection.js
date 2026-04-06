'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white px-4">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">TechHub</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/80">Plataforma de Noticias e Recursos sobre IA e Tecnologia</p>
        <div className="flex gap-4 justify-center">
          <Link href="/articles" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100">Explorar Artigos</Link>
          <Link href="/dashboard" className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white/10">Dashboard</Link>
        </div>
      </motion.div>
    </section>
  );
}