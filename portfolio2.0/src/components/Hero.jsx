import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/hero-illustration.json';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ['start start', 'end end'],
  });
  const section2Y = useTransform(scrollYProgress, [0, 1], ['100vh', '0vh']);

  return (
    <div className="hero" ref={containerRef}>
      {/* Section 1 */}
      <section className="hero-section">
        <div
          style={{
            width: 'min(560px, 80vw)',
            marginBottom: 32,
            mixBlendMode: 'multiply',
          }}
        >
          <Lottie animationData={heroAnimation} loop autoplay />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div
            className="caveat"
            style={{ fontSize: 80, lineHeight: 1, color: '#1A1A1A' }}
          >
            hey,
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: 32,
              color: '#1A1A1A',
              marginTop: 8,
            }}
          >
            I'm Devayani.
          </div>
        </div>
      </section>

      {/* Section 2 — slides up on scroll */}
      <motion.section
        className="hero-section"
        style={{ y: section2Y, position: 'relative' }}
      >
        <h1
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.2,
            color: '#1A1A1A',
            textAlign: 'center',
            maxWidth: 1000,
            letterSpacing: '-0.02em',
          }}
        >
          I design{' '}
          <span
            style={{
              background: '#C8E6C2',
              padding: '2px 8px',
              borderRadius: 3,
            }}
          >
            intelligent systems
          </span>{' '}
          that simplify complex workflows.
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18,
            color: '#555555',
            marginTop: 32,
            textAlign: 'center',
          }}
        >
          AI Product Designer @ Hirello.ai
        </p>
      </motion.section>
    </div>
  );
}
