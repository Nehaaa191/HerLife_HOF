'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Home, 
  Activity, 
  BookOpen, 
  Gamepad2, 
  HelpCircle,
  FlaskConical,
  Star,
  Check,
  X
} from 'lucide-react';
import styles from './PreteenTest.module.css';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How many hours of sleep do preteens need each night?",
    options: ["4-5 hours", "7-8 hours", "9-11 hours", "12-14 hours"],
    answer: 2,
    funFact: "While you sleep, your body does its most important growing and repairing. Your brain needs that rest to process everything you learned during the day! 😴"
  },
  {
    id: 2,
    question: "What do we call the tiny messengers in our body that help us grow?",
    options: ["Vitamins", "Hormones", "Calories", "Blood cells"],
    answer: 1,
    funFact: "Your body is controlled by hormones - they're like tiny messengers in your body that tell different parts what to do! Pretty cool, right? 🧬"
  },
  {
    id: 3,
    question: "Which of these is the BEST way to handle feeling stressed or overwhelmed?",
    options: ["Taking deep breaths and talking to someone", "Ignoring it completely", "Yelling at your friends", "Watching TV all day"],
    answer: 0,
    funFact: "It's totally normal to feel overwhelmed sometimes. Your brain is going through a massive 'update' right now, and talking about your feelings really helps! 🗣️"
  },
  {
    id: 4,
    question: "How many minutes of physical activity should you try to get every day?",
    options: ["10 minutes", "30 minutes", "60 minutes", "120 minutes"],
    answer: 2,
    funFact: "Moving your body for at least 60 minutes a day releases 'happy chemicals' in your brain called endorphins! 🏃‍♀️"
  },
  {
    id: 5,
    question: "Why is it important to eat colorful fruits and vegetables?",
    options: ["Because they look pretty", "To get important vitamins and energy", "So your skin turns colorful", "Because they taste like candy"],
    answer: 1,
    funFact: "Eating a 'rainbow' of foods ensures your body gets all the different vitamins and minerals it needs to grow strong and healthy! 🌈"
  },
  {
    id: 6,
    question: "What should you do if you have a question about changes in your body?",
    options: ["Keep it a secret", "Ask a trusted adult like a parent or doctor", "Make up an answer", "Search random websites only"],
    answer: 1,
    funFact: "You're not alone! Millions of kids go through these changes, and asking questions to a trusted adult is the smartest thing you can do! 💖"
  }
];

export default function PreteenTestPage() {
  const router = useRouter();
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQIndex];

  const handleOptionClick = (idx: number) => {
    if (isAnswered) return;
    
    setSelectedOption(idx);
    setIsAnswered(true);
    
    if (idx === currentQ.answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Heart fill="currentColor" color="#4797B1" size={28} />
          HerLife
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navItem} onClick={() => router.push('/dashboard/preteen')}>
            <Home size={20} /> Home
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/wellness')}>
            <Activity size={20} /> Wellness
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/learn')}>
            <BookOpen size={20} /> Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/play')}>
            <Gamepad2 size={20} /> Play & Learn
          </button>
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <HelpCircle size={20} /> Test It Out
          </button>
        </div>
      </nav>

      <main className={styles.content}>
        
        {!showResults ? (
          <>
            {/* Quiz Card */}
            <div className={`${styles.card} ${styles.quizCard}`}>
              <div className={styles.quizHeader}>
                <div className={styles.quizTitle}>
                  <FlaskConical size={28} color="#4797B1" /> Test Your Knowledge!
                </div>
                <div className={styles.quizStats}>
                  <div>Question {currentQIndex + 1} of {QUIZ_QUESTIONS.length}</div>
                  <div className={styles.score}>Score: {score}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className={styles.progressBarBg}>
                <div 
                  className={styles.progressBarFill} 
                  style={{ width: `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <div className={styles.questionHeader}>
                <div className={styles.questionIcon}>
                  <Star size={20} fill="currentColor" />
                </div>
                <div className={styles.questionText}>
                  {currentQ.question}
                </div>
              </div>

              {/* Options */}
              <div className={styles.optionsList}>
                {currentQ.options.map((opt, idx) => {
                  let btnClass = styles.optionBtn;
                  let icon = null;

                  if (isAnswered) {
                    btnClass += ` ${styles.optionDisabled}`;
                    if (idx === currentQ.answer) {
                      btnClass += ` ${styles.optionCorrect}`;
                      icon = <Check size={20} />;
                    } else if (idx === selectedOption) {
                      btnClass += ` ${styles.optionWrong}`;
                      icon = <X size={20} />;
                    }
                  } else if (selectedOption === idx) {
                    // This shouldn't be visible long because it instantly becomes answered
                  }

                  return (
                    <button 
                      key={idx} 
                      className={btnClass}
                      onClick={() => handleOptionClick(idx)}
                      disabled={isAnswered}
                    >
                      <span>{opt}</span>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <button className={styles.nextBtn} onClick={handleNext}>
                  {currentQIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question →' : 'See Results 🌟'}
                </button>
              )}
            </div>

            {/* Fun Fact Card (Only visible after answering) */}
            {isAnswered && (
              <div className={`${styles.card} ${styles.funFactCard}`}>
                <div className={styles.funFactTitle}>
                  <Star size={20} color="#4797B1" /> Fun Fact!
                </div>
                <div className={styles.funFactText}>
                  {currentQ.funFact}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Results Screen */
          <div className={`${styles.card} ${styles.quizCard}`}>
            <div className={styles.resultsContainer}>
              <div className={styles.resultsIcon}>🎉</div>
              <div className={styles.resultsTitle}>Quiz Complete!</div>
              <div className={styles.resultsScore}>
                You scored <span>{score}</span> out of {QUIZ_QUESTIONS.length}
              </div>
              <p style={{ color: '#4B5563', fontSize: '1.1rem', marginBottom: '2rem' }}>
                {score === 6 
                  ? "Perfect score! You know so much about growing up!" 
                  : "Great job! Learning about your body is a journey."}
              </p>
              <button className={styles.restartBtn} onClick={handleRestart}>
                Try Again 🔄
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
