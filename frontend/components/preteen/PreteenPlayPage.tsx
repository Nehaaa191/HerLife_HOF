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
  Trophy
} from 'lucide-react';
import styles from './PreteenPlay.module.css';
import UserMenu from '../shared/UserMenu';

const GAME_LEVELS = [
  {
    id: 1,
    title: "What are Hormones?",
    icon: "🧬",
    lesson: "Hormones are like tiny messengers in your body! They travel through your blood and tell different parts of your body what to do. As you grow up, new hormones start sending messages to help you get taller, stronger, and develop into an adult.",
    question: "What do hormones act like in your body?",
    options: ["Tiny robots", "Tiny messengers", "Tiny aliens", "Tiny tools"],
    answer: 1
  },
  {
    id: 2,
    title: "Feelings & Emotions",
    icon: "🎢",
    lesson: "Growing up means your brain is changing too! Sometimes those hormone messengers can make your feelings go up and down like a roller coaster. It's totally normal to feel happy one minute and frustrated the next. Talking to someone helps!",
    question: "Why might your feelings change a lot while growing up?",
    options: ["Because you eat too much sugar", "Because of body changes and hormones", "Because of the weather", "Because you need new shoes"],
    answer: 1
  },
  {
    id: 3,
    title: "Healthy Habits",
    icon: "🍎",
    lesson: "Your body needs lots of good fuel to grow. Eating colorful fruits and vegetables gives you vitamins. Drinking plenty of water keeps you hydrated, and limiting super sugary snacks helps keep your energy steady all day long!",
    question: "Which of these is the BEST fuel for your growing body?",
    options: ["Soda and candy", "Colorful fruits and vegetables", "Only potato chips", "Just water, no food"],
    answer: 1
  },
  {
    id: 4,
    title: "Making Friends",
    icon: "🤝",
    lesson: "As you get older, friendships might change. It's important to surround yourself with friends who make you feel good about yourself, listen to you, and respect your boundaries. It's also okay if you drift apart from old friends—that's a normal part of growing up!",
    question: "What makes a good friend?",
    options: ["Someone who buys you things", "Someone who makes you do things you don't want to", "Someone who respects you and listens to you", "Someone who always agrees with you"],
    answer: 2
  },
  {
    id: 5,
    title: "Dealing with Changes",
    icon: "🧘‍♀️",
    lesson: "Changes can be scary, whether it's body changes, moving to a new school, or new rules at home. Taking deep breaths, writing in a journal, and focusing on the things you CAN control can make dealing with changes much easier.",
    question: "What is a healthy way to deal with changes?",
    options: ["Taking deep breaths or writing in a journal", "Pretending nothing is changing", "Yelling at everyone", "Hiding under your bed forever"],
    answer: 0
  },
  {
    id: 6,
    title: "Your Amazing Brain",
    icon: "🧠",
    lesson: "Did you know your brain is doing a massive 'update' right now? Just like a phone downloading new software, your brain is rewiring itself to learn more complex things, solve harder problems, and understand other people's feelings better!",
    question: "What is your brain doing during the preteen years?",
    options: ["Shrinking", "Taking a long nap", "Rewiring and 'updating' itself", "Turning to mush"],
    answer: 2
  },
  {
    id: 7,
    title: "Staying Active",
    icon: "🏃‍♀️",
    lesson: "Exercise isn't just for athletes! Moving your body for at least 60 minutes a day makes your bones stronger, your heart healthier, and actually releases 'happy chemicals' in your brain called endorphins.",
    question: "What are the 'happy chemicals' released during exercise called?",
    options: ["Endorphins", "Sugar cubes", "Sleepy-dust", "Tears"],
    answer: 0
  },
  {
    id: 8,
    title: "Sleep is Super",
    icon: "😴",
    lesson: "While you sleep, your body does its most important growing and repairing. Preteens need about 9-11 hours of sleep every night. Keeping screens out of your bedroom helps your brain know it's time to rest.",
    question: "How many hours of sleep do preteens need each night?",
    options: ["4-5 hours", "24 hours", "9-11 hours", "7-8 hours"],
    answer: 2
  },
  {
    id: 9,
    title: "Discovering You",
    icon: "🌟",
    lesson: "This is the time when you start figuring out who YOU are. What are your hobbies? What do you care about? It's the perfect time to try new clubs, read different kinds of books, and explore your own unique talents.",
    question: "What is a great way to discover your interests?",
    options: ["Only doing what your parents do", "Trying new hobbies and clubs", "Staring at a wall", "Never changing your mind"],
    answer: 1
  },
  {
    id: 10,
    title: "You're Amazing!",
    icon: "🚀",
    lesson: "You've learned so much! Always remember that there is no one else exactly like you in the whole world. Be proud of the person you are becoming, and never be afraid to ask for help when you need it.",
    question: "What is the most important thing to remember?",
    options: ["You must be perfect", "You are amazing just the way you are", "You shouldn't ask for help", "Growing up is impossible"],
    answer: 1
  }
];

