import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "언어", items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"] },
  { category: "프레임워크 & 라이브러리", items: ["React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion"] },
  { category: "도구 & DevOps", items: ["Git", "Docker", "AWS", "Figma", "Vercel"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="section-title">보유 기술</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--color-bg)',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}
            >
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-primary)', fontWeight: '600' }}>{group.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.items.map((skill) => (
                  <span 
                    key={skill}
                    style={{
                      padding: '0.4rem 0.8rem',
                      borderRadius: '4px',
                      background: 'var(--color-surface)',
                      fontSize: '0.9rem',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-main)',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
