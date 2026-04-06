import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'TechHub — IA e Tecnologia',
  description: 'Plataforma de Noticias e Recursos sobre IA e Tecnologia',
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}