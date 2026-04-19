'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import styles from './FloatingChat.module.css';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi! I'm HerLife AI. I'm here to support you with personalized suggestions. How are you feeling today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Create a ref for the drag constraints so it doesn't leave the screen
  const dragConstraintsRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isThinking]);

  const handleSend = () => {
    if (!inputValue.trim() || isThinking) return;

    const userText = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setInputValue('');
    setIsThinking(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      let aiResponse = "I hear you! It's completely normal to feel that way. Make sure you're drinking plenty of water and taking time to rest today. Do you have any specific questions about what you're experiencing?";
      
      // Simple keyword matching for a slightly more personalized fake response
      const lowerText = userText.toLowerCase();
      if (lowerText.includes('cramp') || lowerText.includes('pain')) {
        aiResponse = "I'm sorry you're dealing with cramps! A warm heating pad or a gentle walk can sometimes help ease the pain. Would you like me to suggest some light stretches?";
      } else if (lowerText.includes('tired') || lowerText.includes('sleep')) {
        aiResponse = "Feeling tired is your body's way of asking for rest. Try to get 8-10 hours of sleep tonight and avoid screens right before bed. Want some tips on improving your sleep?";
      } else if (lowerText.includes('thank')) {
        aiResponse = "You're very welcome! I'm always here if you need to talk or have more questions. 💕";
      }

      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
      setIsThinking(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.draggableContainer} ref={dragConstraintsRef}>
      <motion.div
        drag
        dragConstraints={{ top: -800, left: -1000, right: 0, bottom: 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', touchAction: 'none' }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={styles.chatWindow}
            >
              {/* Header (Drag Handle) */}
              <div className={styles.chatHeader}>
                <div className={styles.headerTitle}>
                  <Bot size={20} /> HerLife AI
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)} title="Close Chat">
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div className={styles.messagesContainer}>
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.messageRow} ${msg.role === 'user' ? styles.messageRowUser : styles.messageRowAi}`}
                  >
                    <div className={`${styles.bubble} ${msg.role === 'user' ? styles.bubbleUser : styles.bubbleAi}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                
                {isThinking && (
                  <div className={`${styles.messageRow} ${styles.messageRowAi}`}>
                    <div className={`${styles.bubble} ${styles.bubbleAi} ${styles.thinkingBubble}`}>
                      <div className={styles.dot}></div>
                      <div className={styles.dot}></div>
                      <div className={styles.dot}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className={styles.inputArea}>
                <input 
                  type="text" 
                  className={styles.inputField} 
                  placeholder="Ask me anything..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isThinking}
                />
                <button 
                  className={styles.sendBtn} 
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isThinking}
                  title="Send"
                >
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <button 
          className={styles.floatingBtn}
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? "Close Chat" : "Open Chat"}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>

      </motion.div>
    </div>
  );
}
