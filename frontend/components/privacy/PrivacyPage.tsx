'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import styles from '../profile/Profile.module.css'; 

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            <ArrowLeft size={20} />
          </button>
          <div className={styles.title}>Data Privacy</div>
        </div>

        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <ShieldCheck size={20} color="var(--primary)" /> Your Data is Secure
          </div>
          <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1rem' }}>
            At HerLife, we take your privacy incredibly seriously. Any health data you log—from your onboarding questionnaire to your daily wellness logs—is stored securely.
          </p>
          <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
            We do not share your personal health data with third parties. Your data is yours, and you are in full control of it. 
          </p>
        </div>

      </div>
    </div>
  );
}
