'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      const data = await res.json();
      setStatus(data.success ? '✅ Inscrito com sucesso!' : '❌ Erro: ' + data.error);
    } catch { setStatus('❌ Erro ao enviar'); }
  };
  return (
    <section className="py-16 bg-gray-100 px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
        <p className="text-gray-600 mb-6">Receba as últimas novidades sobre IA</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="flex-1 px-4 py-3 rounded-lg border" required />
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Inscrever</button>
        </form>
        {status && <p className="mt-4 text-gray-600">{status}</p>}
      </motion.div>
    </section>
  );
}