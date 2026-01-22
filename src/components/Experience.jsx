import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    date: "2024 - Present",
    description: "Leading the development of scalable web applications using React and Node.js. Optimized performance by 40%."
  },
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    date: "2022 - 2024",
    description: "Built interactive portfolios and e-commerce platforms. Collaborated with designers to implement pixel-perfect UIs."
  },
  {
    title: "Computer Science Degree",
    company: "University of Technology",
    date: "2018 - 2022",
    description: "Graduated with Honors. Specialized in Algorithms and Human-Computer Interaction."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div style={{ position: 'relative', marginTop: '2rem' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--color-border)',
            marginLeft: '20px'
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ 
                  display: 'flex', 
                  gap: '2rem', 
                  position: 'relative',
                  paddingLeft: '60px'
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '11px',
                  top: '0',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--color-bg)',
                  border: '4px solid var(--color-primary)',
                  zIndex: 2
                }}></div>

                <div style={{ flex: 1 }}>
                  <span style={{ 
                    color: 'var(--color-primary)', 
                    fontWeight: '600', 
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    {exp.date}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{exp.company}</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
