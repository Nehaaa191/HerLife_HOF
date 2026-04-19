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
  Check,
  Milk,
  Coffee,
  Lightbulb,
  X,
  Leaf
} from 'lucide-react';
import styles from './Nutrition.module.css';
import UserMenu from '../shared/UserMenu';

export default function NutritionPage() {
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
          <button className={styles.navItem} onClick={() => router.push('/')}>
            <Home size={20} /> Home
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={styles.navItem} onClick={() => router.push('/menopause/exercise')}>
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
            <Apple fill="currentColor" color="white" size={32} /> 
            Nutrition for Menopause
          </div>
          <div className={styles.heroSubtitle}>
            Support your hormonal balance and overall health with the right foods
          </div>
        </div>

        {/* Foods for Hormonal Balance */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Leaf color="#D14D72" size={24} /> Foods for Hormonal Balance
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgLightOrange}`}>
              <Check color="#D14D72" size={20} style={{marginTop: '0.2rem'}} />
              <div>
                <div className={styles.cardTitle}>Soy Products</div>
                <div className={styles.cardDesc}>Tofu, tempeh, edamame - rich in phytoestrogens that may help balance hormones and reduce hot flashes</div>
              </div>
            </div>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgLightOrange}`}>
              <Check color="#D14D72" size={20} style={{marginTop: '0.2rem'}} />
              <div>
                <div className={styles.cardTitle}>Flaxseeds</div>
                <div className={styles.cardDesc}>Ground flaxseeds contain lignans that support hormone regulation and provide omega-3 fatty acids</div>
              </div>
            </div>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgLightOrange}`}>
              <Check color="#D14D72" size={20} style={{marginTop: '0.2rem'}} />
              <div>
                <div className={styles.cardTitle}>Whole Grains</div>
                <div className={styles.cardDesc}>Brown rice, quinoa, oats - stabilize blood sugar and provide B vitamins for energy</div>
              </div>
            </div>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgLightOrange}`}>
              <Check color="#D14D72" size={20} style={{marginTop: '0.2rem'}} />
              <div>
                <div className={styles.cardTitle}>Leafy Greens</div>
                <div className={styles.cardDesc}>Spinach, kale, collards - packed with vitamins, minerals, and fiber for overall health</div>
              </div>
            </div>
          </div>
        </div>

        {/* Calcium-Rich Foods */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Milk color="#7C3AED" size={24} /> Calcium-Rich Foods for Bone Health
          </div>
          <div className={styles.sectionSubtitle}>
            Estrogen decline during menopause can affect bone density. Aim for 1,200mg of calcium daily.
          </div>
          <div className={styles.grid3}>
            <div className={`${styles.cardBase} ${styles.bgOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🥛</div>
              <div className={styles.cardTitle}>Dairy Products</div>
              <div className={styles.cardDesc}>Milk, yogurt, cheese, kefir</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🥦</div>
              <div className={styles.cardTitle}>Dark Leafy Greens</div>
              <div className={styles.cardDesc}>Broccoli, bok choy, kale</div>
            </div>
            <div className={`${styles.cardBase} ${styles.bgOrange}`} style={{alignItems: 'center', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🐟</div>
              <div className={styles.cardTitle}>Fortified & Fish</div>
              <div className={styles.cardDesc}>Sardines, salmon, fortified plant milks</div>
            </div>
          </div>
        </div>

        {/* Foods That May Trigger Symptoms */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <Coffee color="#D14D72" size={24} /> Foods That May Trigger Symptoms
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgYellow}`}>
              <X className={styles.triggerIcon} size={20} />
              <div>
                <div className={styles.cardTitle}>Caffeine</div>
                <div className={styles.cardDesc}>Can trigger hot flashes and disrupt sleep. Try limiting to morning only or switch to herbal tea</div>
              </div>
            </div>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgYellow}`}>
              <X className={styles.triggerIcon} size={20} />
              <div>
                <div className={styles.cardTitle}>Alcohol</div>
                <div className={styles.cardDesc}>May worsen hot flashes, night sweats, and mood changes. Moderate consumption is key</div>
              </div>
            </div>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgYellow}`}>
              <X className={styles.triggerIcon} size={20} />
              <div>
                <div className={styles.cardTitle}>Spicy Foods</div>
                <div className={styles.cardDesc}>Can trigger or intensify hot flashes in some women. Notice your personal triggers</div>
              </div>
            </div>
            <div className={`${styles.cardBase} ${styles.cardRow} ${styles.bgYellow}`}>
              <X className={styles.triggerIcon} size={20} />
              <div>
                <div className={styles.cardTitle}>Processed Foods</div>
                <div className={styles.cardDesc}>High in sugar and salt, may contribute to weight gain and inflammation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Ideas */}
        <div className={styles.sectionBox}>
          <div className={styles.sectionHeader}>
            <span style={{fontSize: '1.5rem'}}>🍲</span> Menopause-Friendly Meal Ideas
          </div>
          <div className={styles.mealList}>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Breakfast: Overnight Oats Power Bowl</div>
                <div className={styles.cardDesc}>Oats with ground flaxseeds, berries, walnuts, and Greek yogurt. Rich in fiber, omega-3s, and calcium</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgOrange}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Lunch: Colorful Quinoa Bowl</div>
                <div className={styles.cardDesc}>Quinoa with roasted vegetables, chickpeas, spinach, and tahini dressing. Complete protein with plenty of nutrients</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgYellow}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Dinner: Baked Salmon with Greens</div>
                <div className={styles.cardDesc}>Wild salmon with steamed broccoli and sweet potato. Packed with omega-3s, calcium, and vitamin D</div>
              </div>
            </div>
            <div className={`${styles.mealItem} ${styles.bgOrange}`}>
              <div className={styles.mealDot}></div>
              <div>
                <div className={styles.cardTitle}>Snack: Energy-Boosting Bites</div>
                <div className={styles.cardDesc}>Apple slices with almond butter, or edamame with sea salt. Protein-rich snacks to maintain energy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Hydrated */}
        <div className={styles.hydrationCard}>
          <div className={styles.hydrateIconBox}>
            <Lightbulb size={24} />
          </div>
          <div>
            <div className={styles.hydrateTitle}>Stay Hydrated</div>
            <div className={styles.hydrateText}>
              Drink at least 8 glasses of water daily. Proper hydration helps manage bloating, supports skin health, and may reduce the frequency of hot flashes. Try herbal teas like chamomile or peppermint as calming alternatives to caffeinated beverages.
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
