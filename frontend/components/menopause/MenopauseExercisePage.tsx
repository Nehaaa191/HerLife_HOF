'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple, 
  Dumbbell, 
  Brain, 
  BookOpen, 
  Scale,
  Activity,
  Zap,
  Clock,
  Lightbulb
} from 'lucide-react';
import styles from './MenopauseExercisePage.module.css';

export default function MenopauseExercisePage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.container}>
      {/* MenoWell Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="#D14D72" color="#D14D72" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/nutrition')}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/mental-health')}>
            <Brain size={20} /> Mental Health
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/learn')}>
            <BookOpen size={20} /> Learn
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
        >
          {/* Hero Card */}
          <motion.section className={styles.heroCard} variants={itemVariants}>
            <div className={styles.heroTitle}>
              <Dumbbell size={36} color="white" /> Exercise for Menopause
            </div>
            <p className={styles.heroSubtitle}>Stay strong, healthy, and energized during your menopause journey</p>
          </motion.section>

          {/* Weight-Bearing Exercises */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Scale size={28} /></div>
                <h2>Weight-Bearing Exercises for Bone Health</h2>
            </div>
            <p className={styles.sectionIntro}>These exercises help maintain bone density and reduce the risk of osteoporosis, which increases after menopause.</p>
            
            <div className={styles.exerciseGrid}>
              <div className={styles.exerciseItem}>
                <span className={styles.exerciseEmoji}>🚶‍♀️</span>
                <h3>Walking & Hiking</h3>
                <p>Low-impact but effective for bone health. Aim for 30 minutes most days.</p>
                <div className={styles.exerciseTime}><Clock size={16} /> 30 min daily</div>
              </div>
              <div className={styles.exerciseItem}>
                <span className={styles.exerciseEmoji}>💃</span>
                <h3>Dancing</h3>
                <p>Fun way to build bone strength while improving balance and coordination.</p>
                <div className={styles.exerciseTime}><Clock size={16} /> 3-4 times per week</div>
              </div>
              <div className={styles.exerciseItem}>
                <span className={styles.exerciseThemeBeige}>
                  <div className={styles.exerciseItem} style={{backgroundColor: '#FEFCE8', border: '1px solid #FFEDD5', padding: 0}}>
                    <span className={styles.exerciseEmoji}>🎾</span>
                    <h3>Tennis or Pickleball</h3>
                    <p>Great for bones, balance, and social connection.</p>
                    <div className={styles.exerciseTime}><Clock size={16} /> 2-3 times per week</div>
                  </div>
                </span>
              </div>
              <div className={styles.exerciseItem} style={{backgroundColor: '#FEFCE8', border: '1px solid #FFEDD5'}}>
                <span className={styles.exerciseEmoji}>🪜</span>
                <h3>Stair Climbing</h3>
                <p>Builds leg strength and bone density while improving cardiovascular fitness.</p>
                <div className={styles.exerciseTime}><Clock size={16} /> 10-15 min daily</div>
              </div>
            </div>
          </motion.section>

          {/* Cardio Section */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Heart size={28} /></div>
                <h2>Cardio for Heart Health</h2>
            </div>
            <p className={styles.sectionIntro}>Heart disease risk increases after menopause. Regular cardio helps protect your heart and manage weight.</p>
            
            <div className={styles.cardioGrid}>
              <div className={styles.cardioItem}>
                 <span className={styles.exerciseEmoji}>🚴‍♀️</span>
                 <h3>Cycling</h3>
                 <p>Gentle on joints while boosting cardiovascular fitness</p>
              </div>
              <div className={styles.cardioItem} style={{backgroundColor: '#FCE7F3'}}>
                 <span className={styles.exerciseEmoji}>🏊‍♀️</span>
                 <h3>Swimming</h3>
                 <p>Full-body workout that's easy on joints and cooling</p>
              </div>
              <div className={styles.cardioItem}>
                 <span className={styles.exerciseEmoji}>🎵</span>
                 <h3>Aerobics</h3>
                 <p>Group classes for cardio, motivation, and fun</p>
              </div>
            </div>
          </motion.section>

          {/* Strength Training Section */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Dumbbell size={28} /></div>
                <h2>Strength Training</h2>
            </div>
            <p className={styles.sectionIntro}>Build muscle mass to boost metabolism, maintain strength, and support bone health. Aim for 2-3 sessions per week.</p>
            
            <div className={styles.tipsContainer}>
               <div className={`${styles.tipBox} ${styles.tipColor1}`}>
                  <p><strong>Free Weights or Resistance Bands:</strong> Start with light weights (5-10 lbs) and gradually increase. Focus on all major muscle groups: arms, legs, back, chest, core.</p>
               </div>
               <div className={`${styles.tipBox} ${styles.tipColor2}`}>
                  <p><strong>Bodyweight Exercises:</strong> Squats, lunges, push-ups (modified if needed), planks. No equipment needed and can be done anywhere.</p>
               </div>
               <div className={`${styles.tipBox} ${styles.tipColor1}`}>
                  <p><strong>Pilates or Barre:</strong> Builds lean muscle, improves posture, and strengthens the core. Gentle but effective.</p>
               </div>
            </div>
          </motion.section>

          {/* Flexibility Grid */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Activity size={28} /></div>
                <h2>Flexibility and Balance Exercises</h2>
            </div>
            <p className={styles.sectionIntro}>Prevent falls, reduce injury risk, and promote relaxation during this time of change.</p>
            
            <div className={styles.exerciseGrid}>
               <div className={styles.exerciseItem} style={{backgroundColor: '#FEFCE8'}}>
                  <span className={styles.exerciseEmoji}>🧘‍♀️</span>
                  <h3>Yoga</h3>
                  <p>Improves flexibility, balance, and mental well-being. Try gentle or restorative styles for menopause.</p>
               </div>
               <div className={styles.exerciseItem} style={{backgroundColor: '#FEFCE8'}}>
                  <span className={styles.exerciseEmoji}>🥋</span>
                  <h3>Tai Chi</h3>
                  <p>Gentle, flowing movements that improve balance, reduce stress, and promote calm.</p>
               </div>
               <div className={styles.exerciseItem} style={{backgroundColor: '#FEFCE8'}}>
                  <span className={styles.exerciseEmoji}>🤸‍♀️</span>
                  <h3>Stretching Routine</h3>
                  <p>Daily stretching maintains mobility and reduces muscle tension. Focus on hips, back, and shoulders.</p>
               </div>
               <div className={styles.exerciseItem} style={{backgroundColor: '#FEFCE8'}}>
                  <span className={styles.exerciseEmoji}>⚖️</span>
                  <h3>Balance Exercises</h3>
                  <p>Standing on one leg, heel-to-toe walk. Prevents falls and builds confidence in movement.</p>
               </div>
            </div>
          </motion.section>

          {/* Energy Management Tips */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Zap size={28} /></div>
                <h2 style={{color: '#1F2937'}}>Tips for Managing Energy Levels</h2>
            </div>
            <div className={styles.tipsContainer}>
               <div className={styles.tipBox} style={{borderLeft: '6px solid #F43F5E', paddingLeft: '1.5rem'}}>
                  <p><strong>Listen to your body:</strong> Exercise when you have the most energy, whether that's morning or afternoon.</p>
               </div>
               <div className={styles.tipBox} style={{borderLeft: '6px solid #F43F5E', paddingLeft: '1.5rem'}}>
                  <p><strong>Start slow:</strong> If you're new to exercise, begin with 10-15 minutes and gradually build up.</p>
               </div>
               <div className={styles.tipBox} style={{borderLeft: '6px solid #F43F5E', paddingLeft: '1.5rem'}}>
                  <p><strong>Rest when needed:</strong> Fatigue is common during menopause. Don't push through exhaustion.</p>
               </div>
               <div className={styles.tipBox} style={{borderLeft: '6px solid #F43F5E', paddingLeft: '1.5rem'}}>
                  <p><strong>Stay cool:</strong> Exercise in air-conditioned spaces or outdoors during cooler times to manage hot flashes.</p>
               </div>
               <div className={styles.tipBox} style={{borderLeft: '6px solid #F43F5E', paddingLeft: '1.5rem'}}>
                  <p><strong>Stay consistent:</strong> Regular exercise actually helps boost energy levels over time.</p>
               </div>
            </div>
          </motion.section>

          {/* Goal Footer */}
          <motion.section className={styles.goalBox} variants={itemVariants}>
             <div className={styles.goalIcon}><Lightbulb size={24} /></div>
             <div className={styles.goalInfo}>
                <h3>Weekly Exercise Goal</h3>
                <p>Aim for at least 150 minutes of moderate aerobic activity per week, plus strength training 2-3 times per week, and daily flexibility/balance work. Remember: any movement is better than none. Start where you are and build gradually.</p>
             </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}
