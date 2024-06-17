"use client";
import { useEffect, useState } from 'react';
import styles from '../animation.module.css';
export default function Template({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
  }, []);
  return (
    <div className={`${styles.container} ${isAnimating ? styles.animate : ''}`}>
      {children}
    </div>
  );
}