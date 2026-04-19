'use client';

import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import styles from './ProfileCompletionModal.module.css';

interface ProfileCompletionModalProps {
  onClose: () => void;
  onComplete: (data: any) => void;
}

export default function ProfileCompletionModal({ onClose, onComplete }: ProfileCompletionModalProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'exercise',
      text: 'How often do you exercise?',
      options: ['Never', 'Sometimes', 'Regularly']
    },
    {
      id: 'sleep',
      text: 'How long do you usually sleep?',
      options: ['Less than 5hrs', '5-7hrs', '7-9hrs', 'More than 9hrs']
    },
    {
      id: 'junk',
      text: 'How often do you eat junk food?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Daily']
    },
    {
      id: 'sugar',
      text: 'How often do you consume sugar?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Daily']
    },
    {
      id: 'caffeine',
      text: 'How often do you drink caffeine?',
      options: ['Never', 'Rarely', 'Sometimes', 'Daily']
    },
    {
      id: 'water',
      text: 'How much water do you drink daily?',
      options: ['Less than 1L', '1-2L', '2-3L', 'More than 3L']
    }
  ];

  const handleSelect = (qId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const isComplete = questions.every(q => answers[q.id]);

  const handleSubmit = () => {
    if (isComplete) {
      onComplete(answers);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.modalHeader}>
          <h2><Sparkles size={24} color="var(--primary)" /> Complete Your Profile</h2>
          <p>Help us personalize your health insights with a few more details.</p>
        </div>

        <div className={styles.questionSection}>
          {questions.map(q => (
            <div key={q.id} className={styles.questionItem}>
              <div className={styles.questionText}>{q.text}</div>
              <div className={styles.optionsGrid}>
                {q.options.map(opt => (
                  <button
                    key={opt}
                    className={`${styles.optionBtn} ${answers[q.id] === opt ? styles.optionBtnActive : ''}`}
                    onClick={() => handleSelect(q.id, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button 
          className={styles.submitBtn} 
          disabled={!isComplete}
          onClick={handleSubmit}
        >
          Finish & Unlock Insights
        </button>
      </div>
    </div>
  );
}
