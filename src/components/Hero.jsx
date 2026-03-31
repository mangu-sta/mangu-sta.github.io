import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import Terminal from './Terminal';

const phrases = [
  "배움을 멈추지 않는",
  "꾸준히 성장하는",
  "끝까지 파고드는"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    let timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);
  return (
    <section id="introduction" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--nav-height)'
    }}>
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '3rem', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <div className="fade-in-up" style={{ flex: '6 1 500px', minWidth: '300px', maxWidth: '700px' }}>
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
            fontSize: 'clamp(1.5rem, 6vw, 3.8rem)', 
            fontWeight: '700', 
            lineHeight: '1.4',
            marginBottom: '1.5rem',
            color: 'var(--color-text-main)',
            wordBreak: 'keep-all'
          }}>
            안녕하세요.<br />
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--color-primary)' }}>{text}</span>
              <span className="cursor-blink" style={{ fontWeight: '300' }}>|</span>
            </span><br />
            신입&nbsp;백엔드&nbsp;개발자<br />
            <span style={{ color: 'var(--color-secondary)' }}>최명기</span>입니다.
          </h1>
          <div style={{ 
            maxWidth: '650px', 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '1.15rem', 
            color: 'var(--color-text-muted)',
            marginBottom: '3rem',
            lineHeight: '1.8',
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
          
          <a 
            href="#portfolio"
            className="hero-btn"
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
          </a>
        </div>
        
        <div className="fade-in-up delay-2" style={{ flex: '4 1 350px', display: 'flex', justifyContent: 'flex-end', maxWidth: '450px' }}>
          <Terminal />
        </div>
      </div>

      <div 
        className="bounce-animation"
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
      </div>
    </section>
  );
};

export default Hero;
