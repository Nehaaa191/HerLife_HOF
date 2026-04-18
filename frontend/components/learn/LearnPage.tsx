'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Calendar, 
  Activity, 
  BookOpen,
  Book,
  Video,
  Play,
  ExternalLink,
  Download
} from 'lucide-react';
import styles from './Learn.module.css';

export default function LearnPage() {
  const router = useRouter();

  const facts = [
    "The average menstrual cycle is 28 days, but anywhere from 21-35 days is normal",
    "Menstrual blood is not just blood - it contains tissue from the uterine lining",
    "Exercise can help reduce period cramps by releasing endorphins",
    "Your basal body temperature rises slightly after ovulation",
    "The luteal phase is relatively consistent at 12-14 days for most women",
    "Stress can delay or skip your period by affecting hormone production"
  ];

  const videos = [
    { title: "Understanding Your Menstrual Cycle", author: "HealthLine", duration: "12:45", color: "var(--accent)" },
    { title: "Hormones and Your Monthly Cycle", author: "Ted-Ed", duration: "8:20", color: "#FF8A8A" },
    { title: "Period Pain: What's Normal and What's Not", author: "Mayo Clinic", duration: "15:30", color: "var(--primary)" },
    { title: "PCOS Explained - Symptoms and Management", author: "Cleveland Clinic", duration: "10:15", color: "var(--accent)" },
    { title: "Nutrition for Hormonal Health", author: "NutritionFacts", duration: "18:00", color: "var(--primary)" },
    { title: "Exercise Throughout Your Cycle", author: "Fitness Blender", duration: "14:25", color: "#FF8A8A" }
  ];

  const reading = [
    { title: "The Four Phases of the Menstrual Cycle", desc: "Learn about each phase and what happens in your body", time: "5 min read" },
    { title: "Managing PMS Symptoms Naturally", desc: "Evidence-based tips for reducing PMS discomfort", time: "7 min read" },
    { title: "Understanding Irregular Periods", desc: "Common causes and when to seek medical advice", time: "6 min read" },
    { title: "Period Myths Debunked", desc: "Separating fact from fiction about menstruation", time: "4 min read" }
  ];

  const resources = [
    { title: "Cycle Tracking Journal", desc: "Printable monthly tracker" },
    { title: "Hormone Guide", desc: "Visual hormone timeline" },
    { title: "Nutrition Planner", desc: "Meal ideas by cycle phase" },
    { title: "Exercise Calendar", desc: "Phase-based workout plan" }
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
          <button className={styles.navItem} onClick={() => router.push('/pcos')}>
            <Heart size={20} /> PCOS Support
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <BookOpen size={20} /> Learn
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Main Header */}
        <div className={styles.sectionHeader} style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
          <Book color="var(--primary)" size={32} /> Educational Resources
        </div>
        <div className={styles.sectionSubtitle}>
          Empower yourself with knowledge about menstruation, hormones, and reproductive health.
        </div>

        {/* Quick Facts */}
        <div className={styles.factsBox}>
          <div className={styles.factsTitle}>Quick Facts About Menstruation</div>
          <div className={styles.factsGrid}>
            {facts.map((fact, idx) => (
              <div key={idx} className={styles.factItem}>
                <div className={styles.factNumber}>{idx + 1}</div>
                <div className={styles.factText}>{fact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div className={styles.sectionHeader}>
          <Video color="var(--primary)" size={24} /> Educational Videos
        </div>
        <div className={styles.videosGrid}>
          {videos.map((vid, idx) => (
            <div key={idx} className={styles.videoCard}>
              <div className={styles.videoThumbnail} style={{ backgroundColor: vid.color }}>
                <div className={styles.playIcon}>
                  <Play fill="currentColor" size={24} />
                </div>
                <div className={styles.videoDuration}>{vid.duration}</div>
              </div>
              <div className={styles.videoInfo}>
                <div className={styles.videoTitle}>{vid.title}</div>
                <div className={styles.videoAuthor}>{vid.author}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Reading */}
        <div className={styles.sectionHeader}>
          <Book color="var(--primary)" size={24} /> Recommended Reading
        </div>
        <div className={styles.readingList} style={{ marginBottom: '3rem' }}>
          {reading.map((item, idx) => (
            <div key={idx} className={styles.readingCard}>
              <div className={styles.readingContent}>
                <div className={styles.readingTitle}>{item.title}</div>
                <div className={styles.readingDesc}>{item.desc}</div>
                <div className={styles.readingTime}>{item.time}</div>
              </div>
              <ExternalLink className={styles.readingIcon} size={20} />
            </div>
          ))}
        </div>

        {/* Downloadable Resources */}
        <div className={styles.resourcesCard}>
          <div className={styles.resourcesHeader}>
            <Download size={28} /> Downloadable Resources
          </div>
          <div className={styles.resourcesSubtitle}>
            Get free guides and printables to help you track and understand your cycle better.
          </div>
          <div className={styles.resourcesGrid}>
            {resources.map((res, idx) => (
              <div key={idx} className={styles.resourceBox}>
                <div className={styles.resourceTitle}>{res.title}</div>
                <div className={styles.resourceDesc}>{res.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
