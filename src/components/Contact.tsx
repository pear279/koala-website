import React from 'react';
import { motion } from 'motion/react';
import { Github, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-32 px-6 bg-quirky-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-display text-8xl md:text-[12vw] uppercase leading-none mb-8"
          >
            SAY <span className="text-neon-blue">HELLO</span>
          </motion.h2>
          <p className="text-2xl text-white/50 max-w-2xl mx-auto">
            Whether you have a question or just want to talk about the future of AI, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.a
            href="mailto:3500788359@qq.com"
            whileHover={{ y: -10 }}
            className="quirky-border p-12 bg-white text-quirky-black flex flex-col items-center gap-6 group"
          >
            <div className="p-6 bg-neon-orange rounded-full text-quirky-black group-hover:scale-110 transition-transform">
              <Mail className="w-10 h-10" />
            </div>
            <div className="text-center">
              <span className="font-mono text-sm uppercase opacity-50 block mb-2">Email Me</span>
              <span className="font-display text-2xl">3500788359@qq.com</span>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/pear279"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10 }}
            className="quirky-border p-12 bg-white text-quirky-black flex flex-col items-center gap-6 group"
          >
            <div className="p-6 bg-neon-blue rounded-full text-quirky-black group-hover:scale-110 transition-transform">
              <Github className="w-10 h-10" />
            </div>
            <div className="text-center">
              <span className="font-mono text-sm uppercase opacity-50 block mb-2">Follow Me</span>
              <span className="font-display text-2xl">github.com/pear279</span>
            </div>
          </motion.a>

          <motion.div
            whileHover={{ y: -10 }}
            className="quirky-border p-12 bg-white text-quirky-black flex flex-col items-center gap-6 group"
          >
            <div className="p-6 bg-neon-lime rounded-full text-quirky-black group-hover:scale-110 transition-transform">
              <MessageCircle className="w-10 h-10" />
            </div>
            <div className="text-center">
              <span className="font-mono text-sm uppercase opacity-50 block mb-2">Chat with AI</span>
              <span className="font-display text-2xl">Coming Soon</span>
            </div>
          </motion.div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl uppercase">
            KOALA <span className="text-neon-lime">© 2026</span>
          </div>
          <div className="flex gap-8 font-mono text-sm uppercase text-white/50">
            <a href="#" className="hover:text-neon-lime transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-lime transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </section>
  );
};
