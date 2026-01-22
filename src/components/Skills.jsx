import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"] },
  { category: "Frameworks & Libs", items: ["React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Figma", "Vercel"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
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
                borderRadius: '16px',
                border: '1px solid var(--color-border)'
              }}
            >
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{group.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.items.map((skill) => (
                  <span 
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      background: 'rgba(255,255,255,0.05)',
                      fontSize: '0.9rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--color-text-muted)'
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
