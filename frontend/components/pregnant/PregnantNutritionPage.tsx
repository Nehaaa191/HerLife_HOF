'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Apple, 
  Dumbbell,
  BookOpen,
  FileText,
  Check,
  X,
  Utensils
} from 'lucide-react';
import styles from './PregnantNutrition.module.css';

export default function PregnantNutritionPage() {
  const router = useRouter();

  const avoidFoods = [
    "Raw or undercooked meat, eggs, and fish",
    "High-mercury fish (swordfish, king mackerel, shark)",
    "Unpasteurized dairy and soft cheeses",
    "Deli meats (unless heated to steaming)",
    "Excessive caffeine (limit to 200mg/day)",
    "Alcohol (avoid completely)"
  ];

  const mealIdeas = [
    {
      trimester: "First Trimester",
      meals: [
        "Whole grain toast with avocado and egg",
        "Ginger tea with crackers (for nausea)",
        "Small frequent meals with protein"
      ]
    },
    {
      trimester: "Second Trimester",
      meals: [
        "Grilled salmon with quinoa and vegetables",
        "Greek yogurt parfait with berries and granola",
        "Lentil soup with whole grain bread"
      ]
    },
    {
      trimester: "Third Trimester",
      meals: [
        "Iron-rich beef stir-fry with broccoli",
        "Calcium-packed smoothie with spinach and banana",
        "Fiber-rich oatmeal with nuts and dried fruit"
      ]
    }
  ];

  const tips = [
    "Eat small, frequent meals to help with nausea and maintain energy",
    "Stay hydrated - aim for 8-10 glasses of water daily",
    "Take prenatal vitamins daily to fill nutritional gaps",
    "Listen to your body - eat when hungry, rest when tired",
    "Choose nutrient-dense foods over empty calories"
  ];

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="var(--primary)" size={28} />
          BumpJourney
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/pregnant')}>
            <Home size={20} /> Home
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Apple size={20} /> Nutrition
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/exercise')}>
            <Dumbbell size={20} /> Exercise
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/pregnant/log')}>
            <FileText size={20} /> Daily Log
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Header Card */}
        <div className={`${styles.card} ${styles.cardPinkBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            <Apple size={28} color="var(--primary)" /> Nutrition During Pregnancy
          </div>
          <div className={styles.heroDesc}>
            Eating nutritious foods supports your baby's growth and development while keeping you healthy throughout your pregnancy journey.
          </div>
        </div>

        {/* Nutrients Grid */}
        <div className={styles.nutrientsGrid}>
          
          {/* Folate */}
          <div className={`${styles.nutrientCard} ${styles.nutrientFolate}`}>
            <div className={styles.nutrientHeader}>
              <div className={styles.nutrientIcon}>🥬</div>
              <div className={styles.nutrientTitle}>Folate-Rich Foods</div>
            </div>
            <ul className={styles.nutrientList}>
              <li>Leafy green vegetables (spinach, kale)</li>
              <li>Lentils and black beans</li>
              <li>Fortified cereals</li>
              <li>Asparagus and broccoli</li>
            </ul>
            <div className={styles.nutrientBenefit}>
              <strong>Benefit:&nbsp;</strong> Essential for baby's neural tube development and prevents birth defects
            </div>
          </div>

          {/* Iron */}
          <div className={`${styles.nutrientCard} ${styles.nutrientIron}`}>
            <div className={styles.nutrientHeader}>
              <div className={styles.nutrientIcon}>🥩</div>
              <div className={styles.nutrientTitle}>Iron Sources</div>
            </div>
            <ul className={styles.nutrientList}>
              <li>Lean red meat and poultry</li>
              <li>Beans and lentils</li>
              <li>Fortified cereals</li>
              <li>Dark leafy greens with vitamin C</li>
            </ul>
            <div className={styles.nutrientBenefit}>
              <strong>Benefit:&nbsp;</strong> Prevents anemia and supports increased blood volume during pregnancy
            </div>
          </div>

          {/* Calcium */}
          <div className={`${styles.nutrientCard} ${styles.nutrientCalcium}`}>
            <div className={styles.nutrientHeader}>
              <div className={styles.nutrientIcon}>🥛</div>
              <div className={styles.nutrientTitle}>Calcium-Rich Foods</div>
            </div>
            <ul className={styles.nutrientList}>
              <li>Milk, cheese, and yogurt</li>
              <li>Fortified plant-based milk</li>
              <li>Sardines and salmon with bones</li>
              <li>Tofu and almonds</li>
            </ul>
            <div className={styles.nutrientBenefit}>
              <strong>Benefit:&nbsp;</strong> Builds baby's bones and teeth, supports your bone health
            </div>
          </div>

          {/* Protein */}
          <div className={`${styles.nutrientCard} ${styles.nutrientProtein}`}>
            <div className={styles.nutrientHeader}>
              <div className={styles.nutrientIcon}>🍳</div>
              <div className={styles.nutrientTitle}>Protein Sources</div>
            </div>
            <ul className={styles.nutrientList}>
              <li>Lean meats and poultry</li>
              <li>Eggs</li>
              <li>Greek yogurt</li>
              <li>Nuts, beans, and tofu</li>
            </ul>
            <div className={styles.nutrientBenefit}>
              <strong>Benefit:&nbsp;</strong> Supports baby's growth and development throughout pregnancy
            </div>
          </div>

        </div>

        {/* Foods to Avoid */}
        <div className={`${styles.card} ${styles.cardPinkBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            Foods to Avoid During Pregnancy
          </div>
          <div className={styles.avoidGrid}>
            {avoidFoods.map((food, idx) => (
              <div key={idx} className={styles.avoidPill}>
                <div className={styles.avoidIcon}>
                  <X size={14} strokeWidth={3} />
                </div>
                {food}
              </div>
            ))}
          </div>
        </div>

        {/* Meal Ideas by Trimester */}
        <div className={`${styles.card} ${styles.cardGreenBorder}`}>
          <div className={`${styles.sectionTitle} ${styles.sectionTitlePink}`}>
            Meal Ideas by Trimester
          </div>
          
          <div className={styles.mealRows}>
            {mealIdeas.map((trimesterGroup, idx) => (
              <div key={idx} className={styles.mealRow}>
                <div className={styles.mealLabel}>
                  <div className={styles.mealLabelIcon}>
                    <Utensils size={18} />
                  </div>
                  {trimesterGroup.trimester}
                </div>
                <div className={styles.mealIdeas}>
                  {trimesterGroup.meals.map((meal, mIdx) => (
                    <div key={mIdx} className={styles.mealPill}>
                      {meal}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className={styles.tipsGradientCard}>
          <div className={styles.tipsTitle}>
            💡 Pregnancy Nutrition Tips
          </div>
          <div className={styles.tipsList}>
            {tips.map((tip, idx) => (
              <div key={idx} className={styles.tipItem}>
                <Check size={20} strokeWidth={3} /> {tip}
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
