'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Calendar, 
  Activity, 
  BrainCircuit, 
  BookOpen,
  Dumbbell,
  Apple,
  Droplet
} from 'lucide-react';
import styles from './YoungWomenDashboard.module.css';

export default function YoungWomenDashboard({ userName }: { userName: string }) {
  const router = useRouter();
  const [cycleData, setCycleData] = useState({
    nextPeriod: 12,
    cycleDay: 8,
    currentPhase: 'Follicular Phase'
  });

  // Calculate some mock data based on the onboarding data if needed
  useEffect(() => {
    const data = localStorage.getItem('herlife_onboarding');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        // We could use the last_period date and cycle_length to calculate real numbers
        // For now, keeping the static aesthetic from the design
      } catch (e) {}
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="var(--primary)" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => router.push('/')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/tracker')}>
            <Calendar size={20} /> Tracker
          </button>
          <button className={styles.navItem} onClick={() => router.push('/wellness')}>
            <Activity size={20} /> Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pcos')}>
            <Heart size={20} /> PCOS Support
          </button>
          <button className={styles.navItem} onClick={() => router.push('/learn')}>
            <BookOpen size={20} /> Learn
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.content}>
        {/* Hero Card */}
        <motion.div 
          className={styles.mainCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Welcome Back{userName ? `, ${userName}` : ''}!</h1>
          <p>You're currently in your {cycleData.currentPhase}</p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Next Period In</div>
              <div className={styles.statValue}>{cycleData.nextPeriod} days</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Cycle Day</div>
              <div className={styles.statValue}>{cycleData.cycleDay}</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Current Phase</div>
              <div className={styles.statValue}>{cycleData.currentPhase}</div>
            </div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className={styles.actionGrid}>
          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => console.log('Exercise Plan clicked')}
          >
            <div className={styles.iconWrapper}>
              <Dumbbell size={24} />
            </div>
            <h3>Exercise Plan</h3>
            <p>Personalized workouts for your cycle</p>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => console.log('Nutrition Guide clicked')}
          >
            <div className={styles.iconWrapper}>
              <Apple size={24} />
            </div>
            <h3>Nutrition Guide</h3>
            <p>Diet tips for your current phase</p>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => console.log('Hydration Tracker clicked')}
          >
            <div className={styles.iconWrapper}>
              <Droplet size={24} />
            </div>
            <h3>Hydration Tracker</h3>
            <p>Stay hydrated throughout your cycle</p>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => console.log('PCOS Support clicked')}
          >
            <div className={styles.iconWrapper}>
              <BrainCircuit size={24} />
            </div>
            <h3>PCOS Support</h3>
            <p>Manage PCOS symptoms effectively</p>
          </motion.button>
        </div>

        {/* Recommendations Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Today's Recommendations</h2>
          <div className={styles.recommendationsList}>
            <button className={styles.recommendationCard} onClick={() => console.log('Recommendation 1 clicked')}>
              <div className={styles.recommendationDot}></div>
              <div className={styles.recommendationTitle}>High-intensity workouts are great during this phase</div>
              <div className={styles.recommendationSubtitle}>Try cardio or strength training</div>
            </button>
            <button className={styles.recommendationCard} onClick={() => console.log('Recommendation 2 clicked')}>
              <div className={styles.recommendationDot}></div>
              <div className={styles.recommendationTitle}>Focus on protein-rich foods</div>
              <div className={styles.recommendationSubtitle}>Your body needs extra nutrients now</div>
            </button>
            <button className={styles.recommendationCard} onClick={() => console.log('Recommendation 3 clicked')}>
              <div className={styles.recommendationDot}></div>
              <div className={styles.recommendationTitle}>Drink 8-10 glasses of water today</div>
              <div className={styles.recommendationSubtitle}>Hydration supports hormone balance</div>
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
