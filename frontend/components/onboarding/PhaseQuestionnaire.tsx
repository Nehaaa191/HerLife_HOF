'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import styles from './Onboarding.module.css';
import { PHASE_FLOWS } from './questions';
import { useRouter } from 'next/navigation';

export default function PhaseQuestionnaire({ phase }: { phase: string }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const router = useRouter();

  const currentFlow = PHASE_FLOWS[phase] || [];
  const totalSteps = currentFlow.length;
  const progress = totalSteps > 0 ? ((step + 1) / totalSteps) * 100 : 100;

  useEffect(() => {
    // Load existing answers if available
    const existing = localStorage.getItem('herlife_onboarding');
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        if (parsed.answers) {
          setAnswers(parsed.answers);
        }
      } catch (e) {}
    }
  }, []);

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Save answers and finalize
      const existing = localStorage.getItem('herlife_onboarding');
      let data = { answers };
      if (existing) {
        try {
          data = { ...JSON.parse(existing), answers };
        } catch (e) {}
      }
      localStorage.setItem('herlife_onboarding', JSON.stringify(data));
      
      // Navigate to final landing page for this phase
      router.push(`/dashboard/${phase}`);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      // Go back to phase selection
      router.push('/onboarding');
    }
  };

  const updateAnswer = (qid: string, val: any) => {
    setAnswers({ ...answers, [qid]: val });
  };

  if (!currentFlow || currentFlow.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.question}>Invalid phase selected.</h2>
          <button className={styles.backBtn} onClick={() => router.push('/onboarding')}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    const question = currentFlow[step];
    if (!question) return null;

    return (
      <div className={styles.stepContent}>
        <h2 className={styles.question}>{question.text}</h2>
        
        {question.type === 'select' && (
          <div className={styles.optionsGrid}>
            {question.options?.map((opt) => (
              <button
                key={opt.value}
                className={`${styles.optionBtn} ${answers[question.id] === opt.value ? styles.optionBtnActive : ''}`}
                onClick={() => {
                  updateAnswer(question.id, opt.value);
                  setTimeout(() => handleNext(), 150); // slight delay for visual feedback
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {question.type === 'multi' && (
          <div className={styles.stepContent}>
            <div className={styles.optionsGrid}>
              {question.options?.map((opt) => {
                const currentList = answers[question.id] || [];
                const isActive = currentList.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    className={`${styles.optionBtn} ${isActive ? styles.optionBtnActive : ''}`}
                    onClick={() => {
                      const newList = isActive 
                        ? currentList.filter((v: string) => v !== opt.value)
                        : [...currentList, opt.value];
                      updateAnswer(question.id, newList);
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <button 
              className={styles.nextBtn} 
              onClick={handleNext}
              style={{marginTop: '1.5rem'}}
            >
              Next
            </button>
          </div>
        )}

        {question.type === 'slider' && (
          <div className={styles.sliderContainer}>
            <input 
              type="range" 
              min={question.min} 
              max={question.max} 
              defaultValue={question.defaultValue}
              className={styles.slider}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
            />
            <div className={styles.sliderValue}>
              {answers[question.id] || question.defaultValue}
            </div>
            <button className={styles.nextBtn} onClick={handleNext}>Next</button>
          </div>
        )}

        {question.type === 'date' && (
          <div className={styles.inputGroup}>
            <input 
              type="date" 
              className={styles.inputField}
              value={answers[question.id] || ''}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
            />
            <button 
              className={styles.nextBtn} 
              onClick={handleNext}
              disabled={!answers[question.id]}
              style={{marginTop: '2rem'}}
            >
              Next
            </button>
          </div>
        )}

        {question.type === 'input' && (
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              className={styles.inputField}
              placeholder="Type here..."
              value={answers[question.id] || ''}
              onChange={(e) => updateAnswer(question.id, e.target.value)}
            />
            <button 
              className={styles.nextBtn} 
              onClick={handleNext}
              disabled={!answers[question.id]}
              style={{marginTop: '2rem'}}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
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

        <div className={styles.footer}>
          <button className={styles.backBtn} onClick={handleBack}>
            <ChevronLeft size={20} /> Back
          </button>
        </div>
      </div>
    </div>
  );
}
