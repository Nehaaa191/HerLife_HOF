'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import styles from './Onboarding.module.css';
import { PHASES, PHASE_FLOWS, Question } from './questions';
import { useRouter } from 'next/navigation';

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const router = useRouter();

  // Step definition:
  // 0: Name
  // 1: Phase Selection
  // 2+: Dynamic phase questions
  
  const currentFlow = selectedPhase ? PHASE_FLOWS[selectedPhase] : [];
  const totalSteps = 2 + currentFlow.length;
  const progress = ((step + 1) / totalSteps) * 100;

  useEffect(() => {
    // Save to local storage for persistence
    localStorage.setItem('herlife_onboarding', JSON.stringify({ userName, selectedPhase, answers }));
  }, [userName, selectedPhase, answers]);

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      // Final step: Go to welcome
      router.push('/welcome');
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const updateAnswer = (qid: string, val: any) => {
    setAnswers({ ...answers, [qid]: val });
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
                className={`${styles.optionBtn} ${selectedPhase === phase.value ? styles.optionBtnActive : ''}`}
                onClick={() => {
                  setSelectedPhase(phase.value);
                  handleNext();
                }}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Dynamic Steps
    const currentQuestionIndex = step - 2;
    const question = currentFlow[currentQuestionIndex];

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
                  handleNext();
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {question.type === 'multi' && (
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
            <button className={styles.nextBtn} onClick={handleNext}>Continue</button>
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
