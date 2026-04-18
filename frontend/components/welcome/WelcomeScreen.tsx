'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Welcome.module.css';
import { PartyPopper } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WelcomeScreen() {
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('herlife_onboarding');
    if (data) {
      const parsed = JSON.parse(data);
      setName(parsed.userName || 'there');
    }
  }, []);

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className={styles.iconWrapper}
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <PartyPopper size={64} className={styles.icon} />
        </motion.div>
        
        <h1 className={styles.title}>Hi {name} 👋</h1>
        <p className={styles.subtitle}>
          Welcome to Her Life. We're so glad you're here to take charge of your wellness journey.
        </p>

        <button className={styles.homeBtn} onClick={() => router.push('/')}>
          Go to Home
        </button>
      </motion.div>
    </div>
  );
}
