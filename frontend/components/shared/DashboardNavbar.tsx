'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Calendar, 
  Activity, 
  BookOpen,
  ClipboardList,
  Smile,
  Dumbbell,
  Apple,
  BrainCircuit,
  Gamepad2,
  HelpCircle
} from 'lucide-react';
import styles from './DashboardNavbar.module.css';
import UserMenu from './UserMenu';

interface DashboardNavbarProps {
  activeTab?: string;
}

export default function DashboardNavbar({ activeTab }: DashboardNavbarProps) {
  const router = useRouter();
  const [phase, setPhase] = useState('young_women');

  useEffect(() => {
    const data = localStorage.getItem('herlife_onboarding');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (parsed.phase) {
          setPhase(parsed.phase);
        }
      } catch (e) {}
    }
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const renderLinks = () => {
    switch(phase) {
      case 'preteen':
        return (
          <>
            <button className={`${styles.navItem} ${activeTab === 'home' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/dashboard/preteen')}><Home size={20} /> Home</button>
            <button className={`${styles.navItem} ${activeTab === 'wellness' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/preteen/wellness')}><Activity size={20} /> Wellness</button>
            <button className={`${styles.navItem} ${activeTab === 'learn' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/preteen/learn')}><BookOpen size={20} /> Learn</button>
            <button className={`${styles.navItem} ${activeTab === 'play' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/preteen/play')}><Gamepad2 size={20} /> Play</button>
            <button className={`${styles.navItem} ${activeTab === 'test' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/preteen/test')}><HelpCircle size={20} /> Test</button>
          </>
        );
      case 'pregnant':
        return (
          <>
            <button className={`${styles.navItem} ${activeTab === 'home' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/dashboard/pregnant')}><Home size={20} /> Home</button>
            <button className={`${styles.navItem} ${activeTab === 'nutrition' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/pregnant/nutrition')}><Apple size={20} /> Nutrition</button>
            <button className={`${styles.navItem} ${activeTab === 'exercise' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/pregnant/exercise')}><Dumbbell size={20} /> Exercise</button>
            <button className={`${styles.navItem} ${activeTab === 'learn' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/pregnant/learn')}><BookOpen size={20} /> Learn</button>
            <button className={`${styles.navItem} ${activeTab === 'log' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/pregnant/log')}><ClipboardList size={20} /> Daily Log</button>
          </>
        );
      case 'postpartum':
        return (
          <>
            <button className={`${styles.navItem} ${activeTab === 'home' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/dashboard/postpartum')}><Home size={20} /> Home</button>
            <button className={`${styles.navItem} ${activeTab === 'wellness' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/postpartum/wellness')}><Activity size={20} /> Wellness</button>
            <button className={`${styles.navItem} ${activeTab === 'learn' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/postpartum/learn')}><BookOpen size={20} /> Learn</button>
            <button className={`${styles.navItem} ${activeTab === 'log' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/postpartum/log')}><ClipboardList size={20} /> Daily Log</button>
            <button className={`${styles.navItem} ${activeTab === 'mental-health' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/postpartum/mental-health')}><Heart size={20} /> Mental Health</button>
          </>
        );
      case 'menopause':
        return (
          <>
            <button className={`${styles.navItem} ${activeTab === 'home' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/dashboard/menopause')}><Home size={20} /> Home</button>
            <button className={`${styles.navItem} ${activeTab === 'nutrition' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/menopause/nutrition')}><Apple size={20} /> Nutrition</button>
            <button className={`${styles.navItem} ${activeTab === 'exercise' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/menopause/exercise')}><Dumbbell size={20} /> Exercise</button>
            <button className={`${styles.navItem} ${activeTab === 'mental-health' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/menopause/mental-health')}><BrainCircuit size={20} /> Mental Health</button>
            <button className={`${styles.navItem} ${activeTab === 'learn' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/menopause/learn')}><BookOpen size={20} /> Learn</button>
          </>
        );
      default: // young_women
        return (
          <>
            <button className={`${styles.navItem} ${activeTab === 'home' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/dashboard/young_women')}><Home size={20} /> Home</button>
            <button className={`${styles.navItem} ${activeTab === 'tracker' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/tracker')}><Calendar size={20} /> Tracker</button>
            <button className={`${styles.navItem} ${activeTab === 'wellness' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/wellness')}><Activity size={20} /> Wellness</button>
            <button className={`${styles.navItem} ${activeTab === 'log' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/daily-log')}><ClipboardList size={20} /> Daily Log</button>
            <button className={`${styles.navItem} ${activeTab === 'pcos' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/pcos')}><Heart size={20} /> PCOS Support</button>
            <button className={`${styles.navItem} ${activeTab === 'learn' ? styles.navItemActive : ''}`} onClick={() => navigateTo('/learn')}><BookOpen size={20} /> Learn</button>
          </>
        );
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigateTo(`/dashboard/${phase}`)} style={{cursor: 'pointer'}}>
        <Heart fill="var(--primary)" color="var(--primary)" size={28} />
        HerLife
      </div>
      
      <div className={styles.navLinks}>
        {renderLinks()}
      </div>

      <UserMenu />
    </nav>
  );
}
