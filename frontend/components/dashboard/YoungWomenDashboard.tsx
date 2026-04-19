'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Calendar, 
  Activity, 
  BrainCircuit, 
  Dumbbell,
  Apple,
  Droplet
} from 'lucide-react';
import styles from './YoungWomenDashboard.module.css';
import DashboardNavbar from '../shared/DashboardNavbar';
import ProfileBanner from './ProfileBanner';
import ProfileCompletionModal from './ProfileCompletionModal';
import { 
  calculateBMI, 
  calculateHormonalStressIndex, 
  calculateWellnessScore 
} from '../../utils/healthUtils';

export default function YoungWomenDashboard({ userName }: { userName: string }) {
  const router = useRouter();
  const [cycleData, setCycleData] = useState({
    nextPeriod: 12,
    cycleDay: 8,
    currentPhase: 'Follicular Phase'
  });

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(true);

  const [metrics, setMetrics] = useState({
    wellnessScore: 85,
    stressIndex: 4,
    bmi: 22.5
  });

  const loadHealthData = () => {
    const onboarding = localStorage.getItem('herlife_onboarding');
    const rawLogs = localStorage.getItem('herlife_logs');
    const profileData = localStorage.getItem('herlife_profile_data');
    
    setIsProfileComplete(!!profileData);

    if (onboarding) {
      try {
        const parsedOnboarding = JSON.parse(onboarding);
        const logs = rawLogs ? JSON.parse(rawLogs) : [];
        const latestLog = logs.length > 0 ? logs[logs.length - 1] : null;
        const parsedProfile = profileData ? JSON.parse(profileData) : null;
        
        const height = parseFloat(parsedOnboarding.answers?.height_cm || 160);
        const weight = parseFloat(parsedOnboarding.answers?.Weight_kg || 55);
        const bmi = calculateBMI(height, weight) || 22.5;

        // Use defaults but override with latest log OR profile data
        let sleep = latestLog?.sleep || 4;
        let mood = latestLog?.mood || 4;
        let energy = latestLog?.energy === 'High' ? 5 : latestLog?.energy === 'Medium' ? 3 : 1;
        let stress = latestLog?.stress || 3;
        let junk = latestLog?.junkFood || 2;

        // Overlay with Profile Data if available (and no latest log)
        if (parsedProfile && !latestLog) {
          sleep = parsedProfile.sleep === '7-9hrs' ? 4 : parsedProfile.sleep === '5-7hrs' ? 3 : 2;
          junk = parsedProfile.junk === 'Never' ? 1 : parsedProfile.junk === 'Daily' ? 5 : 3;
        }

        const wellness = calculateWellnessScore(sleep, mood, energy, stress, junk);
        const stressIdx = calculateHormonalStressIndex(stress, sleep);

        setMetrics({
          wellnessScore: wellness,
          stressIndex: stressIdx,
          bmi: bmi
        });
      } catch (e) {}
    }
  };

  useEffect(() => {
    loadHealthData();
  }, []);

  const handleProfileComplete = (data: any) => {
    localStorage.setItem('herlife_profile_data', JSON.stringify(data));
    setIsProfileComplete(true);
    setShowProfileModal(false);
    loadHealthData(); // Refresh metrics
  };

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <DashboardNavbar activeTab="home" />

      {/* Main Content */}
      <main className={styles.content}>
        {!isProfileComplete && (
          <ProfileBanner onOpenModal={() => setShowProfileModal(true)} />
        )}

        {/* Hero Card */}
        <motion.div 
          className={styles.mainCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Welcome Back{userName ? `, ${userName}` : ''}!</h1>
          <p>You're currently in your {cycleData.currentPhase}</p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Day of Cycle</div>
              <div className={styles.statValue}>Day {cycleData.cycleDay}</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Phase you are in</div>
              <div className={styles.statValue}>{cycleData.currentPhase}</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statLabel}>Next Period Day</div>
              <div className={styles.statValue}>In {cycleData.nextPeriod} Days</div>
            </div>
          </div>
        </motion.div>

        {/* Action Cards */}
        <div className={styles.actionGrid}>
          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={() => console.log('Exercise Plan clicked')}
          >
            <div className={styles.iconWrapper}>
              <Dumbbell size={24} />
            </div>
            <h3>Exercise Plan</h3>
            <p>Personalized workouts for your cycle</p>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => console.log('Nutrition Guide clicked')}
          >
            <div className={styles.iconWrapper}>
              <Apple size={24} />
            </div>
            <h3>Nutrition Guide</h3>
            <p>Diet tips for your current phase</p>
          </motion.button>

          <motion.button 
            className={styles.actionCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => console.log('PCOS Support clicked')}
          >
            <div className={styles.iconWrapper}>
              <BrainCircuit size={24} />
            </div>
            <h3>PCOS Support</h3>
            <p>Manage PCOS symptoms effectively</p>
          </motion.button>
        </div>

        {/* Recommendations Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Today's Recommendations</h2>
          <div className={styles.recommendationsList}>
            <button className={styles.recommendationCard} onClick={() => console.log('Recommendation 1 clicked')}>
              <div className={styles.recommendationDot}></div>
              <div className={styles.recommendationTitle}>High-intensity workouts are great during this phase</div>
              <div className={styles.recommendationSubtitle}>Try cardio or strength training</div>
            </button>
            <button className={styles.recommendationCard} onClick={() => console.log('Recommendation 2 clicked')}>
              <div className={styles.recommendationDot}></div>
              <div className={styles.recommendationTitle}>Focus on protein-rich foods</div>
              <div className={styles.recommendationSubtitle}>Your body needs extra nutrients now</div>
            </button>
          </div>
        </motion.div>
      </main>

      {showProfileModal && (
        <ProfileCompletionModal 
          onClose={() => setShowProfileModal(false)}
          onComplete={handleProfileComplete}
        />
      )}
    </div>
  );
}
