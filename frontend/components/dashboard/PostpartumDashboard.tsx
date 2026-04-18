'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Activity, 
  BookOpen,
  FileText,
  Smile,
  Calendar,
  Check,
  Lightbulb
} from 'lucide-react';
import styles from './PostpartumDashboard.module.css';

export default function PostpartumDashboard({ userName }: { userName?: string }) {
  const router = useRouter();

  const milestones = [
    { title: "Weeks 0-2: Early Recovery", desc: "Rest, bond with baby, basic self-care. Bleeding (lochia) is normal." },
    { title: "Weeks 2-6: Gradual Healing", desc: "Gentle walking, pelvic floor exercises. Attend postpartum checkup." },
    { title: "6+ Weeks: Cleared for Activity", desc: "Resume exercise with doctor approval. Periods may return." }
  ];

  const tips = [
    { title: "Rest is essential - sleep when baby sleeps", desc: "Your body needs time to heal from childbirth" },
    { title: "Stay hydrated - drink 8-10 glasses of water daily", desc: "Especially important if breastfeeding" },
    { title: "Don't hesitate to ask for help from family and friends", desc: "Recovery is easier with a support system" }
  ];

  const moods = ["Energized", "Tired", "Emotional", "Great"];

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
          <button className={styles.navItem} onClick={() => router.push('/postpartum/wellness')}>
            <Activity size={20} /> Track Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/log')}>
            <FileText size={20} /> Daily Log
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/mental-health')}>
            <Heart size={20} /> Mental Health
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Hero Card */}
        <div className={`${styles.card} ${styles.heroCard}`}>
          <div className={styles.heroTitle}>
            <Smile size={32} /> Your Postpartum Journey
          </div>
          <div className={styles.heroSubtitle}>
            Recovery and healing progress
          </div>
          
          <div className={styles.heroStatsGrid}>
            <div className={styles.heroStatBox}>
              <div className={styles.statLabel}>Days Since Birth</div>
              <div className={styles.statValue}>62</div>
            </div>
            <div className={styles.heroStatBox}>
              <div className={styles.statLabel}>Weeks Postpartum</div>
              <div className={styles.statValue}>8</div>
            </div>
            <div className={styles.heroStatBox}>
              <div className={styles.statLabel}>Delivery Date</div>
              <div className={styles.statValue}>Feb 15, 2026</div>
            </div>
          </div>
        </div>

        {/* Period Tracker */}
        <div className={styles.card}>
          <div className={styles.sectionHeader}>
            <Calendar size={24} /> Period Tracker
          </div>
          
          <div className={styles.trackerGrid}>
            <div className={`${styles.trackerBox} ${styles.trackerBoxOrange}`}>
              <div className={styles.trackerLabel}>Last Period</div>
              <div className={styles.trackerValue}>March 20</div>
              <div className={styles.trackerSubItem}>
                <div className={styles.trackerDot}></div>
                Cycle length: 28 days
              </div>
            </div>
            
            <div className={`${styles.trackerBox} ${styles.trackerBoxWhite}`}>
              <div className={styles.trackerLabel}>Next Expected Period</div>
              <div className={styles.trackerValue}>April 17</div>
              <div className={styles.trackerSubItem}>
                <div className={styles.trackerIconBox}>
                  <Calendar size={14} />
                </div>
                In -1 days
              </div>
            </div>
          </div>

          <div className={styles.trackerNote}>
            <Lightbulb fill="currentColor" size={18} />
            <strong>Note:</strong> Periods may return 6-8 weeks postpartum if not breastfeeding, or several months later if exclusively breastfeeding. Cycles may be irregular at first.
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinksGrid}>
          <button className={styles.quickLinkCard} onClick={() => router.push('/postpartum/wellness')}>
            <div className={styles.quickLinkIcon}>
              <Activity size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Track Wellness</div>
            <div className={styles.quickLinkDesc}>Exercise, nutrition & hydration</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/postpartum/learn')}>
            <div className={styles.quickLinkIcon}>
              <BookOpen size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Learn</div>
            <div className={styles.quickLinkDesc}>Postpartum education</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/postpartum/log')}>
            <div className={styles.quickLinkIcon}>
              <FileText size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Daily Log</div>
            <div className={styles.quickLinkDesc}>Track your recovery</div>
          </button>

          <button className={styles.quickLinkCard} onClick={() => router.push('/postpartum/mental-health')}>
            <div className={styles.quickLinkIcon}>
              <Heart size={24} />
            </div>
            <div className={styles.quickLinkTitle}>Mental Health</div>
            <div className={styles.quickLinkDesc}>Check your mood</div>
          </button>
        </div>

        {/* Recovery Milestones */}
        <div className={styles.card}>
          <div className={styles.sectionHeader} style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 500 }}>
            Recovery Milestones
          </div>
          <div className={styles.listContainer}>
            {milestones.map((item, idx) => (
              <div key={idx} className={styles.listItem}>
                <div className={styles.listItemIcon}>
                  <Check size={20} strokeWidth={3} />
                </div>
                <div className={styles.listItemContent}>
                  <div className={styles.listItemTitle}>{item.title}</div>
                  <div className={styles.listItemDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Tips */}
        <div className={styles.card}>
          <div className={styles.sectionHeader} style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
            Postpartum Recovery Tips
          </div>
          <div className={styles.listContainer}>
            {tips.map((item, idx) => (
              <div key={idx} className={styles.listItem}>
                <div className={styles.listItemDot}></div>
                <div className={styles.listItemContent}>
                  <div className={styles.listItemTitle}>{item.title}</div>
                  <div className={styles.listItemDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Log */}
        <div className={styles.card}>
          <div className={styles.moodHeader}>
            <div className={styles.moodTitle}>How Are You Feeling Today?</div>
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
