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
  Moon,
  CloudLightning,
  Sparkles,
  AlertCircle,
  MessageCircle,
  Stethoscope
} from 'lucide-react';
import styles from './MenopauseMentalHealthPage.module.css';

export default function MenopauseMentalHealthPage() {
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
          <button className={styles.navItem} onClick={() => router.push('/menopause/exercise')}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`}>
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
              <Brain size={36} color="white" /> Mental Health & Well-Being
            </div>
            <p className={styles.heroSubtitle}>Support your emotional health during the menopause transition</p>
          </motion.section>

          {/* Managing Mood Swings Section */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><SmileEmoji /></div>
                <h2>Managing Mood Swings & Anxiety</h2>
            </div>
            <p className={styles.sectionIntro}>Hormonal fluctuations during menopause can affect neurotransmitters like serotonin, leading to mood changes. You're not alone, and there are effective strategies to help.</p>
            
            <div className={styles.grid2}>
              <div className={styles.activityCard}>
                 <span className={styles.cardEmoji}>🌇</span>
                 <h3>Establish a Routine</h3>
                 <p>Regular sleep, meals, and exercise times help stabilize mood and provide a sense of control.</p>
              </div>
              <div className={styles.activityCard} style={{backgroundColor: '#FEF9C3'}}>
                 <span className={styles.cardEmoji}>📝</span>
                 <h3>Journal Your Feelings</h3>
                 <p>Writing down emotions can help process them and identify triggers for mood changes.</p>
              </div>
              <div className={styles.activityCard}>
                 <span className={styles.cardEmoji}>🗣️</span>
                 <h3>Talk About It</h3>
                 <p>Share your experience with trusted friends, family, or a therapist. Talking helps normalize the experience.</p>
              </div>
              <div className={styles.activityCard} style={{backgroundColor: '#FEF9C3'}}>
                 <span className={styles.cardEmoji}>🧘‍♀️</span>
                 <h3>Practice Mindfulness</h3>
                 <p>Meditation and breathing exercises help calm anxiety and improve emotional regulation.</p>
              </div>
            </div>
          </motion.section>

          {/* Sleep Strategies Section */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Moon size={28} /></div>
                <h2>Sleep Strategies</h2>
            </div>
            <p className={styles.sectionIntro}>Night sweats, anxiety, and hormonal changes can disrupt sleep. Good sleep is crucial for mental health and overall well-being.</p>
            
            <div className={styles.tipList}>
               <div className={`${styles.tipBox} ${styles.tipColor1}`}>
                  <h4>Keep Your Bedroom Cool</h4>
                  <p>Set temperature to 60-67 degrees F. Use breathable cotton sheets and consider a cooling pillow to manage night sweats.</p>
               </div>
               <div className={`${styles.tipBox} ${styles.tipColor2}`}>
                  <h4>Create a Bedtime Routine</h4>
                  <p>Wind down 30-60 minutes before bed. Try reading, gentle stretching, or a warm bath. Avoid screens and stimulating activities.</p>
               </div>
               <div className={`${styles.tipBox} ${styles.tipColor1}`}>
                  <h4>Limit Caffeine & Alcohol</h4>
                  <p>Avoid caffeine after noon and limit alcohol in the evening, as both can disrupt sleep quality and trigger night sweats.</p>
               </div>
               <div className={`${styles.tipBox} ${styles.tipColor2}`}>
                  <h4>Try Relaxation Techniques</h4>
                  <p>Progressive muscle relaxation, deep breathing (4-7-8 technique), or guided sleep meditations can help calm an active mind.</p>
               </div>
               <div className={`${styles.tipBox} ${styles.tipColor1}`}>
                  <h4>Consider Sleep Aids Carefully</h4>
                  <p>Talk to your doctor about melatonin or other sleep aids if needed. Natural options like magnesium or herbal teas may also help.</p>
               </div>
            </div>
          </motion.section>

          {/* Stress Management Grid */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><WindEmoji /></div>
                <h2>Stress Management Techniques</h2>
            </div>
            <div className={styles.grid3}>
               <div className={styles.activityCard} style={{backgroundColor: '#FEF9C3', alignItems: 'center', textAlign: 'center'}}>
                  <span className={styles.cardEmoji}>🧘‍</span>
                  <h3>Meditation</h3>
                  <p>Even 5-10 minutes daily can reduce stress and improve focus</p>
               </div>
               <div className={styles.activityCard} style={{backgroundColor: '#FEF9C3', alignItems: 'center', textAlign: 'center'}}>
                  <span className={styles.cardEmoji}>🌳</span>
                  <h3>Nature Time</h3>
                  <p>Spending time outdoors lowers cortisol and boosts mood</p>
               </div>
               <div className={styles.activityCard} style={{backgroundColor: '#FEF9C3', alignItems: 'center', textAlign: 'center'}}>
                  <span className={styles.cardEmoji}>🎨</span>
                  <h3>Creative Outlets</h3>
                  <p>Art, music, crafts - creative activities are therapeutic</p>
               </div>
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Sparkles size={28} /></div>
                <h2>Understanding Hormone Changes & Emotions</h2>
            </div>
            
            <div className={styles.infoBox}>
               <h3>Why am I feeling this way?</h3>
               <p>Declining estrogen affects brain chemistry, particularly serotonin and dopamine - neurotransmitters that regulate mood. This is a biological process, not a personal failing.</p>
            </div>
            <div className={`${styles.infoBox} ${styles.themeRose}`}>
               <h3>Common emotional changes</h3>
               <p>Irritability, sadness, anxiety, difficulty concentrating, feeling overwhelmed, and emotional sensitivity are all normal during menopause. These feelings are temporary and manageable.</p>
            </div>
            <div className={styles.infoBox}>
               <h3>When emotions feel overwhelming</h3>
               <p>If mood changes significantly impact your daily life, relationships, or work, talk to your healthcare provider. Depression and anxiety during menopause are treatable with therapy, medication, or both.</p>
            </div>
          </motion.section>

          {/* Support Resources */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><MessageCircle size={28} /></div>
                <h2>Support Resources</h2>
            </div>
            <div className={styles.grid2}>
               <div className={styles.activityCard} style={{backgroundColor: '#FFedd5'}}>
                  <h3>Therapy & Counseling</h3>
                  <p>Cognitive Behavioral Therapy (CBT) is especially effective for menopause-related mood changes and sleep issues.</p>
                  <p><strong>Consider: Individual therapy, group therapy, online counseling</strong></p>
               </div>
               <div className={styles.activityCard} style={{backgroundColor: '#FFedd5'}}>
                  <h3>Support Groups</h3>
                  <p>Connecting with other women going through menopause can provide comfort, validation, and practical tips.</p>
                  <p><strong>Find: Local groups, online communities, social media support</strong></p>
               </div>
               <div className={styles.activityCard} style={{backgroundColor: '#FFedd5'}}>
                  <h3>Crisis Support</h3>
                  <p>If you're experiencing severe depression or suicidal thoughts, help is available 24/7.</p>
                  <p><strong>Call: 988 (Suicide & Crisis Lifeline) in the US</strong></p>
               </div>
               <div className={styles.activityCard} style={{backgroundColor: '#FFedd5'}}>
                  <h3>Healthcare Provider</h3>
                  <p>Your doctor can help with hormone therapy, antidepressants, or other medical interventions if needed.</p>
                  <p><strong>Discuss: All symptoms openly, treatment options, referrals</strong></p>
               </div>
            </div>
          </motion.section>

          {/* Self-Compassion Footer */}
          <motion.section className={styles.footerCard} variants={itemVariants}>
             <div className={`${styles.footerIcon} ${styles.footerIconPurple}`}><Heart size={24} fill="white" /></div>
             <div className={styles.footerInfo}>
                <h3>Practice Self-Compassion</h3>
                <p>Menopause is a significant life transition, and it's okay to struggle sometimes. Be kind to yourself. Your feelings are valid, your experience matters, and you deserve support. This phase will pass, and you will emerge stronger on the other side.</p>
             </div>
          </motion.section>

          {/* Warning Signs */}
          <motion.section className={styles.footerCard} variants={itemVariants}>
             <div className={styles.footerIcon}><AlertCircle size={24} /></div>
             <div className={styles.footerInfo}>
                <h3>When to See a Doctor</h3>
                <ul>
                  <li>Depression or anxiety that interferes with daily life</li>
                  <li>Persistent sleep problems despite trying strategies</li>
                  <li>Thoughts of self-harm or suicide</li>
                  <li>Severe mood swings or panic attacks</li>
                  <li>Inability to cope with daily responsibilities</li>
                </ul>
             </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

function SmileEmoji() {
  return (
    <div style={{width: '28px', height: '28px', borderRadius: '50%', border: '2px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
      <div style={{width: '4px', height: '4px', backgroundColor: 'currentColor', borderRadius: '50%', position: 'absolute', top: '8px', left: '6px'}}></div>
      <div style={{width: '4px', height: '4px', backgroundColor: 'currentColor', borderRadius: '50%', position: 'absolute', top: '8px', right: '6px'}}></div>
      <div style={{width: '14px', height: '14px', borderBottom: '2px solid currentColor', borderRadius: '50%', position: 'absolute', bottom: '6px'}}></div>
    </div>
  );
}

function WindEmoji() {
  return (
    <div style={{width: '28px', height: '28px', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center'}}>
      <div style={{width: '18px', height: '2px', backgroundColor: 'currentColor', borderRadius: '1px', alignSelf: 'flex-start'}}></div>
      <div style={{width: '24px', height: '2px', backgroundColor: 'currentColor', borderRadius: '1px', alignSelf: 'center'}}></div>
      <div style={{width: '18px', height: '2px', backgroundColor: 'currentColor', borderRadius: '1px', alignSelf: 'flex-end'}}></div>
    </div>
  );
}
