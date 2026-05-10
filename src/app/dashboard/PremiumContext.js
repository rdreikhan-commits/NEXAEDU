'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const PremiumContext = createContext();

export function PremiumProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const saved = localStorage.getItem('nexa_premium');
    if (saved === 'true') {
      setIsPremium(true);
    }
  }, []);

  const upgradeToPremium = () => {
    setIsPremium(true);
    localStorage.setItem('nexa_premium', 'true');
  };

  return (
    <PremiumContext.Provider value={{ isPremium, upgradeToPremium }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  return useContext(PremiumContext);
}
