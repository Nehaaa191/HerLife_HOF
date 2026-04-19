'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Check } from 'lucide-react';
import styles from './DailyLogCard.module.css';

interface DailyLogData {
  energy: 'Low' | 'Medium' | 'High';
  stress: number;
  sleep: number;
  water: number;
  mood: number;
  periodStart: boolean;
  junkFood: number;
}

export default function DailyLogCard({ onSave }: { onSave?: (data: any) => void }) {
  const [log, setLog] = useState<DailyLogData>({
    energy: 'Medium',
    stress: 3,
    sleep: 3,
    water: 4,
    mood: 3,
    periodStart: false,
    junkFood: 2
  });

  const moods = ['😢', '😟', '😐', '🙂', '😊'];

  const handleSubmit = () => {
    // Logic to save to localStorage
    const existing = localStorage.getItem('herlife_logs');
    const logs = existing ? JSON.parse(existing) : [];
    const newLog = {
      date: new Date().toISOString().split('T')[0],
      ...log
    };
    
    // Update or add for today
    const updatedLogs = logs.filter((l: any) => l.date !== newLog.date);
    updatedLogs.push(newLog);
    
    localStorage.setItem('herlife_logs', JSON.stringify(updatedLogs));
    if (onSave) onSave(newLog);
    alert('Daily log saved successfully! 🩷');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Daily Health Log</h2>
      <p className={styles.subtitle}>How are you feeling today, Gorgeous?</p>

      {/* Energy */}
      <div className={styles.section}>
        <label className={styles.label}>How is your energy today?</label>
        <div className={styles.optionsGrid}>
          {['Low', 'Medium', 'High'].map((level) => (
            <button
              key={level}
              className={`${styles.optionBtn} ${log.energy === level ? styles.optionBtnActive : ''}`}
              onClick={() => setLog({ ...log, energy: level as any })}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Stress & Sleep */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className={styles.section}>
          <label className={styles.label}>Stress Level (1-5)</label>
          <div className={styles.sliderWrapper}>
            <input
              type="range"
              min="1"
              max="5"
              value={log.stress}
              className={styles.slider}
              onChange={(e) => setLog({ ...log, stress: parseInt(e.target.value) })}
            />
            <div className={styles.sliderLabels}>
              <span>Calm</span>
              <span>Stressed</span>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <label className={styles.label}>Sleep Quality (1-5)</label>
          <div className={styles.sliderWrapper}>
            <input
              type="range"
              min="1"
              max="5"
              value={log.sleep}
              className={styles.slider}
              onChange={(e) => setLog({ ...log, sleep: parseInt(e.target.value) })}
            />
            <div className={styles.sliderLabels}>
              <span>Poor</span>
              <span>Perfect</span>
            </div>
          </div>
        </div>
      </div>

      {/* Water Counter */}
      <div className={styles.section}>
        <label className={styles.label}>Hydration (Glasses of Water)</label>
        <div className={styles.counterWrapper}>
          <button 
            className={styles.counterBtn} 
            onClick={() => setLog({ ...log, water: Math.max(0, log.water - 1) })}
          >
            <Minus size={20} />
          </button>
          <div className={styles.counterValue}>{log.water}</div>
          <button 
            className={styles.counterBtn} 
            onClick={() => setLog({ ...log, water: log.water + 1 })}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* Mood */}
      <div className={styles.section}>
        <label className={styles.label}>How is your mood today?</label>
        <div className={styles.moodGrid}>
          {moods.map((emoji, index) => (
            <button
              key={index}
              className={`${styles.moodBtn} ${log.mood === index + 1 ? styles.moodBtnActive : ''}`}
              onClick={() => setLog({ ...log, mood: index + 1 })}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Junk Food */}
      <div className={styles.section}>
        <label className={styles.label}>Junk food intake today?</label>
        <div className={styles.sliderWrapper}>
          <input
            type="range"
            min="1"
            max="5"
            value={log.junkFood}
            className={styles.slider}
            onChange={(e) => setLog({ ...log, junkFood: parseInt(e.target.value) })}
          />
          <div className={styles.sliderLabels}>
            <span>None</span>
            <span>A lot</span>
          </div>
        </div>
      </div>

      {/* Period Toggle */}
      <div className={styles.section}>
        <label className={styles.label}>Did your period start today?</label>
        <div className={styles.toggleWrapper}>
          <button
            className={`${styles.toggleBtn} ${log.periodStart ? styles.toggleBtnActive : ''}`}
            onClick={() => setLog({ ...log, periodStart: true })}
          >
            Yes
          </button>
          <button
            className={`${styles.toggleBtn} {!log.periodStart ? styles.toggleBtnActive : ''}`}
            onClick={() => setLog({ ...log, periodStart: false })}
          >
            No
          </button>
        </div>
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>
        Save Entry
      </button>
    </div>
  );
}
