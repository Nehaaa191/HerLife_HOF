'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple, 
  Dumbbell,
  BookOpen,
  FileText,
  Droplet,
  Activity
} from 'lucide-react';
import styles from './PregnantLog.module.css';

export default function PregnantLogPage() {
  const router = useRouter();

  // State for trackers
  const [water, setWater] = useState(5);
  const [activeMood, setActiveMood] = useState<string | null>('Happy');
  const [activeSymptoms, setActiveSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const moods = [
    { label: "Happy", icon: "😊" },
    { label: "Anxious", icon: "😰" },
    { label: "Tired", icon: "😴" },
    { label: "Excited", icon: "🤩" }
  ];

  const symptoms = [
    { label: "Nausea", icon: "🤢" },
    { label: "Fatigue", icon: "😴" },
    { label: "Back Pain", icon: "🦴" },
    { label: "Headache", icon: "🤕" },
    { label: "Cramping", icon: "💢" },
    { label: "Heartburn", icon: "🔥" }
  ];

  const handleWaterAdd = () => {
    if (water < 10) setWater(water + 1);
  };

  const handleWaterRemove = () => {
    if (water > 0) setWater(water - 1);
  };

  const toggleSymptom = (label: string) => {
    if (activeSymptoms.includes(label)) {
      setActiveSymptoms(activeSymptoms.filter(s => s !== label));
    } else {
      setActiveSymptoms([...activeSymptoms, label]);
    }
  };

  const handleSave = () => {
    // In a real app, send to API here
    console.log({ water, activeMood, activeSymptoms, notes });
    alert("Log saved successfully!");
  };

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="var(--primary)" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/pregnant')}>
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
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <FileText size={20} /> Daily Log
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Header Card */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            <FileText size={28} color="var(--primary)" /> Daily Log
          </div>
          <div className={styles.heroDesc}>
            Track your daily wellness, symptoms, and activities
          </div>
        </div>

        {/* Water Intake */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            <Droplet size={24} color="var(--primary)" /> Water Intake
          </div>
          <div className={styles.waterTrackerCard}>
            <div className={styles.waterCount}>{water} / 10 glasses</div>
            <div className={styles.waterSub}>Staying hydrated is essential for you and baby!</div>
            <div className={styles.waterBarBg}>
              <div 
                className={styles.waterBarFill} 
                style={{ width: `${(water / 10) * 100}%` }}
              ></div>
            </div>
            <div className={styles.waterActions}>
              <button className={styles.waterBtnAdd} onClick={handleWaterAdd}>
                + Add Glass
              </button>
              <button className={styles.waterBtnRemove} onClick={handleWaterRemove}>
                - Remove
              </button>
            </div>
          </div>
        </div>

        {/* Mood */}
        <div className={`${styles.card} ${styles.cardPinkBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            <Heart size={24} color="var(--primary)" /> How Are You Feeling?
          </div>
          <div className={styles.moodGrid}>
            {moods.map((mood, idx) => (
              <button 
                key={idx} 
                className={`${styles.moodBtn} ${activeMood === mood.label ? styles.moodBtnActive : ''}`}
                onClick={() => setActiveMood(mood.label)}
              >
                <div className={styles.moodEmoji}>{mood.icon}</div>
                <div className={styles.moodLabel}>{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms */}
        <div className={`${styles.card} ${styles.cardPinkBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            <Activity size={24} color="var(--primary)" /> Symptoms Today
          </div>
          <div className={styles.symptomsGrid}>
            {symptoms.map((symp, idx) => {
              const isActive = activeSymptoms.includes(symp.label);
              return (
                <button 
                  key={idx} 
                  className={`${styles.symptomBtn} ${isActive ? styles.symptomBtnActive : ''}`}
                  onClick={() => toggleSymptom(symp.label)}
                >
                  <div className={styles.symptomEmoji}>{symp.icon}</div>
                  <div className={styles.symptomLabel}>{symp.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Notes */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
            <FileText size={24} /> Daily Notes
          </div>
          <textarea 
            className={styles.notesArea}
            placeholder="How was your day? Any thoughts or feelings you'd like to remember..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>

        {/* Save Button */}
        <button className={styles.saveBtn} onClick={handleSave}>
          Save Today's Log
        </button>

      </main>
    </div>
  );
}
