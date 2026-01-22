import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "WebSockets", "JWT"] },
  { category: "Database & Infra", items: ["Redis", "MariaDB", "Docker", "AWS"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <h2 className="section-title">기술 Stack</h2>
        
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
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}
            >
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--color-text-main)', fontWeight: '700' }}>{group.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {group.items.map((skill) => (
                  <span 
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      background: 'var(--color-surface)',
                      fontSize: '0.95rem',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-muted)',
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
