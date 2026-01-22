import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(to top, var(--color-surface), transparent)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ 
          maxWidth: '500px', 
          margin: '0 auto 3rem', 
          fontSize: '1.2rem', 
          color: 'var(--color-text-muted)' 
        }}>
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:hello@example.com"
          style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            border: '2px solid var(--color-primary)',
            color: 'var(--color-primary)',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '4rem'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--color-primary)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--color-primary)';
          }}
        >
          Say Hello
        </a>
        
        <footer style={{ 
          borderTop: '1px solid var(--color-border)', 
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
              <a key={idx} href="#" style={{ color: 'var(--color-text-muted)' }}>
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © 2024 Mangu. Built with React & Vite.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
