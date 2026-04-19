'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Activity, 
  BookOpen, 
  Gamepad2, 
  HelpCircle,
  Droplet,
  Apple
} from 'lucide-react';
import styles from './PreteenWellness.module.css';

export default function PreteenWellnessPage() {
  const router = useRouter();
  const [water, setWater] = useState(4);
  const maxWater = 8;

  const handleWaterAdd = () => {
    if (water < maxWater) setWater(water + 1);
  };

  const handleWaterRemove = () => {
    if (water > 0) setWater(water - 1);
  };

  const activities = [
    { icon: "💃", title: "Dancing", desc: "Put on your favorite music and dance!" },
    { icon: "🧘‍♀️", title: "Yoga", desc: "Stretch and relax your body" },
    { icon: "🚶‍♀️", title: "Walking", desc: "Take a walk in nature" },
    { icon: "🏊‍♀️", title: "Swimming", desc: "Swim and have fun in the water" }
  ];

  const foods = [
    { icon: "🍎", title: "Fruits", desc: "Apples, bananas, berries" },
    { icon: "🥦", title: "Veggies", desc: "Broccoli, carrots, spinach" },
    { icon: "🍞", title: "Whole Grains", desc: "Brown rice, oatmeal" },
    { icon: "🥚", title: "Protein", desc: "Eggs, beans, chicken" }
  ];

  const tips = [
    {
      icon: "😊",
      title: "Get Good Sleep 😴",
      desc: "8-10 hours helps you feel great!",
      colorClass: styles.tipBoxPink
    },
    {
      icon: "💙",
      title: "Be Kind to Yourself 💕",
      desc: "Your body is doing amazing things!",
      colorClass: styles.tipBoxYellow
    },
    {
      icon: "😃",
      title: "Talk to Someone 🗣️",
      desc: "Parents, teachers, or friends can help!",
      colorClass: styles.tipBoxGreen
    }
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="#4797B1" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/preteen')}>
            <Home size={20} /> Home
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Activity size={20} /> Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/play')}>
            <Gamepad2 size={20} /> Play & Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/test')}>
            <HelpCircle size={20} /> Test It Out
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Top Grid: Activities & Foods */}
        <div className={styles.topGrid}>
          
          {/* Fun Activities Card */}
          <div className={`${styles.card} ${styles.topCard} ${styles.cardGreenBorder}`}>
            <div className={styles.sectionTitle}>
              <Activity size={24} color="#4797B1" /> Fun Activities! 🎉
            </div>
            <div className={`${styles.topSubBox} ${styles.subBoxYellow}`}>
              <div className={styles.subBoxTitle}>💪 Moving your body helps you feel great!</div>
              <div className={styles.subBoxDesc}>Exercise can help with cramps and makes you happy</div>
            </div>
            <div className={styles.itemList}>
              {activities.map((item, idx) => (
                <div key={idx} className={`${styles.itemPill} ${styles.itemPillGreen}`}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemDesc}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Healthy Foods Card */}
          <div className={`${styles.card} ${styles.topCard} ${styles.cardYellowBorder}`}>
            <div className={styles.sectionTitle}>
              <Apple size={24} color="#4797B1" /> Healthy Foods! 🍽️
            </div>
            <div className={`${styles.topSubBox} ${styles.subBoxPink}`}>
              <div className={styles.subBoxTitle}>🌈 Eat colorful foods for energy!</div>
              <div className={styles.subBoxDesc}>These foods help your body feel strong</div>
            </div>
            <div className={styles.itemList}>
              {foods.map((item, idx) => (
                <div key={idx} className={`${styles.itemPill} ${styles.itemPillYellow}`}>
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemDesc}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Water Tracker */}
        <div className={`${styles.card} ${styles.cardBlueBorder}`}>
          <div className={styles.sectionTitle}>
            <Droplet size={24} color="#4797B1" /> Water Tracker! 💧
          </div>
          <div className={styles.waterTrackerCard}>
            <div className={styles.waterCount}>{water} / {maxWater} glasses</div>
            <div className={styles.waterSub}>Keep going! You're doing great! 🌟</div>
            <div className={styles.waterBarBg}>
              <div 
                className={styles.waterBarFill} 
                style={{ width: `${(water / maxWater) * 100}%` }}
              ></div>
            </div>
            <div className={styles.waterActions}>
              <button className={styles.waterBtnAdd} onClick={handleWaterAdd}>
                + Add Glass 💧
              </button>
              <button className={styles.waterBtnRemove} onClick={handleWaterRemove}>
                - Remove
              </button>
            </div>
            <div className={styles.waterDropsList}>
              {Array.from({ length: maxWater }).map((_, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.waterDropBox} ${idx < water ? styles.waterDropFilled : styles.waterDropEmpty}`}
                >
                  {idx < water ? '💧' : '💧'}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Self-Care Tips */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={styles.sectionTitle}>
            <Heart size={24} color="#4797B1" /> Self-Care Tips! ✨
          </div>
          <div className={styles.tipsGrid}>
            {tips.map((tip, idx) => (
              <div key={idx} className={`${styles.tipBox} ${tip.colorClass}`}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <div className={styles.tipTitle}>{tip.title}</div>
                <div className={styles.tipDesc}>{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
