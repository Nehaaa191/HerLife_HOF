'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Dumbbell,
  Apple,
  Moon
} from 'lucide-react';
import styles from './Wellness.module.css';
import DashboardNavbar from '../shared/DashboardNavbar';

export default function WellnessPage() {
  const router = useRouter();

  const workouts = [
    'High-intensity interval training (HIIT)',
    'Strength training with weights',
    'Running or jogging',
    'Dance cardio',
    'Power yoga'
  ];

  const foods = [
    'Lean proteins (chicken, fish)',
    'Fresh vegetables',
    'Fermented foods',
    'Eggs',
    'Nuts and seeds'
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <DashboardNavbar activeTab="wellness" />

      {/* Main Content */}
      <main className={styles.content}>
        
        <div className={styles.gridContainer}>
          {/* Exercise Recommendations */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Dumbbell color="var(--primary)" size={24} />
              <h2 className={styles.cardTitle}>Exercise Recommendations</h2>
            </div>
            
            <div className={`${styles.infoBox} ${styles.pinkBox}`}>
              <div className={styles.infoLabel}>Current Phase</div>
              <div className={styles.infoValue}>Follicular Phase</div>
            </div>

            <div className={styles.listTitle}>Recommended workouts for this phase:</div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              {workouts.map((workout, index) => (
                <div key={index} className={`${styles.listItem} ${styles.listItemPink}`}>
                  <div className={styles.listDotPink}>{index + 1}</div>
                  <div>{workout}</div>
                </div>
              ))}
            </div>

            <div className={`${styles.tipBox} ${styles.tipBoxBlue}`}>
              <div className={styles.tipHeader}>
                <Moon size={18} /> Pro Tip
              </div>
              <div className={styles.tipContent}>
                Take advantage of increased energy levels! This is your power week.
              </div>
            </div>
          </div>

          {/* Nutrition Guide */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Apple color="var(--primary)" size={24} />
              <h2 className={styles.cardTitle}>Nutrition Guide</h2>
            </div>
            
            <div className={`${styles.infoBox} ${styles.greenBox}`}>
              <div className={styles.infoLabel}>Focus Area</div>
              <div className={styles.infoValue}>Light, fresh foods</div>
            </div>

            <div className={styles.listTitle}>Recommended foods:</div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              {foods.map((food, index) => (
                <div key={index} className={`${styles.listItem} ${styles.listItemGreen}`}>
                  <div className={styles.listDotGreen}></div>
                  <div>{food}</div>
                </div>
              ))}
            </div>

            <div className={`${styles.tipBox} ${styles.tipBoxOrange}`}>
              <div className={styles.tipContent}>
                <div style={{ marginBottom: '0.2rem' }}>Try to avoid:</div>
                <div>Heavy, greasy foods</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
