export default function Footer() {
  return (
    <footer
      style={{
        background: '#F5F0E8',
        padding: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        color: '#555555',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <span>© 2026 Devayani Gadgil</span>
      <div style={{ display: 'flex', gap: 24 }}>
        <a
          href="https://www.linkedin.com/in/devayanigadgil/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="/resume.pdf">Resume</a>
      </div>
    </footer>
  );
}
