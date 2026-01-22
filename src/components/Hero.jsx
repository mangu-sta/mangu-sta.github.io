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
            BACKEND DEVELOPER
          </h2>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            fontWeight: '700', 
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            color: 'var(--color-text-main)'
          }}>
            안녕하세요,<br />
            <span style={{ color: 'var(--color-secondary)' }}>망구</span>입니다.
          </h1>
          <p style={{ 
            maxWidth: '650px', 
            fontSize: '1.125rem', 
            color: 'var(--color-text-muted)',
            marginBottom: '3rem',
            lineHeight: '1.8',
            wordBreak: 'keep-all'
          }}>
            Spring Boot 기반으로 서버 로직과 API를 설계하며, 프로젝트 전반의 구조와 데이터 흐름을 고민하는 백엔드 개발자입니다.
            <br />
            안정적이고 효율적인 시스템 구축에 열정을 가지고 있습니다.
          </p>
          
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
