"use client";
import { useEffect, useState } from 'react';

export default function Template({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const getLocalStorageItem = (name) => {
    return localStorage.getItem(name);
  }
  
  useEffect(() => {
    document.body.classList.remove('no-js');
    const colorScheme = getLocalStorageItem('forced-color-scheme');
    if (colorScheme) {
      if (colorScheme === 'Dark') {
        document.body.classList.add('dark');
      } else if (colorScheme === 'Light') {
        document.body.classList.remove('dark');
      }
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
      }
    }
  
    setIsAnimating(true);
  }, []);
  

  return (
    <div className={isAnimating ? "content already-animated" : "content not-animated"}>
      {children}
    </div>
  );
}
