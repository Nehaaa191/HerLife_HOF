'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Activity, 
  BookOpen,
  FileText,
  Droplet,
  Baby
} from 'lucide-react';
import styles from './PostpartumLog.module.css';

export default function PostpartumLogPage() {
  const router = useRouter();
  const [glasses, setGlasses] = useState(5);
  const maxGlasses = 10;
  
  const [activeSymptoms, setActiveSymptoms] = useState<string[]>([]);

  const handleAddGlass = () => {
    if (glasses < maxGlasses) setGlasses(glasses + 1);
  };

  const handleRemoveGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const toggleSymptom = (title: string) => {
    if (activeSymptoms.includes(title)) {
      setActiveSymptoms(activeSymptoms.filter(s => s !== title));
    } else {
      setActiveSymptoms([...activeSymptoms, title]);
    }
  };

  const moods = [
    { emoji: "☺️", label: "Happy" },
    { emoji: "😰", label: "Overwhelmed" },
    { emoji: "😴", label: "Exhausted" },
    { emoji: "😢", label: "Emotional" }
  ];

  const symptoms = [
    { emoji: "🩸", title: "Lochia/Bleeding" },
    { emoji: "💢", title: "Cramping" },
    { emoji: "🤕", title: "Soreness" },
    { emoji: "😣", title: "Breast Pain" },
    { emoji: "😴", title: "Extreme Fatigue" },
    { emoji: "🤯", title: "Headache" }
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
          <button className={styles.navItem} onClick={() => router.push('/dashboard/postpartum')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/wellness')}>
            <Activity size={20} /> Track Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <FileText size={20} /> Daily Log
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/mental-health')}>
            <Heart size={20} /> Mental Health
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Header Card */}
        <div className={styles.card}>
          <div className={styles.headerTitle}>
            <FileText color="var(--primary)" size={28} /> Daily Recovery Log
          </div>
          <div className={styles.headerSubtitle}>
            Track your postpartum recovery, symptoms, and daily wellness
          </div>
        </div>

        {/* Hydration Tracker */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Droplet color="var(--primary)" size={24} /> Hydration Tracker
          </div>

          <div className={styles.waterBanner}>
            <div className={styles.waterCount}>{glasses} / {maxGlasses} glasses</div>
            <div className={styles.waterText}>Staying hydrated is crucial for recovery and breastfeeding!</div>
          </div>

          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${(glasses / maxGlasses) * 100}%` }}
            ></div>
          </div>

          <div className={styles.waterControls}>
            <button className={styles.addBtn} onClick={handleAddGlass}>
              + Add Glass <Droplet size={18} color="white" fill="white" />
            </button>
            <button className={styles.removeBtn} onClick={handleRemoveGlass}>
              - Remove
            </button>
          </div>
        </div>

        {/* Mood Tracker */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Heart color="var(--primary)" size={24} /> How Are You Feeling Today?
          </div>
          <div className={styles.noticeBox}>
            <Heart className={styles.noticeIcon} fill="currentColor" size={20} />
            It's normal to feel a range of emotions postpartum. If you're feeling sad or anxious for more than 2 weeks, talk to your doctor.
          </div>
          <div className={styles.moodGrid}>
            {moods.map((mood, idx) => (
              <button key={idx} className={styles.moodBtn}>
                <span className={styles.moodEmoji}>{mood.emoji}</span>
                <span className={styles.moodLabel}>{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Activity color="var(--primary)" size={24} /> Symptoms & Recovery Signs
          </div>
          <div className={styles.symptomGrid}>
            {symptoms.map((sym, idx) => {
              const isActive = activeSymptoms.includes(sym.title);
              return (
                <button 
                  key={idx} 
                  className={`${styles.symptomBtn} ${isActive ? styles.symptomBtnActive : ''}`}
                  onClick={() => toggleSymptom(sym.title)}
                >
                  <span className={styles.moodEmoji}>{sym.emoji}</span>
                  <span className={styles.moodLabel}>{sym.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Baby Care */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Baby color="var(--primary)" size={24} /> Baby Care Today
          </div>
          <div className={styles.babyCareGrid}>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>Feeding Times</div>
              <textarea 
                className={styles.textArea} 
                placeholder="Log feeding times and duration..."
              ></textarea>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputLabel}>Diaper Changes</div>
              <textarea 
                className={styles.textArea} 
                placeholder="Track wet & dirty diapers..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <FileText color="var(--primary)" size={24} /> Daily Notes & Reflections
          </div>
          <textarea 
            className={styles.textArea} 
            placeholder="How was your recovery today? Any questions for your doctor? Memories to cherish..."
          ></textarea>
        </div>

        {/* Save Button */}
        <button className={styles.saveBtn}>
          Save Today's Log
        </button>

      </main>
    </div>
  );
}
