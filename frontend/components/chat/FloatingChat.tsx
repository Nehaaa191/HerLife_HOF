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

  const handleSend = async () => {
    if (!inputValue.trim() || isThinking) return;

    const userText = inputValue.trim();
    const newMessages = [...messages, { role: 'user' as const, content: userText }];
    setMessages(newMessages);
    setInputValue('');
    setIsThinking(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: "I'm having trouble connecting right now. Please try again later." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Something went wrong. Please check your connection." }]);
    } finally {
      setIsThinking(false);
    }
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
                <div className={styles.headerTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img 
                    src="/chatbot_avatar.png" 
                    alt="HerLife AI Avatar" 
                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                  HerLife AI
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
