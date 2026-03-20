import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <main className="relative">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="quirky-border bg-white text-quirky-black px-4 py-2 font-display text-2xl pointer-events-auto">
          KOALA.
        </div>
        <div className="flex gap-4 pointer-events-auto">
          <a 
            href="mailto:3500788359@qq.com" 
            className="quirky-border bg-neon-lime text-quirky-black px-4 py-2 font-bold uppercase text-sm hover:bg-white transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <Hero />
      <Skills />
      <Contact />
    </main>
  );
}

