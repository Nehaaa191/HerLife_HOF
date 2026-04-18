'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import styles from './Onboarding.module.css';
import { PHASES } from './questions';
import { useRouter } from 'next/navigation';

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  // Step 0: Name
  // Step 1: Phase Selection
  
  const totalSteps = 2;
  const progress = ((step + 1) / totalSteps) * 100;

  useEffect(() => {
    // Load name if already set
    const existing = localStorage.getItem('herlife_onboarding');
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        if (parsed.userName) setUserName(parsed.userName);
      } catch(e) {}
    }
  }, []);

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handlePhaseSelection = (phaseValue: string) => {
    // Save state
    const existing = localStorage.getItem('herlife_onboarding');
    let data = { userName, selectedPhase: phaseValue, answers: {} };
    if (existing) {
      try {
        data = { ...JSON.parse(existing), userName, selectedPhase: phaseValue };
      } catch(e) {}
    }
    localStorage.setItem('herlife_onboarding', JSON.stringify(data));
    
    // Navigate to phase questionnaire
    router.push(`/onboarding/${phaseValue}`);
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <div className={styles.stepContent}>
          <h2 className={styles.question}>What should we call you?</h2>
          <input 
            type="text" 
            className={styles.inputField} 
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoFocus
          />
          <button 
            className={styles.nextBtn} 
            onClick={handleNext}
            disabled={!userName.trim()}
          >
            Next
          </button>
        </div>
      );
    }

    if (step === 1) {
      return (
        <div className={styles.stepContent}>
          <h2 className={styles.question}>Which phase of life are you in?</h2>
          <div className={styles.optionsGrid}>
            {PHASES.map((phase) => (
              <button
                key={phase.value}
                className={styles.optionBtn}
                onClick={() => handlePhaseSelection(phase.value)}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {step > 0 && (
          <div className={styles.footer}>
            <button className={styles.backBtn} onClick={handleBack}>
              <ChevronLeft size={20} /> Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
