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
  X
} from 'lucide-react';
import styles from './PregnantExercise.module.css';
import UserMenu from '../shared/UserMenu';

export default function PregnantExercisePage() {
  const router = useRouter();

  const exercises = [
    {
      title: "Prenatal Yoga",
      icon: "🧘‍♀️",
      safe: [
        "Cat-cow stretches",
        "Modified downward dog",
        "Prenatal sun salutations",
        "Pelvic tilts and hip openers"
      ],
      benefits: [
        "Improves flexibility",
        "Reduces back pain",
        "Prepares for labor"
      ],
      benefitClass: styles.benefitGreen
    },
    {
      title: "Walking",
      icon: "🚶‍♀️",
      safe: [
        "Brisk walking (20-30 minutes)",
        "Walking in nature",
        "Mall walking (climate controlled)",
        "Walking with support person"
      ],
      benefits: [
        "Low-impact cardio",
        "Maintains fitness",
        "Improves circulation"
      ],
      benefitClass: styles.benefitGreen
    },
    {
      title: "Swimming & Water Aerobics",
      icon: "🏊‍♀️",
      safe: [
        "Gentle swimming laps",
        "Water walking",
        "Prenatal water aerobics",
        "Floating and relaxation"
      ],
      benefits: [
        "Relieves joint pressure",
        "Supports body weight",
        "Reduces swelling"
      ],
      benefitClass: styles.benefitBeige
    },
    {
      title: "Pelvic Floor Exercises",
      icon: "💪",
      safe: [
        "Kegel exercises",
        "Pelvic tilts",
        "Squats (with support)",
        "Deep breathing with engagement"
      ],
      benefits: [
        "Prepares for delivery",
        "Prevents incontinence",
        "Aids recovery"
      ],
      benefitClass: styles.benefitPink
    }
  ];

  const avoidList = [
    "Contact sports or risk of falling",
    "Hot yoga or overheating activities",
    "Exercises lying flat on back (after 1st trimester)",
    "Heavy lifting or straining",
    "High-impact activities with jumping"
  ];

  const trimesters = [
    {
      num: 1,
      title: "First Trimester",
      desc: "Listen to your body, rest when needed, maintain current activity levels",
      time: "20-30 min",
      focus: "Gentle Movement",
      rowClass: styles.trimRowGreen
    },
    {
      num: 2,
      title: "Second Trimester",
      desc: "Energy usually returns, safe to increase activity, focus on posture",
      time: "30-40 min",
      focus: "Build Strength",
      rowClass: styles.trimRowWhite
    },
    {
      num: 3,
      title: "Third Trimester",
      desc: "Focus on pelvic floor, gentle stretching, avoid lying on back",
      time: "20-30 min",
      focus: "Prepare for Birth",
      rowClass: styles.trimRowGreen
    }
  ];

  const tips = [
    {
      icon: "💧",
      title: "Stay Hydrated",
      desc: "Drink plenty of water before, during, and after exercise"
    },
    {
      icon: "🌡️",
      title: "Avoid Overheating",
      desc: "Exercise in cool environments and stop if you feel too hot"
    },
    {
      icon: "👂",
      title: "Listen to Your Body",
      desc: "Stop if you feel dizzy, short of breath, or have pain"
    },
    {
      icon: "👨‍⚕️",
      title: "Get Clearance",
      desc: "Always consult your healthcare provider before starting"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="var(--primary)" size={28} />
          BumpJourney
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/pregnant')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/nutrition')}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/log')}>
            <FileText size={20} /> Daily Log
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Header Card */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            <Dumbbell size={28} color="var(--primary)" /> Safe Pregnancy Exercise
          </div>
          <div className={styles.heroDesc}>
            Staying active during pregnancy can help you feel better, prepare for labor, and promote a healthy pregnancy.
          </div>
          <div className={styles.heroGoal}>
            <strong>Goal:&nbsp;</strong> Aim for 150 minutes of moderate exercise per week. Always consult your healthcare provider before starting any exercise program.
          </div>
        </div>

        {/* Exercises Grid */}
        <div className={styles.exercisesGrid}>
          {exercises.map((ex, idx) => (
            <div key={idx} className={styles.exerciseCard}>
              <div className={styles.exerciseHeader}>
                <div className={styles.exerciseIcon}>{ex.icon}</div>
                <div className={styles.exerciseTitle}>{ex.title}</div>
              </div>
              <div className={styles.exerciseListLabel}>Safe exercises:</div>
              <ul className={styles.exerciseList}>
                {ex.safe.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className={`${styles.exerciseBenefit} ${ex.benefitClass}`}>
                <span className={styles.benefitLabel}>Benefits:</span>
                <ul className={styles.benefitItems}>
                  {ex.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Exercises to Avoid */}
        <div className={`${styles.card} ${styles.cardPinkBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            Exercises to Avoid
          </div>
          <div className={styles.avoidGrid}>
            {avoidList.map((item, idx) => (
              <div key={idx} className={styles.avoidPill}>
                <div className={styles.avoidIcon}>
                  <X size={14} strokeWidth={3} />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Trimester Recommendations */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            Trimester-Specific Recommendations
          </div>
          <div className={styles.trimRows}>
            {trimesters.map((t, idx) => (
              <div key={idx} className={`${styles.trimRow} ${t.rowClass}`}>
                <div className={styles.trimNumber}>{t.num}</div>
                <div className={styles.trimContent}>
                  <div className={styles.trimTitle}>{t.title}</div>
                  <div className={styles.trimDesc}>{t.desc}</div>
                </div>
                <div className={styles.trimRight}>
                  <div className={styles.trimTime}>{t.time}</div>
                  <div className={styles.trimFocus}>{t.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className={styles.tipsGradientCard}>
          <div className={styles.tipsTitle}>
            ⚡ Pregnancy Exercise Tips
          </div>
          <div className={styles.tipsGrid}>
            {tips.map((tip, idx) => (
              <div key={idx} className={styles.tipPill}>
                <div className={styles.tipPillTitle}>
                  {tip.icon} {tip.title}
                </div>
                <div className={styles.tipPillDesc}>
                  {tip.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
