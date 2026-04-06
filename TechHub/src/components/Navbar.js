'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2"><Cpu className="w-6 h-6 text-blue-600" /><span className="font-bold">TechHub</span></Link>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/articles" className="hover:text-blue-600">Artigos</Link>
          <Link href="/about" className="hover:text-blue-600">Sobre</Link>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/articles" onClick={() => setIsOpen(false)}>Artigos</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
        </motion.div>
      )}
    </nav>
  );
}