'use client';
import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
export default function ArticlesPage() {
  return (
    <main><Navbar /><section className="pt-24 pb-16 px-4 min-h-screen"><div className="max-w-7xl mx-auto"><h1 className="text-4xl font-bold mb-8">Artigos</h1><p className="text-gray-600">Em breve: artigos sobre IA e tecnologia.</p></div></section><Footer /></main>
  );
}