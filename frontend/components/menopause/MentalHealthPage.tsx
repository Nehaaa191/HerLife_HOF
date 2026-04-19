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
  Smile,
  Moon,
  Sparkles,
  Users,
  HeartHandshake,
  AlertCircle
} from 'lucide-react';
import styles from './MentalHealth.module.css';
import UserMenu from '../shared/UserMenu';

export default function MentalHealthPage() {
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
          <button className={styles.navItem} onClick={() => router.push('/menopause/exercise')}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
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
            <BrainCircuit color="white" size={32} /> 
            Mental Health & Well-Being
          </div>
          <div className={styles.heroSubtitle}>
            Support your emotional health during the menopause transition
          </div>
        </div>

        {/* Managing Mood Swings */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Smile color="#D14D72" size={24} /> Managing Mood Swings & Anxiety
          </div>
          <div className={styles.sectionSubtitle}>
            Hormonal fluctuations during menopause can affect neurotransmitters like serotonin, leading to mood changes. You're not alone, and there are effective strategies to help.
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>🌅</div>
              <div className={styles.cardTitle}>Establish a Routine</div>
              <div className={styles.cardDesc}>Regular sleep, meals, and exercise times help stabilize mood and provide a sense of control.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>📝</div>
              <div className={styles.cardTitle}>Journal Your Feelings</div>
              <div className={styles.cardDesc}>Writing down emotions can help process them and identify triggers for mood changes.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>🗣️</div>
              <div className={styles.cardTitle}>Talk About It</div>
              <div className={styles.cardDesc}>Share your experience with trusted friends, family, or a therapist. Talking helps normalize the experience.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div style={{fontSize: '2rem'}}>🧘‍♀️</div>
              <div className={styles.cardTitle}>Practice Mindfulness</div>
              <div className={styles.cardDesc}>Meditation and breathing exercises help calm anxiety and improve emotional regulation.</div>
            </div>
          </div>
        </div>

        {/* Sleep Strategies */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Moon color="#5B21B6" size={24} /> Sleep Strategies
          </div>
          <div className={styles.sectionSubtitle}>
            Night sweats, anxiety, and hormonal changes can disrupt sleep. Good sleep is crucial for mental health and overall well-being.
          </div>
          <div className={styles.mealList}>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Keep Your Bedroom Cool</div>
                <div className={styles.cardDesc}>Set temperature to 60-67 degrees F. Use breathable cotton sheets and consider a cooling pillow to manage night sweats.</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgOrange}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Create a Bedtime Routine</div>
                <div className={styles.cardDesc}>Wind down 30-60 minutes before bed. Try reading, gentle stretching, or a warm bath. Avoid screens and stimulating activities.</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Limit Caffeine & Alcohol</div>
                <div className={styles.cardDesc}>Avoid caffeine after noon and limit alcohol in the evening, as both can disrupt sleep quality and trigger night sweats.</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgOrange}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Try Relaxation Techniques</div>
                <div className={styles.cardDesc}>Progressive muscle relaxation, deep breathing (4-7-8 technique), or guided sleep meditations can help calm an active mind.</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Consider Sleep Aids Carefully</div>
                <div className={styles.cardDesc}>Talk to your doctor about melatonin or other sleep aids if needed. Natural options like magnesium or herbal teas may also help.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stress Management Techniques */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <span style={{fontSize: '1.5rem'}}>🍃</span> Stress Management Techniques
          </div>
          <div className={styles.grid3}>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div className={styles.cardTitle}>Meditation</div>
              <div className={styles.cardDesc}>Even 5-10 minutes daily can reduce stress and improve focus</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div className={styles.cardTitle}>Nature Time</div>
              <div className={styles.cardDesc}>Spending time outdoors lowers cortisol and boosts mood</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div className={styles.cardTitle}>Creative Outlets</div>
              <div className={styles.cardDesc}>Art, music, crafts - creative activities are therapeutic</div>
            </div>
          </div>
        </div>

        {/* Understanding Hormone Changes */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Sparkles color="#D14D72" size={24} /> Understanding Hormone Changes & Emotions
          </div>
          <div className={styles.mealList}>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div className={styles.cardTitle}>Why am I feeling this way?</div>
              <div className={styles.cardDesc}>Declining estrogen affects brain chemistry, particularly serotonin and dopamine - neurotransmitters that regulate mood. This is a biological process, not a personal failing.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`}>
              <div className={styles.cardTitle}>Common emotional changes</div>
              <div className={styles.cardDesc}>Irritability, sadness, anxiety, difficulty concentrating, feeling overwhelmed, and emotional sensitivity are all normal during menopause. These feelings are temporary and manageable.</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgLightOrange}`}>
              <div className={styles.cardTitle}>When emotions feel overwhelming</div>
              <div className={styles.cardDesc}>If mood changes significantly impact your daily life, relationships, or work, talk to your healthcare provider. Depression and anxiety during menopause are treatable with therapy, medication, or both.</div>
            </div>
          </div>
        </div>

        {/* Support Resources */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Users color="#5B21B6" size={24} /> Support Resources
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.cardBase} ${styles.bgOrange}`}>
              <div className={styles.cardTitle}>Therapy & Counseling</div>
              <div className={styles.cardDesc}>Cognitive Behavioral Therapy (CBT) is especially effective for menopause-related mood changes and sleep issues.<br/><br/>Consider: Individual therapy, group therapy, online counseling</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`}>
              <div className={styles.cardTitle}>Support Groups</div>
              <div className={styles.cardDesc}>Connecting with other women going through menopause can provide comfort, validation, and practical tips.<br/><br/>Find: Local groups, online communities, social media support</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`}>
              <div className={styles.cardTitle}>Crisis Support</div>
              <div className={styles.cardDesc}>If you're experiencing severe depression or suicidal thoughts, help is available 24/7.<br/><br/><strong>Call: 1800-599-0019 (KIRAN Mental Health Helpline, India)</strong></div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`}>
              <div className={styles.cardTitle}>Healthcare Provider</div>
              <div className={styles.cardDesc}>Your doctor can help with hormone therapy, antidepressants, or other medical interventions if needed.<br/><br/>Discuss: All symptoms openly, treatment options, referrals</div>
            </div>
          </div>
        </div>

        {/* Practice Self-Compassion */}
        <div className={styles.borderedCard}>
          <div className={styles.iconBox}>
            <HeartHandshake size={24} />
          </div>
          <div>
            <div className={styles.cardHeaderTitle}>Practice Self-Compassion</div>
            <div className={styles.cardText}>
              Menopause is a significant life transition, and it's okay to struggle sometimes. Be kind to yourself. Your feelings are valid, your experience matters, and you deserve support. This phase will pass, and you will emerge stronger on the other side.
            </div>
          </div>
        </div>

        {/* When to See a Doctor */}
        <div className={`${styles.borderedCard} ${styles.borderedCardPurple}`}>
          <div className={`${styles.iconBox} ${styles.iconBoxPurple}`}>
            <AlertCircle size={24} />
          </div>
          <div>
            <div className={styles.cardHeaderTitle}>When to See a Doctor</div>
            <div className={styles.cardText}>
              <ul className={styles.doctorList}>
                <li>Depression or anxiety that interferes with daily life</li>
                <li>Persistent sleep problems despite trying strategies</li>
                <li>Thoughts of self-harm or suicide</li>
                <li>Severe mood swings or panic attacks</li>
                <li>Inability to cope with daily responsibilities</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
