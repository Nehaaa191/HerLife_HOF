'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Calendar,
  TrendingUp
} from 'lucide-react';
import styles from './CycleTracker.module.css';
import DashboardNavbar from '../shared/DashboardNavbar';

export default function CycleTracker() {
  const router = useRouter();
  
  const [startDate, setStartDate] = useState('2026-04-06');
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const historyData = [
    { date: 'March 9, 2026', duration: 4, cycleLength: 28 },
    { date: 'February 9, 2026', duration: 4, cycleLength: 28 },
    { date: 'January 12, 2026', duration: 4, cycleLength: 28 },
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <DashboardNavbar activeTab="tracker" />

      {/* Main Content */}
      <main className={styles.content}>
        
        <div className={styles.gridContainer}>
          {/* Cycle Tracker Inputs */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Calendar color="var(--primary)" size={24} />
              <h2 className={styles.cardTitle}>Cycle Tracker</h2>
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Last Period Start Date</label>
              <input 
                type="date" 
                className={styles.inputField} 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Average Cycle Length (days)</label>
              <input 
                type="number" 
                className={styles.inputField} 
                value={cycleLength}
                onChange={(e) => setCycleLength(Number(e.target.value))}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Period Length (days)</label>
              <input 
                type="number" 
                className={styles.inputField} 
                value={periodLength}
                onChange={(e) => setPeriodLength(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className={styles.infoCardsContainer}>
            <div className={`${styles.infoCard} ${styles.infoCardPrimary}`}>
              <div className={styles.infoLabel}>Next Expected Period</div>
              <div className={styles.infoValue}>May 4, 2026</div>
            </div>

            <div className={`${styles.infoCard} ${styles.infoCardSuccess}`}>
              <div className={styles.infoLabel}>Current Phase</div>
              <div className={styles.infoValue}>Follicular Phase</div>
              <div className={styles.infoSubtitle}>Day 13 of your cycle</div>
              <div className={styles.infoSubtitle}>Energy levels are rising. Great time for new activities!</div>
            </div>
          </div>
        </div>

        {/* Cycle History */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <TrendingUp color="var(--primary)" size={24} />
            <h2 className={styles.cardTitle}>Cycle History</h2>
          </div>

          <div className={styles.historyList}>
            {historyData.map((item, index) => (
              <div key={index} className={styles.historyItem}>
                <div>
                  <div className={styles.historyDate}>{item.date}</div>
                  <div className={styles.historyDuration}>Duration: {item.duration} days</div>
                </div>
                <div className={styles.historyLengthWrapper}>
                  <div className={styles.historyLengthLabel}>Cycle Length</div>
                  <div className={styles.historyLengthValue}>{item.cycleLength} days</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
