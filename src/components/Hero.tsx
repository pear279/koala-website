import React from 'react';
import { motion } from 'motion/react';
import { Github, Mail, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Background quirky elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border-2 border-dashed border-white/10 rounded-full pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 bg-neon-lime text-quirky-black font-mono text-sm font-bold rounded-full uppercase tracking-widest">
              Available for new adventures
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="text-neon-orange w-6 h-6" />
            </motion.div>
          </div>

          <h1 className="font-display text-[12vw] leading-[0.85] uppercase mb-8">
            I'M <span className="text-neon-lime">KOALA</span><br />
            <span className="text-stroke-white text-transparent" style={{ WebkitTextStroke: '2px white' }}>AI PRODUCT</span><br />
            MANAGER
          </h1>

          <p className="max-w-2xl text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12">
            Bridging the gap between <span className="text-white font-medium">complex AI tech</span> and <span className="text-white font-medium">human-centric product design</span>. I build things that think, learn, and actually solve problems.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="mailto:3500788359@qq.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="quirky-border bg-neon-lime text-quirky-black px-8 py-4 font-bold flex items-center gap-2 group"
            >
              LET'S TALK <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://github.com/pear279"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="quirky-border bg-transparent border-2 border-white px-8 py-4 font-bold flex items-center gap-2 group"
            >
              GITHUB <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-white text-quirky-black py-4 overflow-hidden border-t-4 border-neon-lime">
        <div className="marquee-text flex gap-8 font-display text-4xl uppercase items-center">
          <span>AI PRODUCT DESIGN</span>
          <div className="w-4 h-4 bg-neon-orange rounded-full" />
          <span>FULL STACK DEVELOPMENT</span>
          <div className="w-4 h-4 bg-neon-blue rounded-full" />
          <span>DATA DRIVEN STRATEGY</span>
          <div className="w-4 h-4 bg-neon-lime rounded-full" />
          <span>USER EXPERIENCE FIRST</span>
          <div className="w-4 h-4 bg-neon-orange rounded-full" />
          <span>AI PRODUCT DESIGN</span>
          <div className="w-4 h-4 bg-neon-orange rounded-full" />
          <span>FULL STACK DEVELOPMENT</span>
          <div className="w-4 h-4 bg-neon-blue rounded-full" />
          <span>DATA DRIVEN STRATEGY</span>
          <div className="w-4 h-4 bg-neon-lime rounded-full" />
          <span>USER EXPERIENCE FIRST</span>
          <div className="w-4 h-4 bg-neon-orange rounded-full" />
        </div>
      </div>
    </section>
  );
};
