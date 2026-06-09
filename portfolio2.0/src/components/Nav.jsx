const linkStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  color: '#1A1A1A',
  fontWeight: 500,
};

export default function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'transparent',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '24px 40px',
        gap: 28,
      }}
    >
      <a href="#about" style={linkStyle}>About</a>
      <a href="#work" style={linkStyle}>Work</a>
      <a
        href="https://www.linkedin.com/in/devayanigadgil/"
        target="_blank"
        rel="noreferrer"
        style={linkStyle}
      >
        LinkedIn
      </a>
      <a href="/resume.pdf" style={linkStyle}>Resume</a>
    </nav>
  );
}
