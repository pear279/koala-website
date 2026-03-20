import React from 'react';
import { motion } from 'motion/react';
import { 
  Layout, 
  FileText, 
  Code, 
  Database, 
  Users, 
  PenTool, 
  Lightbulb, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';

const skills = [
  { name: '原型图', icon: Layout, color: 'bg-neon-lime' },
  { name: '需求文档', icon: FileText, color: 'bg-neon-orange' },
  { name: '前端', icon: Code, color: 'bg-neon-blue' },
  { name: '全栈', icon: Database, color: 'bg-purple-400' },
  { name: '数据分析', icon: TrendingUp, color: 'bg-pink-400' },
  { name: '用户分析', icon: Users, color: 'bg-yellow-400' },
  { name: '产品设计', icon: PenTool, color: 'bg-emerald-400' },
  { name: '产品策划', icon: Lightbulb, color: 'bg-indigo-400' },
  { name: '产品运营', icon: Briefcase, color: 'bg-rose-400' },
  { name: '项目管理', icon: Sparkles, color: 'bg-cyan-400' },
];

import { Sparkles } from 'lucide-react';

export const Skills = () => {
  return (
    <section className="py-32 px-6 bg-white text-quirky-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-7xl md:text-8xl uppercase leading-none mb-6">
              MY <span className="text-neon-orange">SUPER</span> POWERS
            </h2>
            <p className="text-xl text-quirky-black/60 font-medium">
              A versatile toolkit for the modern AI era. I don't just manage; I build, analyze, and optimize.
            </p>
          </div>
          <div className="hidden md:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-4 border-quirky-black rounded-full flex items-center justify-center font-display text-sm text-center p-4"
            >
              SCROLL TO EXPLORE
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 2 : -2,
                backgroundColor: '#0f172a',
                color: '#ffffff'
              }}
              className={`quirky-border p-8 flex flex-col items-center text-center gap-4 transition-colors duration-300 cursor-pointer`}
            >
              <div className={`p-4 rounded-2xl ${skill.color} text-quirky-black`}>
                <skill.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-tight">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
