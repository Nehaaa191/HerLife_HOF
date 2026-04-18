import React from 'react';
import styles from './AuthLayout.module.css';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.container}>
      {/* Left side: Illustration (1/3) */}
      <div className={styles.leftSide}>
        <div className={styles.logoPlaceholder}>
          <span className={styles.logoText}>Her Life</span>
        </div>
        <div className={styles.illustrationWrapper}>
          <div className={styles.illustrationCard}>
            <Image 
              src="/illustration.png" 
              alt="Phases of Life" 
              width={600} 
              height={600} 
              className={styles.illustration}
              priority
            />
          </div>
        </div>
      </div>

      {/* Right side: Content (2/3) */}
      <div className={styles.rightSide}>
        <header className={styles.header}>
          <h1>Her Life</h1>
        </header>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}
