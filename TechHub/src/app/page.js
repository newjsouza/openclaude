'use client';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { NewsletterForm } from '../components/NewsletterForm';
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewsletterForm />
      <Footer />
    </main>
  );
}