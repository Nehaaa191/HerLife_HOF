'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple, 
  Dumbbell, 
  Brain, 
  BookOpen, 
  Trash2,
  Calendar,
  Flame,
  Droplets,
  Smile,
  Moon
} from 'lucide-react';
import styles from './MenopauseDashboard.module.css';

interface OnboardingData {
  userName?: string;
  answers?: {
    last_period?: string;
    stage?: string;
  };
}

export default function MenopauseDashboard({ userName }: { userName?: string }) {
  const router = useRouter();
  const [data, setData] = useState<OnboardingData | null>(null);
  const [stats, setStats] = useState({
    daysSince: 125,
    stage: 'Transitioning',
    lastPeriodDate: 'Dec 15, 2025'
  });

  useEffect(() => {
    const raw = localStorage.getItem('herlife_onboarding');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setData(parsed);
        
        if (parsed.answers?.last_period) {
          const lastDate = new Date(parsed.answers.last_period);
          const today = new Date();
          const diffTime = Math.abs(today.getTime() - lastDate.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          setStats({
            daysSince: diffDays,
            stage: parsed.answers.stage || 'Transitioning',
            lastPeriodDate: lastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          });
        }
      } catch (e) {
        console.error('Failed to parse onboarding data', e);
      }
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.container}>
      {/* MenoWell Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="#D14D72" color="#D14D72" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/nutrition')}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/exercise')}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/mental-health')}>
            <Brain size={20} /> Mental Health
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/learn')}>
            <BookOpen size={20} /> Learn
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
        >
          {/* Hero Card */}
          <motion.section className={styles.heroCard} variants={itemVariants}>
            <div className={styles.heroTitle}>
              <Flame size={36} color="white" /> Your Menopause Journey
            </div>
            
            <div className={styles.heroStatsGrid}>
              <div className={styles.heroStatBox}>
                <div className={styles.statLabel}>Days Since Last Period</div>
                <div className={styles.statValue}>{stats.daysSince}</div>
              </div>
              <div className={styles.heroStatBox}>
                <div className={styles.statLabel}>Stage</div>
                <div className={styles.statValue}>{stats.stage}</div>
              </div>
              <div className={styles.heroStatBox}>
                <div className={styles.statLabel}>Last Period</div>
                <div className={styles.statValue}>{stats.lastPeriodDate}</div>
              </div>
            </div>
          </motion.section>

          {/* Today's Symptoms */}
          <motion.section className={styles.card} variants={itemVariants}>
            <h2 className={styles.sectionHeader}>Today's Symptoms</h2>
            <div className={styles.symptomsGrid}>
              <div className={`${styles.symptomCard} ${styles.hotFlashes}`}>
                <span className={styles.symptomEmoji}>🔥</span>
                <span className={styles.symptomText}>Hot Flashes</span>
              </div>
              <div className={`${styles.symptomCard} ${styles.nightSweats}`}>
                <span className={styles.symptomEmoji}>💧</span>
                <span className={styles.symptomText}>Night Sweats</span>
              </div>
              <div className={`${styles.symptomCard} ${styles.moodChanges}`}>
                <span className={styles.symptomEmoji}>😌</span>
                <span className={styles.symptomText}>Mood Changes</span>
              </div>
              <div className={`${styles.symptomCard} ${styles.sleepIssues}`}>
                <span className={styles.symptomEmoji}>😴</span>
                <span className={styles.symptomText}>Sleep Issues</span>
              </div>
            </div>
          </motion.section>

          {/* Row of Action Cards */}
          <motion.div className={styles.linksGrid} variants={itemVariants}>
             <div className={styles.linkCard} onClick={() => router.push('/menopause/nutrition')} style={{ cursor: 'pointer' }}>
                <div className={styles.linkIconBox} style={{backgroundColor: '#FFedd5'}}><Apple color="#FB923C" /></div>
                <div className={styles.linkInfo}>
                    <h3>Nutrition</h3>
                    <p>Foods for menopause</p>
                </div>
             </div>
             <div className={styles.linkCard} onClick={() => router.push('/menopause/exercise')} style={{ cursor: 'pointer' }}>
                <div className={styles.linkIconBox} style={{backgroundColor: '#FCE7F3'}}><Dumbbell color="#D14D72" /></div>
                <div className={styles.linkInfo}>
                    <h3>Exercise</h3>
                    <p>Stay active & strong</p>
                </div>
             </div>
             <div className={styles.linkCard} onClick={() => router.push('/menopause/mental-health')} style={{ cursor: 'pointer' }}>
                <div className={styles.linkIconBox} style={{backgroundColor: '#EDE9FE'}}><Brain color="#7E22CE" /></div>
                <div className={styles.linkInfo}>
                    <h3>Mental Health</h3>
                    <p>Emotional wellbeing</p>
                </div>
             </div>
             <div className={styles.linkCard} onClick={() => router.push('/menopause/learn')} style={{ cursor: 'pointer' }}>
                <div className={styles.linkIconBox} style={{backgroundColor: '#FEF9C3'}}><BookOpen color="#EAB308" /></div>
                <div className={styles.linkInfo}>
                    <h3>Learn</h3>
                    <p>Menopause education</p>
                </div>
             </div>
          </motion.div>

          {/* Understanding Menopause */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D14D72'}}>
                <Heart size={20} fill="currentColor" /> Understanding Menopause
            </div>
            <div className={styles.stagesGrid}>
              <div className={`${styles.stageCard} ${styles.stageCard1}`}>
                <h3>Perimenopause</h3>
                <p>Transition period with irregular periods</p>
              </div>
              <div className={`${styles.stageCard} ${styles.stageCard2}`}>
                <h3>Menopause</h3>
                <p>12 months without a period</p>
              </div>
              <div className={`${styles.stageCard} ${styles.stageCard3}`}>
                <h3>Postmenopause</h3>
                <p>Years after menopause</p>
              </div>
            </div>
          </motion.section>

          {/* Daily Wellness Tips */}
          <motion.section className={styles.card} variants={itemVariants}>
            <h2 className={styles.sectionHeader} style={{color: '#1F2937'}}>Daily Wellness Tips</h2>
            <div className={styles.tipsContainer}>
              <div className={`${styles.tipBox} ${styles.tip1}`}>
                <h4>Stay cool with breathable fabrics and layers</h4>
                <p>Helps manage hot flashes throughout the day</p>
              </div>
              <div className={`${styles.tipBox} ${styles.tip2}`}>
                <h4>Practice stress-reduction techniques</h4>
                <p>Meditation, yoga, or deep breathing can help</p>
              </div>
              <div className={`${styles.tipBox} ${styles.tip3}`}>
                <h4>Maintain a healthy diet rich in calcium</h4>
                <p>Supports bone health during this transition</p>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}
