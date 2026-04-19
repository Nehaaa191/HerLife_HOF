'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple, 
  Dumbbell,
  BookOpen,
  FileText,
  Baby
} from 'lucide-react';
import styles from './PregnantDashboard.module.css';

export default function PregnantDashboard({ userName }: { userName?: string }) {
  const router = useRouter();

  const tips = [
    { 
      title: "Stay hydrated - drink at least 8-10 glasses of water daily", 
      desc: "Hydration is crucial for amniotic fluid levels",
      colorClass: styles.tipColor1
    },
    { 
      title: "Take your prenatal vitamins with food", 
      desc: "Helps with absorption and reduces nausea",
      colorClass: styles.tipColor2
    },
    { 
      title: "Gentle exercise like walking is great for you and baby", 
      desc: "Aim for 30 minutes of moderate activity most days",
      colorClass: styles.tipColor3
    }
  ];

  const moods = ["Energetic", "Nauseous", "Tired", "Good"];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="var(--primary)" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/nutrition')}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/exercise')}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/log')}>
            <FileText size={20} /> Daily Log
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Hero Card */}
        <div className={`${styles.card} ${styles.heroCard}`}>
          <div className={styles.heroTitle}>
            <Baby size={32} /> Second Trimester
          </div>
          <div className={styles.heroSubtitle}>
            Week 18 of your pregnancy
          </div>
          
          <div className={styles.heroStatsGrid}>
            <div className={styles.heroStatBox}>
              <div className={styles.statLabel}>Current Week</div>
              <div className={styles.statValue}>18</div>
            </div>
            <div className={styles.heroStatBox}>
              <div className={styles.statLabel}>Days Until Due</div>
              <div className={styles.statValue}>118</div>
            </div>
            <div className={styles.heroStatBox}>
              <div className={styles.statLabel}>Due Date</div>
              <div className={styles.statValue}>Aug 15, 2026</div>
            </div>
          </div>
        </div>

        {/* Baby This Week */}
        <div className={`${styles.card} ${styles.babyCard}`}>
          <div className={styles.babyTitle}>Your Baby This Week</div>
          <div className={styles.babyContent}>
            <div className={styles.babyIcon}>🫑</div>
            <div className={styles.babyInfo}>
              <div className={styles.sectionHeader} style={{ marginBottom: '0.5rem' }}>Size of a Bell Pepper</div>
              <div className={styles.babyDesc}>Your baby is about 5.6 inches long and weighs around 6.7 ounces</div>
              <div className={styles.babyNotice}>
                <span style={{ color: '#F59E0B' }}>💫</span> Baby can now yawn, hiccup, and make facial expressions!
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinksGrid}>
          <button className={styles.quickLinkCard} onClick={() => router.push('/pregnant/nutrition')}>
            <div className={styles.quickLinkIcon}>
              <Apple size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Nutrition</div>
            <div className={styles.quickLinkDesc}>What to eat during pregnancy</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/pregnant/exercise')}>
            <div className={styles.quickLinkIcon}>
              <Dumbbell size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Exercise</div>
            <div className={styles.quickLinkDesc}>Safe workouts for pregnancy</div>
          </button>

          <button className={`${styles.quickLinkCard} ${styles.quickLinkCardPink}`} onClick={() => router.push('/pregnant/learn')}>
            <div className={`${styles.quickLinkIcon} ${styles.quickLinkIconPink}`}>
              <BookOpen size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Learn</div>
            <div className={styles.quickLinkDesc}>Pregnancy education</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/pregnant/log')}>
            <div className={styles.quickLinkIcon}>
              <FileText size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Daily Log</div>
            <div className={styles.quickLinkDesc}>Track your day</div>
          </button>
        </div>

        {/* Tips for This Week */}
        <div className={`${styles.card} ${styles.tipsCard}`}>
          <div className={styles.sectionHeader}>Tips for This Week</div>
          <div className={styles.tipsList}>
            {tips.map((tip, idx) => (
              <div key={idx} className={`${styles.tipBox} ${tip.colorClass}`}>
                <div className={styles.tipDot}></div>
                <div className={styles.tipContent}>
                  <div className={styles.tipTitle}>{tip.title}</div>
                  <div className={styles.tipDesc}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Log */}
        <div className={`${styles.card} ${styles.moodCard}`}>
          <div className={styles.moodHeader}>
            <div className={styles.moodTitle}>How Are You Feeling?</div>
            <button className={styles.logBtn}>Log Symptoms</button>
          </div>
          <div className={styles.moodGrid}>
            {moods.map((mood, idx) => (
              <button key={idx} className={styles.moodPill}>
                {mood}
              </button>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
