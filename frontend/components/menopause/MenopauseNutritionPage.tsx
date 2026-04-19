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
  Check, 
  X, 
  Coffee, 
  Milk,
  Utensils,
  Lightbulb
} from 'lucide-react';
import styles from './MenopauseNutritionPage.module.css';

export default function MenopauseNutritionPage() {
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
          <button className={`${styles.navItem} ${styles.navItemActive}`}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/exercise')}>
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
              <Apple size={36} color="white" /> Nutrition for Menopause
            </div>
            <p className={styles.heroSubtitle}>Support your hormonal balance and overall health with the right foods</p>
          </motion.section>

          {/* Foods for Hormonal Balance */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Utensils size={28} /></div>
                <h2>Foods for Hormonal Balance</h2>
            </div>
            <div className={styles.foodGrid}>
              <div className={styles.foodItem}>
                <Check className={styles.checkIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Soy Products</h3>
                    <p>Tofu, tempeh, edamame - rich in phytoestrogens that may help balance hormones and reduce hot flashes</p>
                </div>
              </div>
              <div className={styles.foodItem}>
                <Check className={styles.checkIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Flaxseeds</h3>
                    <p>Ground flaxseeds contain lignans that support hormone regulation and provide omega-3 fatty acids</p>
                </div>
              </div>
              <div className={styles.foodItem}>
                <Check className={styles.checkIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Whole Grains</h3>
                    <p>Brown rice, quinoa, oats - stabilize blood sugar and provide B vitamins for energy</p>
                </div>
              </div>
              <div className={styles.foodItem}>
                <Check className={styles.checkIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Leafy Greens</h3>
                    <p>Spinach, kale, collards - packed with vitamins, minerals, and fiber for overall health</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Calcium Section */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Milk size={28} /></div>
                <h2>Calcium-Rich Foods for Bone Health</h2>
            </div>
            <p className={styles.calciumText}>Estrogen decline during menopause can affect bone density. Aim for 1,200mg of calcium daily.</p>
            <div className={styles.calciumGrid}>
              <div className={styles.calciumCard}>
                <span className={styles.calciumEmoji}>🥛</span>
                <h3>Dairy Products</h3>
                <p>Milk, yogurt, cheese, kefir</p>
              </div>
              <div className={styles.calciumCard}>
                <span className={styles.calciumEmoji}>🥦</span>
                <h3>Dark Leafy Greens</h3>
                <p>Broccoli, bok choy, kale</p>
              </div>
              <div className={styles.calciumCard}>
                <span className={styles.calciumEmoji}>🐟</span>
                <h3>Fortified & Fish</h3>
                <p>Sardines, salmon, fortified plant milks</p>
              </div>
            </div>
          </motion.section>

          {/* Trigger Foods */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Coffee size={28} /></div>
                <h2>Foods That May Trigger Symptoms</h2>
            </div>
            <div className={styles.foodGrid}>
              <div className={styles.triggerItem}>
                <X className={styles.closeIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Caffeine</h3>
                    <p>Can trigger hot flashes and disrupt sleep. Try limiting to morning only or switch to herbal tea</p>
                </div>
              </div>
              <div className={styles.triggerItem}>
                <X className={styles.closeIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Alcohol</h3>
                    <p>May worsen hot flashes, night sweats, and mood changes. Moderate consumption is key</p>
                </div>
              </div>
              <div className={styles.triggerItem}>
                <X className={styles.closeIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Spicy Foods</h3>
                    <p>Can trigger or intensify hot flashes in some women. Notice your personal triggers</p>
                </div>
              </div>
              <div className={styles.triggerItem}>
                <X className={styles.closeIcon} size={24} />
                <div className={styles.foodInfo}>
                    <h3>Processed Foods</h3>
                    <p>High in sugar and salt, may contribute to weight gain and inflammation</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Meal Ideas */}
          <motion.section className={styles.card} variants={itemVariants}>
            <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}><Utensils size={28} /></div>
                <h2 style={{color: '#1F2937'}}>Menopause-Friendly Meal Ideas</h2>
            </div>
            <div className={styles.mealList}>
               <div className={`${styles.mealBox} ${styles.mealColor1}`}>
                  <div className={styles.mealHeader}>
                    <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D14D72'}}></div>
                    <h3>Breakfast: Overnight Oats Power Bowl</h3>
                  </div>
                  <p>Oats with ground flaxseeds, berries, walnuts, and Greek yogurt. Rich in fiber, omega-3s, and calcium</p>
               </div>
               <div className={`${styles.mealBox} ${styles.mealColor2}`}>
                  <div className={styles.mealHeader}>
                    <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7E22CE'}}></div>
                    <h3>Lunch: Colorful Quinoa Bowl</h3>
                  </div>
                  <p>Quinoa with roasted vegetables, chickpeas, spinach, and tahini dressing. Complete protein with plenty of nutrients</p>
               </div>
               <div className={`${styles.mealBox} ${styles.mealColor1}`}>
                  <div className={styles.mealHeader}>
                    <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D14D72'}}></div>
                    <h3>Dinner: Baked Salmon with Greens</h3>
                  </div>
                  <p>Wild salmon with steamed broccoli and sweet potato. Packed with omega-3s, calcium, and vitamin D</p>
               </div>
               <div className={`${styles.mealBox} ${styles.mealColor2}`}>
                  <div className={styles.mealHeader}>
                    <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#7E22CE'}}></div>
                    <h3>Snack: Energy-Boosting Bites</h3>
                  </div>
                  <p>Apple slices with almond butter, or edamame with sea salt. Protein-rich snacks to maintain energy</p>
               </div>
            </div>
          </motion.section>

          {/* Hydration Footer */}
          <motion.section className={styles.footerBox} variants={itemVariants}>
             <div className={styles.footerIcon}><Lightbulb size={24} /></div>
             <div className={styles.footerInfo}>
                <h3>Stay Hydrated</h3>
                <p>Drink at least 8 glasses of water daily. Proper hydration helps manage bloating, supports skin health, and may reduce the frequency of hot flashes. Try herbal teas like chamomile or peppermint as calming alternatives to caffeinated beverages.</p>
             </div>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}
