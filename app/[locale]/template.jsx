"use client";
import { useEffect, useState } from 'react';
import styles from '../animation.module.css';

export default function Template({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  useEffect(() => {
    document.body.classList.remove('no-js');

    const colorScheme = getCookie('forced-color-scheme');
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
    <div className={`${styles.container} ${isAnimating ? styles.animate : ''}`}>
      {children}
    </div>
  );
}
