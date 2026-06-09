import { motion } from 'framer-motion';

const projects = [
  {
    n: '01',
    tags: ['AUTOMOTIVE UX', 'CASE STUDY'],
    title: 'New Driver Mode',
    desc: 'Automotive UX — a calm, confidence-building interface for first-time drivers.',
    href: '/newdrivermode.html',
    img: '/thumbs/newdrivermode.jpg',
  },
  {
    n: '02',
    tags: ['AI', 'PRODUCT DESIGN'],
    title: 'Hirello.ai',
    desc: 'AI-powered job search platform that matches candidates to roles in seconds.',
    href: '/hirello.html',
    img: '/thumbs/hirello.jpg',
  },
  {
    n: '03',
    tags: ['EDUCATION', 'REDESIGN'],
    title: 'UMBC Study Abroad',
    desc: 'University platform redesign streamlining program discovery and applications.',
    href: '/umbcstudyabroad.html',
    img: '/thumbs/umbc.jpg',
  },
  {
    n: '04',
    tags: ['VR', 'RESEARCH'],
    title: 'VR Usability Study',
    desc: 'Wander on Meta Quest 3 — usability research on spatial navigation.',
    href: '/vrusabilitystudy.html',
    img: '/thumbs/vr.jpg',
  },
];

function Card({ p, i }) {
  return (
    <motion.a
      href={p.href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
      whileHover={{
        backgroundColor: '#F0EDE6',
        borderLeftColor: '#3D6B4F',
      }}
      style={{
        display: 'flex',
        background: '#FAFAF8',
        borderRadius: 12,
        padding: 32,
        gap: 32,
        minHeight: 280,
        borderLeft: '4px solid transparent',
        transition: 'background-color 0.3s ease, border-left-color 0.3s ease',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: '0 0 60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            className="caveat"
            style={{ fontSize: 28, color: '#3D6B4F', lineHeight: 1 }}
          >
            {p.n}
          </div>
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 12,
              fontSize: 11,
              letterSpacing: '0.12em',
              color: '#555555',
              fontWeight: 500,
            }}
          >
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: '#1A1A1A',
              marginTop: 20,
              letterSpacing: '-0.01em',
            }}
          >
            {p.title}
          </h3>
          <p
            style={{
              fontSize: 15,
              color: '#555555',
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            {p.desc}
          </p>
        </div>
        <div
          style={{
            fontSize: 14,
            color: '#3D6B4F',
            fontWeight: 500,
            marginTop: 16,
          }}
        >
          View case study →
        </div>
      </div>
      <div
        style={{
          flex: '0 0 40%',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#EAE5DC',
        }}
      >
        <img
          src={p.img}
          alt={p.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      style={{
        padding: '120px 40px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {projects.map((p, i) => (
          <Card key={p.n} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
