import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="introduction" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
        opacity: 0.5,
        filter: 'blur(50px)',
        zIndex: -1
      }} />
       <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
        opacity: 0.5,
        filter: 'blur(50px)',
        zIndex: -1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontSize: '1.5rem', 
            color: 'var(--color-primary)', 
            marginBottom: '1rem',
            fontWeight: '600',
            letterSpacing: '2px'
          }}>
            HELLO, WORLD
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: '700', 
            lineHeight: '1.1',
            marginBottom: '1.5rem'
          }}>
            I'm <span style={{ color: 'var(--color-text-main)' }}>Mangu</span>.
            <br />
            <span style={{ 
              background: 'linear-gradient(to right, var(--color-text-muted), var(--color-text-main))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.5
            }}>
              Software Engineer
            </span>
          </h1>
          <p style={{ 
            maxWidth: '600px', 
            fontSize: '1.1rem', 
            color: 'var(--color-text-muted)',
            marginBottom: '3rem'
          }}>
            I craft digital experiences with a focus on aesthetics and performance. 
            Passionate about building scalable applications and intuitive user interfaces.
          </p>
          
          <motion.a 
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '600',
              boxShadow: '0 4px 15px var(--color-primary-glow)'
            }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--color-text-muted)'
        }}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
