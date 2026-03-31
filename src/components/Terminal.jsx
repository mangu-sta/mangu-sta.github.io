import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Mangu OS v1.0.0에 오신 것을 환영합니다.' },
    { type: 'output', text: '데이터베이스 연결 중... [OK]' },
    { type: 'output', text: '보안 프로토콜 로드 중... [OK]' },
    { type: 'output', text: '"help"를 입력하여 사용 가능한 명령어를 확인하세요.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let newOutput = [];

    switch (trimmedCmd) {
      case 'help':
        newOutput = [
          { type: 'output', text: '사용 가능한 명령어:' },
          { type: 'output', text: '  whoami  - 내 소개 보기' },
          { type: 'output', text: '  skills  - 핵심 기술 스택 보기' },
          { type: 'output', text: '  clear   - 터미널 화면 지우기' },
          { type: 'output', text: '  help    - 도움말(지금 보시는 화면) 보기' }
        ];
        break;
      case 'whoami':
        newOutput = [{ type: 'output', text: '최명기 (Junior Backend Developer) - 배움을 멈추지 않는 개발자입니다!' }];
        break;
      case 'skills':
        newOutput = [
          { type: 'output', text: '백엔드(Backend): Java, Spring Boot, Spring Security, Spring Data JPA' },
          { type: 'output', text: '인프라/DB: MariaDB, Redis' },
          { type: 'output', text: '프론트엔드(Frontend): React, HTML5, CSS3' }
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo rm -rf /':
        newOutput = [{ type: 'output', text: '권한이 거부되었습니다: 하마터면 소중한 백엔드 서버를 날릴 뻔하셨습니다 😅' }];
        break;
      case '':
        break;
      default:
        if (trimmedCmd.startsWith('sudo')) {
           newOutput = [{ type: 'output', text: `sudo: ${trimmedCmd.replace('sudo ', '')}: 알 수 없는 명령어입니다.` }];
        } else {
           newOutput = [{ type: 'output', text: `알 수 없는 명령어: ${trimmedCmd}. "help"를 입력하여 명령어 목록을 확인하세요.` }];
        }
    }

    setHistory((prev) => [...prev, { type: 'input', text: cmd }, ...newOutput]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      const parent = bottomRef.current.parentNode;
      parent.scrollTop = parent.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="window-btn close"></span>
          <span className="window-btn minimize"></span>
          <span className="window-btn maximize"></span>
        </div>
        <div className="terminal-title">visitor@mangu-dev-server:~</div>
      </div>
      <div className="terminal-body" onClick={() => document.getElementById('terminal-input').focus()}>
        {history.map((line, i) => (
          <div key={i} className="terminal-line">
            {line.type === 'input' && <span className="prompt">visitor@mangu:~$ </span>}
            <span className={line.type}>{line.text}</span>
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="prompt">visitor@mangu:~$ </span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
