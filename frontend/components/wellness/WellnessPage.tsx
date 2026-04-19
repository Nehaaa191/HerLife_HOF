'use client';

import React, { useState } from 'react';
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
  Droplet,
  Moon
} from 'lucide-react';
import styles from './Wellness.module.css';
import UserMenu from '../shared/UserMenu';

export default function WellnessPage() {
  const router = useRouter();
  const [glasses, setGlasses] = useState(4);
  const maxGlasses = 8;

  const handleAddGlass = () => {
    if (glasses < maxGlasses) setGlasses(glasses + 1);
  };

  const handleRemoveGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

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
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="var(--primary)" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/young_women')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/tracker')}>
            <Calendar size={20} /> Tracker
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Activity size={20} /> Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pcos')}>
            <Heart size={20} /> PCOS Support
          </button>
          <button className={styles.navItem} onClick={() => router.push('/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <UserMenu />
        </div>
      </nav>

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

        {/* Hydration Tracker */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Droplet color="#3B82F6" size={24} />
            <h2 className={styles.cardTitle}>Hydration Tracker</h2>
          </div>

          <div className={styles.hydrationHeader}>
            <div className={styles.hydrationLabel}>Today's Progress</div>
            <div className={styles.hydrationCount}>{glasses} / {maxGlasses} glasses</div>
          </div>

          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${(glasses / maxGlasses) * 100}%` }}
            ></div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.addBtn} onClick={handleAddGlass}>
              + Add Glass
            </button>
            <button className={styles.removeBtn} onClick={handleRemoveGlass}>
              - Remove
            </button>
          </div>

          <div className={styles.glassesGrid}>
            {[...Array(maxGlasses)].map((_, index) => (
              <div 
                key={index} 
                className={`${styles.glassBox} ${index < glasses ? styles.glassActive : styles.glassInactive}`}
              >
                <Droplet size={28} fill={index < glasses ? 'currentColor' : 'none'} />
              </div>
            ))}
          </div>

          <div className={`${styles.tipBox} ${styles.tipBoxBlue}`} style={{ marginTop: '0' }}>
            <div className={styles.tipHeader}>
              <Droplet size={18} fill="currentColor" /> Hydration Tips
            </div>
            <ul className={styles.tipList}>
              <li>Drink more water during your period to reduce bloating</li>
              <li>Aim for 8-10 glasses during ovulation for optimal hormone balance</li>
              <li>Herbal teas count towards your daily intake!</li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}