export default function PreteenPlayPage() {
  const router = useRouter();
  
  const [unlockedLevels, setUnlockedLevels] = useState(1);
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [gameStep, setGameStep] = useState<'lesson' | 'quiz' | 'result'>('lesson');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleLevelClick = (id: number) => {
    if (id <= unlockedLevels) {
      setActiveLevel(id);
      setGameStep('lesson');
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const currentLevelData = activeLevel ? GAME_LEVELS.find(l => l.id === activeLevel) : null;

  const handleOptionClick = (idx: number) => {
    if (isCorrect) return; // already answered correctly
    setSelectedOption(idx);
    
    if (idx === currentLevelData?.answer) {
      setIsCorrect(true);
      setTimeout(() => {
        setGameStep('result');
        if (activeLevel === unlockedLevels && unlockedLevels < 10) {
          setUnlockedLevels(prev => prev + 1);
        }
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  const handleCloseModal = () => {
    setActiveLevel(null);
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
          <button className={`${styles.navItem} ${styles.navItemActive}`} onClick={() => {}}>
            <Gamepad2 size={20} /> Play & Learn
          </button>
          <button className={styles.navItem} onClick={() => router.push('/preteen/test')}>
            <HelpCircle size={20} /> Test It Out
          </button>
          <UserMenu />
        </div>
      </nav>

      <main className={styles.content}>
        
        {/* Hero Card */}
        <div className={`${styles.card} ${styles.heroCard}`}>
          <div className={styles.heroTitle}>
            <Gamepad2 size={32} /> Play & Learn!
          </div>
          <div className={styles.heroDesc}>
            Complete levels to learn all about growing up! Answer questions correctly to unlock the next level.
          </div>
          <div className={styles.progressText}>
            <Trophy size={24} color="#FDE047" /> Progress: {unlockedLevels - 1}/10 levels completed!
          </div>
        </div>

        {/* Level Map */}
        <div className={`${styles.card} ${styles.cardBlueBorder}`}>
          <div className={styles.mapTitle}>Choose Your Level!</div>
          
          <div className={styles.levelGrid}>
            {GAME_LEVELS.map(level => {
              const isUnlocked = level.id <= unlockedLevels;
              return (
                <div key={level.id} className={styles.levelItem}>
                  <div 
                    className={`${styles.levelCircle} ${isUnlocked ? styles.levelUnlocked : styles.levelLocked}`}
                    onClick={() => handleLevelClick(level.id)}
                  >
                    {isUnlocked ? level.icon : "🔒"}
                  </div>
                  <div className={styles.levelLabel}>Level {level.id}</div>
                  <div className={styles.levelTitle}>{level.title}</div>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      {/* Game Modal */}
      {activeLevel && currentLevelData && (
        <div className={styles.gameModalOverlay}>
          <div className={styles.gameModal}>
            <button className={styles.closeBtn} onClick={handleCloseModal}>&times;</button>
            
            <div className={styles.gameHeader}>
              <span>{currentLevelData.icon}</span> Level {currentLevelData.id}: {currentLevelData.title}
            </div>

            {gameStep === 'lesson' && (
              <div>
                <div className={styles.lessonBox}>
                  {currentLevelData.lesson}
                </div>
                <button className={styles.actionBtn} onClick={() => setGameStep('quiz')}>
                  I'm ready! Take the Quiz 🚀
                </button>
              </div>
            )}

            {gameStep === 'quiz' && (
              <div>
                <div className={styles.quizQuestion}>{currentLevelData.question}</div>
                <div className={styles.optionsGrid}>
                  {currentLevelData.options.map((opt, idx) => {
                    let optionClass = styles.optionBtn;
                    if (selectedOption === idx) {
                      if (isCorrect === true) optionClass = `${styles.optionBtn} ${styles.optionCorrect}`;
                      if (isCorrect === false) optionClass = `${styles.optionBtn} ${styles.optionWrong}`;
                    }
                    return (
                      <button 
                        key={idx} 
                        className={optionClass}
                        onClick={() => handleOptionClick(idx)}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                
                {isCorrect === false && (
                  <div className={`${styles.feedbackBox} ${styles.feedbackWrong}`}>
                    Oops! That's not quite right. Try another answer!
                  </div>
                )}
                {isCorrect === true && (
                  <div className={`${styles.feedbackBox} ${styles.feedbackCorrect}`}>
                    Great job! That's correct! 🎉
                  </div>
                )}
              </div>
            )}

            {gameStep === 'result' && (
              <div style={{ textAlign: 'center' }}>
                <div className={styles.successIcon}>🏆</div>
                <div className={styles.quizQuestion}>Level {currentLevelData.id} Complete!</div>
                <div style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4B5563' }}>
                  You did a fantastic job learning about {currentLevelData.title}.
                </div>
                <button className={styles.actionBtn} onClick={handleCloseModal}>
                  Return to Map
                </button>
              </div>
            )}
            
          </div>
        </div>
      )}

    </div>
  );
}
