'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Settings } from 'lucide-react';
import styles from '../profile/Profile.module.css'; // Reusing profile styles for consistency

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            <ArrowLeft size={20} />
          </button>
          <div className={styles.title}>Settings</div>
        </div>

        <div className={styles.card}>
          <div className={styles.sectionTitle}>
            <Settings size={20} color="var(--primary)" /> Account Settings
          </div>
          <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
            Settings functionality is coming soon! You'll be able to update your notification preferences, theme options, and account details here.
          </p>
        </div>

      </div>
    </div>
  );
}
