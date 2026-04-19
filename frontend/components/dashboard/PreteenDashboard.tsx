'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Gamepad2 
} from 'lucide-react';
import styles from './PreteenDashboard.module.css';
import DashboardNavbar from '../shared/DashboardNavbar';

export default function PreteenDashboard({ userName }: { userName?: string }) {
  const router = useRouter();

  const levels = [
    { icon: "🧬", title: "What's happening to my body?" },
    { icon: "🎢", title: "Feelings & Emotions" },
    { icon: "🍎", title: "Healthy Habits" },
    { icon: "🤝", title: "Making Friends" },
    { icon: "🧘‍♀️", title: "Dealing with Changes" }
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <DashboardNavbar activeTab="home" />

      <main className={styles.content}>
        
        {/* Play & Learn Section Stretched Out */}
        <div className={`${styles.card} ${styles.playLearnCard}`}>
          <div className={styles.sectionTitle}>
            <Gamepad2 size={28} color="#4797B1" /> Play & Learn About Growing Up! 🎮
          </div>
          
          <div className={styles.playGrid}>
            <div className={styles.playLeft}>
              <div className={styles.playTitle}>
                👾 Learn Through Games!
              </div>
              <div className={styles.playDesc}>
                Complete fun levels to learn everything about growing up! Answer questions, unlock achievements, and become a pro!
              </div>
              <button className={styles.playBtn}>
                Start Playing! 🎯
              </button>
            </div>
            
            <div className={styles.playRight}>
              <div className={styles.levelsTitle}>
                🏆 10 Exciting Levels!
              </div>
              <div className={styles.levelsList}>
                {levels.map((level, idx) => (
                  <div key={idx} className={styles.levelItem}>
                    <span style={{ fontSize: '1.25rem' }}>{level.icon}</span> {level.title}
                  </div>
                ))}
              </div>
              <div className={styles.moreLevels}>
                ...and 5 more levels!
              </div>
            </div>
          </div>
        </div>

        {/* Did You Know? */}
        <div className={`${styles.card} ${styles.didYouKnowCard}`}>
          <div className={styles.sectionTitle}>
            <Heart fill="#4797B1" color="#4797B1" size={24} /> Did You Know? 🌟
          </div>
          
          <div className={styles.didYouKnowGrid}>
            <div className={`${styles.factBox} ${styles.factYellow}`}>
              <div className={styles.factIcon}>🦄</div>
              <div className={styles.factTitle}>It's Normal!</div>
              <div className={styles.factDesc}>Changes are a natural part of growing up</div>
            </div>
            
            <div className={`${styles.factBox} ${styles.factPink}`}>
              <div className={styles.factIcon}>💪</div>
              <div className={styles.factTitle}>You're Strong!</div>
              <div className={styles.factDesc}>Your body is amazing and capable</div>
            </div>
            
            <div className={`${styles.factBox} ${styles.factGreen}`}>
              <div className={styles.factIcon}>🗣️</div>
              <div className={styles.factTitle}>Talk About It!</div>
              <div className={styles.factDesc}>It's okay to ask questions anytime</div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
