import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "EcoTracker",
    description: "A sustainable lifestyle tracking dashboard utilizing real-time data visualization.",
    tags: ["React", "D3.js", "Firebase"],
    color: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
  },
  {
    title: "CryptoFolio",
    description: "Cryptocurrency portfolio manager with live price updates and market analysis tools.",
    tags: ["Next.js", "TypeScript", "CoinGecko API"],
    color: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)"
  },
  {
    title: "TaskMaster AI",
    description: "Smart task management application featuring AI-powered priority suggestions.",
    tags: ["Python", "FastAPI", "OpenAI"],
    color: "linear-gradient(135deg, #db2777 0%, #ec4899 100%)"
  },
  {
    title: "NeonSpace",
    description: "Immersive 3D portfolio experience built with Three.js and WebGL.",
    tags: ["Three.js", "WebGL", "GSAP"],
    color: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
  }
];

const Projects = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--color-surface)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)'
              }}
            >
              {/* Project Image Placeholder */}
              <div style={{
                height: '200px',
                background: project.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '3rem', opacity: 0.3, fontWeight: 'bold' }}>
                  {project.title[0]}
                </span>
              </div>
              
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', minHeight: '3rem' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--color-primary)',
                      background: 'rgba(168, 85, 247, 0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '100px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ 
                    flex: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'var(--color-text-main)',
                    color: 'var(--color-bg)',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    <ExternalLink size={18} /> Demo
                  </button>
                  <button style={{ 
                    flex: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem',
                    padding: '0.75rem',
                    background: 'transparent',
                    color: 'var(--color-text-main)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    <Github size={18} /> Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
