import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "LoaPlan",
    subtitle: "로스트아크 올인원 유틸리티",
    description: "게임 내 여러 필수 기능이 외부 사이트와 엑셀로 파편화되어 발생하는 사용자 불편을 해소하기 위해 개발되었습니다. 정보 조회부터 일정 관리까지 하나의 웹 서비스로 통합하여, 엑셀을 대체하는 직관적이고 자동화된 사용자 경험(UX)을 제공합니다.",
    features: [
      "Open API 기반 캐릭터 정보 실시간 동기화",
      "커스텀 스케줄링 & 시간 관리 로직 (일일/주간 리셋 반영)",
      "Drag & Drop 및 반응형 UI (Bento Grid) 활용",
      "Jsoup 기반 커뮤니티 데이터 크롤링 및 리스크 탐지"
    ],
    tags: ["React", "Spring Boot", "MariaDB", "OAuth2", "Jsoup"],
    color: "#FFB01D", // LoaPlan Yellowish color
    githubUrl: "https://github.com/mangu-sta/LoaPlan_1.0"
  },
  {
    title: "ROGUE & RELOAD",
    subtitle: "협동형 탑다운 슈팅 서바이벌",
    description: "웹 브라우저에서도 설치 없이 고사양 게임처럼 부드러운 멀티플레이가 가능하도록 구현한 프로젝트입니다. 실시간 데이터 통신의 흐름을 직접 구현하고, WebSocket과 Phaser 엔진을 결합하여 몰입감 있는 경험을 제공합니다.",
    features: [
      "실시간 상호작용 (Move & Combat Sync, Session Validation)",
      "서버 사이드 A* 알고리즘 (Custom Engine & Optimization)",
      "Redis 기반 룸 시스템 & In-Memory Lifecycle 관리",
      "하이브리드 데이터 일관성 (Write-Behind Strategy)"
    ],
    tags: ["Spring Boot", "React", "Phaser 3", "WebSocket", "Redis", "Docker"],
    color: "#D32F2F", // Rogue Red color
    githubUrl: "https://github.com/mangu-sta/R_R_1.0"
  }
];

const Projects = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">주요 프로젝트</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--color-bg)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ 
                padding: '2.5rem',
                borderBottom: '1px solid var(--color-border)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-text-main)', fontWeight: '700' }}>
                      {project.title}
                    </h3>
                    <h4 style={{ fontSize: '1.1rem', color: project.color, fontWeight: '600', marginBottom: '1rem' }}>
                      {project.subtitle}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', maxWidth: '400px', justifyContent: 'flex-end' }}>
                     {project.tags.map(tag => (
                      <span key={tag} style={{ 
                        fontSize: '0.85rem', 
                        color: 'var(--color-text-muted)',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '6px',
                        fontWeight: '500'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={{ 
                  color: 'var(--color-text-main)', 
                  marginBottom: '2rem', 
                  lineHeight: '1.7',
                  fontSize: '1.05rem',
                  marginTop: '1.5rem',
                  maxWidth: '900px'
                }}>
                  {project.description}
                </p>

                <div style={{ 
                  background: 'var(--color-surface)', 
                  padding: '1.5rem', 
                  borderRadius: '12px',
                  border: '1px solid var(--color-border)'
                }}>
                  <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-text-main)' }}>🚀 주요 기능 및 기술적 특징</h5>
                  <ul style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '0.8rem',
                    paddingLeft: '1.2rem' 
                  }}>
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', listStyleType: 'disc' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginTop: '2rem' }}>
                   {project.githubUrl && (
                     <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.6rem 1.2rem',
                          background: 'var(--color-text-main)',
                          color: 'var(--color-bg)',
                          border: 'none',
                          borderRadius: '6px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '0.95rem',
                          textDecoration: 'none'
                        }}>
                        <Github size={18} /> GitHub Repository
                      </a>
                   )}
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
