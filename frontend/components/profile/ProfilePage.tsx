'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UserCircle, Activity } from 'lucide-react';
import styles from './Profile.module.css';
import { PHASE_FLOWS } from '../onboarding/questions';

type ProfileData = {
  userName: string;
  phase: string;
  answers: Record<string, any>;
};

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const localData = localStorage.getItem('herlife_onboarding');
    if (localData) {
      try {
        setData(JSON.parse(localData));
      } catch (e) {
        console.error("Failed to parse profile data");
      }
    }
  }, []);

  if (!data) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>Loading profile...</div>
      </div>
    );
  }

  // Helper to format phase names
  const formatPhase = (phase: string) => {
    const map: Record<string, string> = {
      preteen: 'Pre-Teens',
      young_women: 'Young Women',
      pregnant: 'Pregnant',
      postpartum: 'Postpartum',
      menopause: 'Menopause'
    };
    return map[phase] || phase;
  };

  // Helper to get question text from the question ID
  const getQuestionText = (phase: string, id: string) => {
    const flow = PHASE_FLOWS[phase];
    if (!flow) return id;
    const q = flow.find(q => q.id === id);
    return q ? q.text : id;
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            <ArrowLeft size={20} />
          </button>
          <div className={styles.title}>Your Profile</div>
        </div>

        <div className={styles.card}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>
              {data.userName ? data.userName.charAt(0).toUpperCase() : <UserCircle size={40} />}
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>{data.userName || 'Guest'}</div>
              <div className={styles.userPhase}>Phase: {formatPhase(data.phase)}</div>
            </div>
          </div>

          <div className={styles.sectionTitle}>
            <Activity size={20} color="var(--primary)" /> Your Health Profile
          </div>
          
          <div className={styles.dataGrid}>
            {Object.entries(data.answers).map(([key, value]) => {
              // Handle arrays (e.g. multi-select)
              const displayValue = Array.isArray(value) ? value.join(', ') : String(value);
              
              return (
                <div key={key} className={styles.dataItem}>
                  <div className={styles.dataLabel}>{getQuestionText(data.phase, key)}</div>
                  <div className={styles.dataValue}>{displayValue || 'Not provided'}</div>
                </div>
              );
            })}
            
            {Object.keys(data.answers || {}).length === 0 && (
              <div style={{ color: '#6B7280' }}>No health data recorded yet.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
