'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple,
  Dumbbell,
  BrainCircuit,
  BookOpen,
  Scale,
  Zap,
  Lightbulb,
  HeartPulse
} from 'lucide-react';
import styles from './Exercise.module.css';
import UserMenu from '../shared/UserMenu';

export default function ExercisePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="#D14D72" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/menopause')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/nutrition')}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/mental-health')}>
            <BrainCircuit size={20} /> Mental Health
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Hero Section */}
        <div className={styles.heroCard}>
          <div className={styles.heroTitle}>
            <Dumbbell color="white" size={32} /> 
            Exercise for Menopause
          </div>
          <div className={styles.heroSubtitle}>
            Stay strong, healthy, and energized during your menopause journey
          </div>
        </div>

        {/* Weight-Bearing Exercises */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Scale color="#F97316" size={24} /> Weight-Bearing Exercises for Bone Health
          </div>
          <div className={styles.sectionSubtitle}>
            These exercises help maintain bone density and reduce the risk of osteoporosis, which increases after menopause.
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>🚶‍♀️</div>
              <div className={styles.cardTitle}>Walking & Hiking</div>
              <div className={styles.cardDesc}>Low-impact but effective for bone health. Aim for 30 minutes most days.<br/>🕒 30 min daily</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>💃</div>
              <div className={styles.cardTitle}>Dancing</div>
              <div className={styles.cardDesc}>Fun way to build bone strength while improving balance and coordination.<br/>🕒 3-4 times per week</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>🎾</div>
              <div className={styles.cardTitle}>Tennis or Pickleball</div>
              <div className={styles.cardDesc}>Great for bones, balance, and social connection.<br/>🕒 2-3 times per week</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>🪜</div>
              <div className={styles.cardTitle}>Stair Climbing</div>
              <div className={styles.cardDesc}>Builds leg strength and bone density while improving cardiovascular fitness.<br/>🕒 10-15 min daily</div>
            </div>
          </div>
        </div>

        {/* Cardio for Heart Health */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <HeartPulse color="#D14D72" size={24} /> Cardio for Heart Health
          </div>
          <div className={styles.sectionSubtitle}>
            Heart disease risk increases after menopause. Regular cardio helps protect your heart and manage weight.
          </div>
          <div className={styles.grid3}>
            <div className={`${styles.cardBase} ${styles.bgOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🚴‍♀️</div>
              <div className={styles.cardTitle}>Cycling</div>
              <div className={styles.cardDesc}>Gentle on joints while boosting cardiovascular fitness</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏊‍♀️</div>
              <div className={styles.cardTitle}>Swimming</div>
              <div className={styles.cardDesc}>Full-body workout that's easy on joints and cooling</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🎵</div>
              <div className={styles.cardTitle}>Aerobics</div>
              <div className={styles.cardDesc}>Group classes for cardio, motivation, and fun</div>
            </div>
          </div>
        </div>

        {/* Strength Training */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Dumbbell color="#5B21B6" size={24} /> Strength Training
          </div>
          <div className={styles.sectionSubtitle}>
            Build muscle mass to boost metabolism, maintain strength, and support bone health. Aim for 2-3 sessions per week.
          </div>
          <div className={styles.mealList}>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Free Weights or Resistance Bands</div>
                <div className={styles.cardDesc}>Start with light weights (5-10 lbs) and gradually increase. Focus on all major muscle groups: arms, legs, back, chest, core.</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgOrange}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Bodyweight Exercises</div>
                <div className={styles.cardDesc}>Squats, lunges, push-ups (modified if needed), planks. No equipment needed and can be done anywhere.</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Pilates or Barre</div>
                <div className={styles.cardDesc}>Builds lean muscle, improves posture, and strengthens the core. Gentle but effective.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Flexibility and Balance Exercises */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <span style={{fontSize: '1.5rem'}}>🧘‍♀️</span> Flexibility and Balance Exercises
          </div>
          <div className={styles.sectionSubtitle}>
            Prevent falls, reduce injury risk, and promote relaxation during this time of change.
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.cardBase} ${styles.bgYellow}`}>
              <div style={{fontSize: '2rem'}}>🧘‍♀️</div>
              <div className={styles.cardTitle}>Yoga</div>
              <div className={styles.cardDesc}>Improves flexibility, balance, and mental well-being. Try gentle or restorative styles for menopause.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgYellow}`}>
              <div style={{fontSize: '2rem'}}>🥋</div>
              <div className={styles.cardTitle}>Tai Chi</div>
              <div className={styles.cardDesc}>Gentle, flowing movements that improve balance, reduce stress, and promote calm.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgYellow}`}>
              <div style={{fontSize: '2rem'}}>🤸‍♀️</div>
              <div className={styles.cardTitle}>Stretching Routine</div>
              <div className={styles.cardDesc}>Daily stretching maintains mobility and reduces muscle tension. Focus on hips, back, and shoulders.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgYellow}`}>
              <div style={{fontSize: '2rem'}}>⚖️</div>
              <div className={styles.cardTitle}>Balance Exercises</div>
              <div className={styles.cardDesc}>Standing on one leg, heel-to-toe walk. Prevents falls and builds confidence in movement.</div>
            </div>
          </div>
        </div>

        {/* Tips for Managing Energy Levels */}
        <div className={styles.tipsCard}>
          <div className={styles.tipsIconBox}>
            <Zap size={24} />
          </div>
          <div>
            <div className={styles.tipsTitle}>Tips for Managing Energy Levels</div>
            <div className={styles.tipsText}>
              <p><strong>Listen to your body:</strong> Exercise when you have the most energy, whether that's morning or afternoon.</p>
              <p><strong>Start slow:</strong> If you're new to exercise, begin with 10-15 minutes and gradually build up.</p>
              <p><strong>Rest when needed:</strong> Fatigue is common during menopause. Don't push through exhaustion.</p>
              <p><strong>Stay cool:</strong> Exercise in air-conditioned spaces or outdoors during cooler times to manage hot flashes.</p>
              <p><strong>Stay consistent:</strong> Regular exercise actually helps boost energy levels over time.</p>
            </div>
          </div>
        </div>

        {/* Weekly Exercise Goal */}
        <div className={styles.goalCard}>
          <div className={styles.goalIconBox}>
            <Lightbulb size={24} />
          </div>
          <div>
            <div className={styles.tipsTitle}>Weekly Exercise Goal</div>
            <div className={styles.tipsText}>
              <p>Aim for <strong>at least 150 minutes of moderate aerobic activity per week</strong>, plus strength training 2-3 times per week, and daily flexibility/balance work. Remember: any movement is better than none. Start where you are and build gradually.</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
