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
      overflow: 'hidden',
      paddingTop: 'var(--nav-height)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontSize: '1.25rem', 
            color: 'var(--color-primary)', 
            marginBottom: '1rem',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>
            JUNIOR BACKEND DEVELOPER
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: '700', 
            lineHeight: '1.3',
            marginBottom: '1.5rem',
            color: 'var(--color-text-main)',
            wordBreak: 'keep-all'
          }}>
            안녕하세요.<br />
            신입 백엔드 개발자<br />
            <span style={{ color: 'var(--color-secondary)' }}>최명기</span>입니다.
          </h1>
          <div style={{ 
            maxWidth: '650px', 
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            fontSize: '1.15rem', 
            color: 'var(--color-text-muted)',
            marginBottom: '3rem',
            lineHeight: '1.75',
            wordBreak: 'keep-all'
          }}>
            <p style={{ margin: 0 }}>
              아직 배우는 과정에 있지만, 꾸준히 성장하는 개발자가 되고 있습니다.
            </p>
            <p style={{ margin: 0 }}>
              Spring Boot를 활용해 서비스 로직을 구현하며,<br />
              단순히 동작하는 것을 넘어 <span style={{ color: 'var(--color-text-main)', fontWeight: '600' }}>“왜 이렇게 동작하는지”</span>를 고민하려 노력합니다.
            </p>
            <p style={{ margin: 0 }}>
              작은 경험 하나하나를 통해 기본기를 쌓아가고 있습니다.
            </p>
          </div>
          
          <motion.a 
            href="#portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: 'var(--color-text-main)',
              color: 'var(--color-bg)',
              borderRadius: '4px',
              fontWeight: '500',
              fontSize: '1rem'
            }}
          >
            프로젝트 보기
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--color-text-muted)',
          opacity: 0.6
        }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
