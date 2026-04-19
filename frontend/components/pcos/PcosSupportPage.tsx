'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Calendar, 
  Activity, 
  BookOpen,
  Lightbulb,
  CheckCircle2,
  Circle,
  Salad,
  Dumbbell,
  Leaf,
  Pill,
  AlertCircle,
  TrendingUp,
  X
} from 'lucide-react';
import styles from './PcosSupport.module.css';
import UserMenu from '../shared/UserMenu';

export default function PcosSupportPage() {
  const router = useRouter();

  // Initial state matches the screenshot
  const [symptoms, setSymptoms] = useState({
    'Irregular periods': true,
    'Excessive hair growth': false,
    'Weight gain': true,
    'Acne': false,
    'Hair thinning': false
  });

  const [selectedStory, setSelectedStory] = useState<{id: number, user: string, title: string, fullText: string} | null>(null);

  const stories = [
    { id: 1, user: '@sarah_wellness', title: "After 3 months of following a low-GI diet...", fullText: "My cycles became more regular, and I lost 15 pounds. Small changes really do add up! I also focused on eating more protein which helped curb my cravings significantly." },
    { id: 2, user: '@emma_health', title: "Combining strength training with stress management...", fullText: "My energy levels improved dramatically, and my hormones started to balance naturally. Yoga and lifting weights twice a week changed my entire PCOS experience!" },
    { id: 3, user: '@mia_lifestyle', title: "Taking inositol and Vitamin D daily...", fullText: "It took a few months, but I finally got my period back naturally! Consistency with my supplements has been the absolute key to my PCOS management." }
  ];

  const toggleSymptom = (name: string) => {
    setSymptoms(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };

  const dietTips = [
    'Focus on low-glycemic index foods',
    'Include anti-inflammatory foods (berries, fatty fish, leafy greens)',
    'Reduce refined carbohydrates and sugars',
    'Eat protein with every meal to balance blood sugar'
  ];

  const exerciseTips = [
    'Regular moderate exercise (30 minutes, 5 times a week)',
    'Combine cardio with strength training',
    'Try stress-reducing exercises like yoga',
    'Avoid over-exercising which can increase cortisol'
  ];

  const lifestyleTips = [
    'Prioritize 7-9 hours of quality sleep',
    'Practice stress management techniques',
    'Maintain a consistent daily routine',
    'Limit caffeine and alcohol intake'
  ];

  const supplementTips = [
    'Inositol (consult your doctor)',
    'Vitamin D3',
    'Omega 3 fatty acids',
    'Magnesium for better sleep and insulin sensitivity'
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
          <button className={styles.navItem} onClick={() => router.push('/wellness')}>
            <Activity size={20} /> Wellness
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Heart size={20} /> PCOS Support
          </button>
          <button className={styles.navItem} onClick={() => router.push('/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        {/* Hero Card */}
        <div className={`${styles.card} ${styles.heroCard}`}>
          <div className={styles.heroTitle}>
            <Heart fill="currentColor" size={28} /> PCOS Support Center
          </div>
          <div className={styles.heroText}>
            Polycystic Ovary Syndrome (PCOS) affects 1 in 10 women. You're not alone, and with the right approach, symptoms can be managed effectively.
          </div>
          <div className={styles.heroSubBox}>
            <div className={styles.heroSubBoxTitle}>
              <Lightbulb fill="currentColor" color="#FCD34D" size={20} /> Remember
            </div>
            <div className={styles.heroSubBoxText}>
              Small, consistent lifestyle changes can make a significant difference in managing PCOS symptoms.
            </div>
          </div>
        </div>

        {/* Symptom Tracker */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>Symptom Tracker</div>
          <div className={styles.symptomGrid}>
            {Object.entries(symptoms).map(([name, active]) => (
              <div 
                key={name}
                className={`${styles.symptomItem} ${active ? styles.symptomActive : styles.symptomInactive}`}
                onClick={() => toggleSymptom(name)}
              >
                {name}
                {active ? <CheckCircle2 size={20} color="currentColor" /> : <Circle size={20} color="currentColor" />}
              </div>
            ))}
          </div>
          <button className={styles.updateBtn} onClick={() => console.log('Symptoms Updated:', symptoms)}>
            Update Symptoms
          </button>
        </div>

        {/* Advice Grid */}
        <div className={styles.adviceGrid}>
          {/* Diet */}
          <div className={styles.adviceCard}>
            <div className={styles.adviceHeader}>
              <Salad color="var(--primary)" size={24} /> Diet
            </div>
            <div className={styles.adviceList}>
              {dietTips.map((tip, idx) => (
                <div key={idx} className={styles.adviceItem}>
                  <div className={styles.adviceDot}></div>
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Exercise */}
          <div className={styles.adviceCard}>
            <div className={styles.adviceHeader}>
              <Activity color="var(--primary)" size={24} /> Exercise
            </div>
            <div className={styles.adviceList}>
              {exerciseTips.map((tip, idx) => (
                <div key={idx} className={styles.adviceItem}>
                  <div className={styles.adviceDot}></div>
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className={styles.adviceCard}>
            <div className={styles.adviceHeader}>
              <Leaf color="var(--primary)" size={24} /> Lifestyle
            </div>
            <div className={styles.adviceList}>
              {lifestyleTips.map((tip, idx) => (
                <div key={idx} className={styles.adviceItem}>
                  <div className={styles.adviceDot}></div>
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Supplements */}
          <div className={styles.adviceCard}>
            <div className={styles.adviceHeader}>
              <Pill color="var(--primary)" size={24} /> Supplements
            </div>
            <div className={styles.adviceList}>
              {supplementTips.map((tip, idx) => (
                <div key={idx} className={styles.adviceItem}>
                  <div className={styles.adviceDot}></div>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* When to see a doctor */}
        <div className={`${styles.card} ${styles.doctorCard}`}>
          <div className={styles.sectionTitle}>
            <AlertCircle color="#C2410C" size={24} /> When to See a Doctor
          </div>
          <div className={styles.doctorText}>
            Consult with a healthcare provider if you experience:
          </div>
          <ul className={styles.doctorList}>
            <li>Missed periods for 3 months or longer</li>
            <li>Difficulty getting pregnant</li>
            <li>Significant weight gain or difficulty losing weight</li>
            <li>Unusual hair growth or hair loss</li>
            <li>Severe acne that doesn't respond to treatment</li>
          </ul>
        </div>

        {/* Success Stories */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <TrendingUp color="var(--primary)" size={24} /> Success Stories & Motivation
          </div>
          <div className={styles.storiesContainer}>
            {stories.map(story => (
               <button key={story.id} className={styles.storyBoxBtn} onClick={() => setSelectedStory(story)}>
                 <span className={styles.storyUser}>{story.user}</span>
                 <span className={styles.storyPreview}>"{story.title}"</span>
                 <span className={styles.storyReadMore}>Read More...</span>
               </button>
            ))}
          </div>
        </div>

        {/* Story Modal */}
        {selectedStory && (
          <div className={styles.modalOverlay} onClick={() => setSelectedStory(null)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <span className={styles.modalUser}>{selectedStory.user}</span>
                <button className={styles.closeBtn} onClick={() => setSelectedStory(null)}>
                  <X size={20} />
                </button>
              </div>
              <div className={styles.modalText}>{selectedStory.fullText}</div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
