'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import FloatingChat from './FloatingChat';

export default function FloatingChatWrapper() {
  const pathname = usePathname();

  // Do not show the chatbox on the home/login page or the onboarding questions page
  if (pathname === '/' || pathname === '/onboarding') {
    return null;
  }

  return <FloatingChat />;
}
