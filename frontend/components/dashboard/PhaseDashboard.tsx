'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
//import styles from '../../welcome/Welcome.module.css';
import YoungWomenDashboard from './YoungWomenDashboard';

export default function PhaseDashboard({ phase }: { phase: string }) {
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('herlife_onboarding');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setName(parsed.userName || '');
      } catch (e) {}
    }
  }, []);

  if (phase === 'young_women') {
    return <YoungWomenDashboard userName={name} />;
  }

  const phaseTitle = phase.charAt(0).toUpperCase() + phase.slice(1);

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className={styles.title}>Welcome {name ? `, ${name}` : ''} ✨</h1>
        <h2 style={{ color: 'var(--primary-dark)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
          Your {phaseTitle} Dashboard
        </h2>
        <p className={styles.subtitle}>
          Based on your answers, we are personalizing your Her Life experience. Check back soon for your customized insights!
        </p>

        <button className={styles.homeBtn} onClick={() => router.push('/')}>
          Go to Home
        </button>
      </motion.div>
    </div>
  );
}
