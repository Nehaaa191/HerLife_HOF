'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import styles from './ProfileBanner.module.css';

interface ProfileBannerProps {
  onOpenModal: () => void;
}

export default function ProfileBanner({ onOpenModal }: ProfileBannerProps) {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.iconCircle}>
          <Sparkles size={24} color="#E11D48" fill="#E11D48" />
        </div>
        <div className={styles.textGroup}>
          <h3>Complete Your Profile</h3>
          <p>Tell us a bit more about your lifestyle to unlock personalized health insights.</p>
        </div>
      </div>
      <button className={styles.completeBtn} onClick={onOpenModal}>
        Let's Do It <ArrowRight size={18} />
      </button>
    </div>
  );
}
