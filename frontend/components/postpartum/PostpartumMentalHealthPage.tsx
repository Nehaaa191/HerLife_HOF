'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Activity, 
  BookOpen,
  FileText,
  Brain,
  Smile,
  Lightbulb,
  Circle,
  CheckCircle2,
  Phone
} from 'lucide-react';
import styles from './PostpartumMentalHealth.module.css';
import UserMenu from '../shared/UserMenu';

export default function PostpartumMentalHealthPage() {
  const router = useRouter();
  
  const [activeSymptoms, setActiveSymptoms] = useState<string[]>([]);

  const toggleSymptom = (title: string) => {
    if (activeSymptoms.includes(title)) {
      setActiveSymptoms(activeSymptoms.filter(s => s !== title));
    } else {
      setActiveSymptoms([...activeSymptoms, title]);
    }
  };

  const moods = [
    { emoji: "😊", label: "Great" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😰", label: "Anxious" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😫", label: "Overwhelmed" },
    { emoji: "😞", label: "Hopeless" }
  ];

  const understandingColumns = [
    {
      title: "Baby Blues",
      subtitle: "Affects 80% of new mothers",
      desc: "Mild mood swings, tearfulness, anxiety. Usually resolves within 2 weeks."
    },
    {
      title: "Postpartum Depression",
      subtitle: "Affects 1 in 7 mothers",
      desc: "Persistent sadness, loss of interest, difficulty bonding. Requires treatment."
    },
    {
      title: "Postpartum Anxiety",
      subtitle: "Affects 1 in 10 mothers",
      desc: "Excessive worry, racing thoughts, physical symptoms like rapid heartbeat."
    }
  ];

  const symptomsList = [
    "Difficulty bonding with your baby",
    "Withdrawing from family and friends",
    "Extreme fatigue or loss of energy",
    "Feelings of worthlessness or guilt",
    "Difficulty concentrating or making decisions",
    "Changes in appetite or sleep patterns",
    "Intense irritability or anger",
    "Thoughts of harming yourself or your baby"
  ];

  const copingStrategies = [
    {
      emoji: "💬",
      title: "Talk to Someone",
      items: [
        "Share your feelings with a trusted friend or family member",
        "Join a postpartum support group",
        "Consider talking to a therapist who specializes in postpartum issues",
        "Don't isolate yourself - connection is healing"
      ]
    },
    {
      emoji: "🧘‍♀️",
      title: "Self-Care Practices",
      items: [
        "Rest whenever possible - sleep when baby sleeps",
        "Eat nutritious meals and stay hydrated",
        "Take short walks or do gentle exercise",
        "Practice deep breathing or meditation"
      ]
    },
    {
      emoji: "🤝",
      title: "Ask for Help",
      items: [
        "Accept help from others with household tasks",
        "Let your partner know how you're feeling",
        "Don't try to do everything perfectly",
        "It's okay to ask for what you need"
      ]
    },
    {
      emoji: "🩺",
      title: "Professional Support",
      items: [
        "Talk to your doctor about how you're feeling",
        "Consider therapy or counseling",
        "Medication may be helpful and safe (even while breastfeeding)",
        "Early treatment leads to better outcomes"
      ]
    }
  ];

  const aloneItems = [
    { emoji: "💚", text: "What you're feeling is real, valid, and not your fault" },
    { emoji: "💪", text: "Asking for help is a sign of strength, not weakness" },
    { emoji: "🌟", text: "You deserve support, compassion, and care" },
    { emoji: "🌈", text: "With proper treatment, you will feel better" },
    { emoji: "💖", text: "You are doing your best, and that is enough" },
    { emoji: "👶", text: "Taking care of your mental health helps you care for your baby" }
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
          <button className={styles.navItem} onClick={() => router.push('/postpartum/log')}>
            <FileText size={20} /> Daily Log
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Heart size={20} /> Mental Health
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Hero Card */}
        <div className={styles.heroBox}>
          <div className={styles.heroTitle}>
            <Brain size={32} /> Mental Health Matters
          </div>
          <div className={styles.heroSubtitle}>
            Your mental health is just as important as your physical health. You deserve support, care, and compassion during this transformative time.
          </div>
        </div>

        {/* Mood Tracker */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Smile color="var(--primary)" size={24} /> How Are You Feeling Right Now?
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

        {/* Understanding PPD */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            Understanding Postpartum Depression & Anxiety
          </div>
          <div className={styles.understandingGrid}>
            {understandingColumns.map((col, idx) => (
              <div key={idx} className={styles.understandingCol}>
                <div className={styles.understandingTitle}>{col.title}</div>
                <div className={styles.understandingSubtitle}>{col.subtitle}</div>
                <div className={styles.understandingDesc}>{col.desc}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.importantBox}>
            <div className={styles.importantTitle}>
              <Lightbulb color="var(--primary)" size={20} fill="var(--primary)" /> Important to Know:
            </div>
            <ul className={styles.bulletList}>
              <li><div className={styles.bulletDot}></div>PPD is NOT your fault and doesn't mean you're a bad mother</li>
              <li><div className={styles.bulletDot}></div>It's caused by hormonal changes, sleep deprivation, and life adjustments</li>
              <li><div className={styles.bulletDot}></div>Treatment works - therapy and/or medication can help you feel better</li>
              <li><div className={styles.bulletDot}></div>Early intervention leads to better outcomes for you and baby</li>
            </ul>
          </div>
        </div>

        {/* Symptom Checker */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Activity color="var(--primary)" size={24} /> PPD Symptom Checker
          </div>
          <div className={styles.symptomList}>
            {symptomsList.map((sym, idx) => {
              const isActive = activeSymptoms.includes(sym);
              return (
                <div 
                  key={idx} 
                  className={`${styles.symptomRow} ${isActive ? styles.symptomRowActive : ''}`}
                  onClick={() => toggleSymptom(sym)}
                >
                  {isActive ? (
                    <CheckCircle2 color="var(--primary)" fill="var(--primary)" className="text-white" size={24} />
                  ) : (
                    <Circle color="var(--primary)" size={24} />
                  )}
                  <span className={styles.symptomText}>{sym}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coping Strategies */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            Coping Strategies & Support
          </div>
          <div className={styles.copingGrid}>
            {copingStrategies.map((strat, idx) => (
              <div key={idx} className={styles.copingCard}>
                <div className={styles.copingTitle}>
                  <span className="text-2xl">{strat.emoji}</span> {strat.title}
                </div>
                <ul className={styles.bulletList}>
                  {strat.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <div className={styles.bulletDot}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Support */}
        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Phone color="var(--primary)" size={24} /> Crisis Support Resources
          </div>
          
          <div className={styles.crisisWarning}>
            <span className="text-2xl">🚨</span>
            <div>
              <strong>If you're having thoughts of harming yourself or your baby:</strong><br />
              Call 911 or go to the nearest emergency room immediately.
            </div>
          </div>

          <div className={styles.crisisGrid}>
            <div className={styles.crisisCard}>
              <div className={styles.crisisTitle}>National Suicide Prevention Lifeline</div>
              <div className={styles.crisisHighlight}>988</div>
              <div className={styles.crisisDesc}>24/7 free and confidential support</div>
            </div>
            <div className={styles.crisisCard}>
              <div className={styles.crisisTitle}>Postpartum Support International</div>
              <div className={styles.crisisHighlight}>1-800-944-4773</div>
              <div className={styles.crisisDesc}>Text "HELP" to 800-944-4773 (English & Spanish)</div>
            </div>
            <div className={styles.crisisCard}>
              <div className={styles.crisisTitle}>Crisis Text Line</div>
              <div className={styles.crisisHighlight}>Text HOME to 741741</div>
              <div className={styles.crisisDesc}>Free 24/7 crisis support via text</div>
            </div>
            <div className={styles.crisisCard}>
              <div className={styles.crisisTitle}>Your Healthcare Provider</div>
              <div className={styles.crisisDesc}>Don't wait for your next appointment - call your doctor's office today if you're struggling</div>
            </div>
          </div>
        </div>

        {/* You Are Not Alone */}
        <div className={styles.aloneBox}>
          <div className={styles.aloneTitle}>
            <Heart fill="currentColor" size={28} /> You Are Not Alone
          </div>
          <div className={styles.aloneList}>
            {aloneItems.map((item, idx) => (
              <div key={idx} className={styles.aloneItem}>
                <span className="text-xl">{item.emoji}</span> {item.text}
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
