'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "1.jpg",
  "2.jpeg",
];

export default function Home() {
  const gallery = useRef(null);
  const animatedTextSection = useRef(null); // Reference for animated text section
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  // Animate text horizontally based on scroll position within its section
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  // Animate text horizontally (left to right) within the section
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative h-full overflow-hidden p-8">
      <main className={styles.main}>
        <div ref={gallery} className={styles.gallery}>
          <Column className={styles.column1} images={[images[0], images[1], images[0], images[1]]} y={y} />
          <Column className={styles.column2} images={[images[0], images[1], images[0], images[1]]} y={y2} />
        </div>
        {/* Wrap AnimatedText in a specific section to constrain its movement */}
        <section ref={animatedTextSection} className={styles.animatedTextSection}>
          <AnimatedText x={x} />
        </section>
      </main>
    </div>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      className={styles.column}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image
            src={`/images/${src}`}
            alt="image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </motion.div>
  );
};

const AnimatedText = ({ x }) => {
  return (
    <motion.div
      className={styles.animatedText}
      style={{ x }}
    >
      <span>Scrolling Text Animation</span>
    </motion.div>
  );
};
