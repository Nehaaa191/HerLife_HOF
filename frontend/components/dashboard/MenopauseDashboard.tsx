'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple,
  Dumbbell,
  BrainCircuit,
  BookOpen,
  Droplet
} from 'lucide-react';
import styles from './MenopauseDashboard.module.css';
import UserMenu from '../shared/UserMenu';

export default function MenopauseDashboard({ userName }: { userName?: string }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="#D14D72" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/menopause')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/nutrition')}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/exercise')}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/mental-health')}>
            <BrainCircuit size={20} /> Mental Health
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Hero Card */}
        <motion.div 
          className={styles.heroCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.heroTitle}>
            <Droplet fill="currentColor" color="white" size={28} /> 
            Your Menopause Journey
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Days Since Last Period</div>
              <div className={styles.statValue}>125</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Stage</div>
              <div className={styles.statValue} style={{fontSize: '1.8rem'}}>Transitioning</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Last Period</div>
              <div className={styles.statValue} style={{fontSize: '1.8rem'}}>Dec 15, 2025</div>
            </div>
          </div>
        </motion.div>

        {/* Symptoms */}
        <div className={styles.sectionTitle}>Today's Symptoms</div>
        <div className={styles.symptomsGrid}>
          <button className={`${styles.symptomCard} ${styles.sympOrange}`}>
            <span className={styles.symptomIcon}>🔥</span>
            Hot Flashes
          </button>
          <button className={`${styles.symptomCard} ${styles.sympYellow}`}>
            <span className={styles.symptomIcon}>💧</span>
            Night Sweats
          </button>
          <button className={`${styles.symptomCard} ${styles.sympPink}`}>
            <span className={styles.symptomIcon}>😌</span>
            Mood Changes
          </button>
          <button className={`${styles.symptomCard} ${styles.sympPurple}`}>
            <span className={styles.symptomIcon}>😴</span>
            Sleep Issues
          </button>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinksGrid}>
          <button className={styles.quickLinkCard} onClick={() => router.push('/menopause/nutrition')}>
            <div className={styles.quickLinkIcon}>
              <Apple size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Nutrition</div>
            <div className={styles.quickLinkDesc}>Foods for menopause</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/menopause/exercise')}>
            <div className={styles.quickLinkIcon}>
              <Dumbbell size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Exercise</div>
            <div className={styles.quickLinkDesc}>Stay active & strong</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/menopause/mental-health')}>
            <div className={styles.quickLinkIcon}>
              <BrainCircuit size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Mental Health</div>
            <div className={styles.quickLinkDesc}>Emotional wellbeing</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/menopause/learn')}>
            <div className={styles.quickLinkIcon}>
              <BookOpen size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Learn</div>
            <div className={styles.quickLinkDesc}>Menopause education</div>
          </button>
        </div>

        {/* Understanding Menopause */}
        <div className={styles.understandingGrid}>
          <div className={styles.undHeader}>
            <Heart fill="#D14D72" color="#D14D72" size={24} /> 
            Understanding Menopause
          </div>
          
          <div className={`${styles.undCard} ${styles.undYellow}`}>
            <div className={styles.undIcon}>🌸</div>
            <div className={styles.undTitle}>Perimenopause</div>
            <div className={styles.undDesc}>Transition period with irregular periods</div>
          </div>
          
          <div className={`${styles.undCard} ${styles.undOrange}`}>
            <div className={styles.undIcon}>🦋</div>
            <div className={styles.undTitle}>Menopause</div>
            <div className={styles.undDesc}>12 months without a period</div>
          </div>
          
          <div className={`${styles.undCard} ${styles.undBeige}`}>
            <div className={styles.undIcon}>🌺</div>
            <div className={styles.undTitle}>Postmenopause</div>
            <div className={styles.undDesc}>Years after menopause</div>
          </div>
        </div>

        {/* Daily Wellness Tips */}
        <div className={styles.tipsContainer}>
          <div className={styles.sectionTitle}>Daily Wellness Tips</div>
          
          <div className={styles.tipList}>
            <div className={`${styles.tipBox} ${styles.tipYellow}`}>
              <div className={styles.tipDot}></div>
              <div className={styles.tipContent}>
                <div className={styles.tipTitle}>Stay cool with breathable fabrics and layers</div>
                <div className={styles.tipDesc}>Helps manage hot flashes throughout the day</div>
              </div>
            </div>
            
            <div className={`${styles.tipBox} ${styles.tipOrange}`}>
              <div className={styles.tipDot}></div>
              <div className={styles.tipContent}>
                <div className={styles.tipTitle}>Practice stress-reduction techniques</div>
                <div className={styles.tipDesc}>Meditation, yoga, or deep breathing can help</div>
              </div>
            </div>
            
            <div className={`${styles.tipBox} ${styles.tipYellow}`}>
              <div className={styles.tipDot}></div>
              <div className={styles.tipContent}>
                <div className={styles.tipTitle}>Maintain a healthy diet rich in calcium</div>
                <div className={styles.tipDesc}>Supports bone health during this transition</div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
