import React from 'react';
import { Mail, Github, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(to top, var(--color-surface), transparent)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">연락처</h2>
        <p style={{ 
          maxWidth: '500px', 
          margin: '0 auto 3rem', 
          fontSize: '1.1rem', 
          color: 'var(--color-text-muted)',
          lineHeight: '1.8'
        }}>
          새로운 기회와 협업에 언제나 열려있습니다.<br/>
          이메일이나 전화로 편하게 연락주세요!
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
          <a 
            href="mailto:mangusta5700@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2rem',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg)',
              color: 'var(--color-text-main)',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={20} /> mangusta5700@gmail.com
          </a>

          <div style={{
             display: 'flex',
             alignItems: 'center',
             gap: '0.8rem',
             padding: '1rem 2rem',
             color: 'var(--color-text-muted)',
             fontSize: '1.1rem'
          }}>
            <Phone size={20} /> 010-4527-7268
          </div>
        </div>
        
        <footer style={{ 
          borderTop: '1px solid var(--color-border)', 
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © 2024 Mangu. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};
export default Contact;
