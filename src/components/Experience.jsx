import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "시니어 소프트웨어 엔지니어",
    company: "(주)테크솔루션",
    date: "2024 - 현재",
    description: "React와 Node.js를 활용한 확장 가능한 웹 애플리케이션 개발을 주도하고 있습니다. 성능 최적화를 통해 로딩 시간을 40% 단축시켰습니다."
  },
  {
    title: "프론트엔드 개발자",
    company: "크리에이티브 스튜디오",
    date: "2022 - 2024",
    description: "인터랙티브한 포트폴리오와 이커머스 플랫폼을 구축했습니다. 디자이너와 협업하여 픽셀 퍼펙트한 UI를 구현했습니다."
  },
  {
    title: "컴퓨터공학 학사",
    company: "한국대학교",
    date: "2018 - 2022",
    description: "우등으로 졸업하였으며, 알고리즘과 HCI(인간-컴퓨터 상호작용) 분야를 중점적으로 연구했습니다."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">경력</h2>
        
        <div style={{ position: 'relative', marginTop: '2rem' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '9px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--color-border)',
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
                  paddingLeft: '50px'
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '0',
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
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>{exp.title}</h3>
                  <h4 style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{exp.company}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{exp.description}</p>
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
