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
  Dumbbell,
  Apple
} from 'lucide-react';
import styles from './PostpartumWellness.module.css';
import UserMenu from '../shared/UserMenu';

export default function PostpartumWellnessPage() {
  const router = useRouter();
  const [glasses, setGlasses] = useState(4);
  const maxGlasses = 8;

  const handleAddGlass = () => {
    if (glasses < maxGlasses) setGlasses(glasses + 1);
  };

  const handleRemoveGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const exercises = [
    { emoji: "💪", title: "Pelvic Floor Exercises", badge: "Recovery", desc: "Kegel exercises to strengthen your pelvic floor" },
    { emoji: "🚶‍♀️", title: "Gentle Walking", badge: "Cardio", desc: "Start with short 10-15 minute walks" },
    { emoji: "🧘‍♀️", title: "Postnatal Yoga", badge: "Flexibility", desc: "Gentle stretches to restore flexibility" },
    { emoji: "🫁", title: "Deep Breathing", badge: "Recovery", desc: "Breathing exercises for core reconnection" }
  ];

  const nutrition = [
    { 
      emoji: "🥩", 
      title: "Iron-Rich Foods", 
      foods: ["Lean red meat", "Lentils & beans", "Spinach & kale", "Fortified cereals"],
      desc: "Replenish iron lost during childbirth and prevent postpartum anemia" 
    },
    { 
      emoji: "🍳", 
      title: "Protein Sources", 
      foods: ["Eggs", "Chicken & fish", "Greek yogurt", "Nuts & seeds"],
      desc: "Support tissue healing and recovery after delivery" 
    },
    { 
      emoji: "🐟", 
      title: "Omega-3 Foods", 
      foods: ["Salmon", "Chia seeds", "Walnuts", "Flaxseed"],
      desc: "Support brain health and may help prevent postpartum depression" 
    },
    { 
      emoji: "🥛", 
      title: "Calcium & Vitamin D", 
      foods: ["Milk & dairy", "Cheese", "Fortified plant milk", "Sunshine"],
      desc: "Essential for bone health and breastfeeding nutrition" 
    }
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
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Activity size={20} /> Track Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/log')}>
            <FileText size={20} /> Daily Log
          </button>
          <button className={styles.navItem} onClick={() => router.push('/postpartum/mental-health')}>
            <Heart size={20} /> Mental Health
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Header Card */}
        <div className={styles.headerCard}>
          <div className={styles.headerTitle}>
            <Activity size={28} /> Track Your Wellness
          </div>
          <div className={styles.headerSubtitle}>
            Monitor your postpartum recovery with gentle exercise, nutritious foods, and proper hydration
          </div>
        </div>

        {/* Water Tracker */}
        <div className={styles.card}>
          <div className={styles.waterHeader}>
            <div className={styles.waterIcon}>
              <Droplet size={20} />
            </div>
            Water Tracker
            <Droplet size={20} color="#3B82F6" fill="#3B82F6" />
          </div>

          <div className={styles.waterBanner}>
            <div className={styles.waterCount}>{glasses} / {maxGlasses} glasses</div>
            <div className={styles.waterText}>Stay hydrated for recovery and breastfeeding!</div>
          </div>

          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${(glasses / maxGlasses) * 100}%` }}
            ></div>
          </div>

          <div className={styles.waterControls}>
            <button className={styles.addBtn} onClick={handleAddGlass}>
              + Add Glass <Droplet size={18} color="#3B82F6" fill="#3B82F6" />
            </button>
            <button className={styles.removeBtn} onClick={handleRemoveGlass}>
              - Remove
            </button>
          </div>

          <div className={styles.waterDropsGrid}>
            {[...Array(maxGlasses)].map((_, i) => (
              <div 
                key={i} 
                className={`${styles.dropBox} ${i < glasses ? styles.dropBoxActive : styles.dropBoxInactive}`}
              >
                <Droplet size={24} fill="currentColor" />
              </div>
            ))}
          </div>
        </div>

        {/* Exercise & Nutrition Grid */}
        <div className={styles.twoColGrid}>
          
          {/* Postpartum Exercise */}
          <div className={styles.card} style={{ margin: 0 }}>
            <div className={styles.sectionTitle}>
              <div className={styles.sectionIcon}>
                <Dumbbell size={20} />
              </div>
              Postpartum Exercise
            </div>
            
            <div className={styles.noticeBox}>
              <div className={styles.noticeEmoji}>💪</div>
              <div>
                <div className={styles.noticeTitle}>Gentle movement aids recovery</div>
                <div className={styles.noticeDesc}>Always get clearance from your doctor before starting exercise</div>
              </div>
            </div>

            {exercises.map((ex, idx) => (
              <div key={idx} className={styles.exerciseCard}>
                <div className={styles.exerciseEmoji}>{ex.emoji}</div>
                <div className={styles.exerciseContent}>
                  <div className={styles.exerciseHeader}>
                    <div className={styles.exerciseTitle}>{ex.title}</div>
                    <div className={styles.badge}>{ex.badge}</div>
                  </div>
                  <div className={styles.exerciseDesc}>{ex.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recovery Nutrition */}
          <div className={styles.card} style={{ margin: 0 }}>
            <div className={styles.sectionTitle}>
              <div className={styles.sectionIcon}>
                <Apple size={20} />
              </div>
              Recovery Nutrition
            </div>

            <div className={styles.noticeBox}>
              <div className={styles.noticeEmoji}>🌈</div>
              <div>
                <div className={styles.noticeTitle}>Nourish your body for healing</div>
                <div className={styles.noticeDesc}>Eating well supports recovery and breastfeeding</div>
              </div>
            </div>

            {nutrition.map((item, idx) => (
              <div key={idx} className={styles.nutritionCard}>
                <div className={styles.nutritionEmoji}>{item.emoji}</div>
                <div className={styles.nutritionContent}>
                  <div className={styles.nutritionTitle}>{item.title}</div>
                  <ul className={styles.foodList}>
                    {item.foods.map((food, fIdx) => (
                      <li key={fIdx}>
                        <div className={styles.foodDot}></div>
                        {food}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.nutritionDescBox}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Self Care Reminders */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Heart size={24} color="var(--primary)" fill="var(--primary)" />
            Self-Care Reminders
          </div>
          <div className={styles.selfCareGrid}>
            <div className={styles.selfCareCard}>
              <div className={styles.selfCareEmoji}>😴</div>
              <div className={styles.selfCareTitle}>Rest When Baby Sleeps</div>
              <div className={styles.selfCareDesc}>Your body needs rest to heal properly</div>
            </div>
            <div className={styles.selfCareCard}>
              <div className={styles.selfCareEmoji}>💗</div>
              <div className={styles.selfCareTitle}>Be Patient with Yourself</div>
              <div className={styles.selfCareDesc}>Recovery takes time - usually 6-8 weeks</div>
            </div>
            <div className={styles.selfCareCard}>
              <div className={styles.selfCareEmoji}>🗣️</div>
              <div className={styles.selfCareTitle}>Ask for Help</div>
              <div className={styles.selfCareDesc}>Don't hesitate to reach out to family & friends</div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
