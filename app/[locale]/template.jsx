"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Template({ children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const getLocalStorageItem = (name) => {
    return localStorage.getItem(name);
  };

  const setScheme = (scheme) => {
    if (scheme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.body.classList.remove("no-js");
    const colorScheme = getLocalStorageItem("forced-color-scheme");
    if (colorScheme) {
      if (colorScheme === "Dark") {
        setScheme("dark");
      } else if (colorScheme === "Light") {
        setScheme("light");
      }
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        setScheme("light");
      }
    }

    setIsAnimating(true);
  }, []);

  return (
    <div
      className={
        isAnimating ? "content already-animated" : "content not-animated"
      }
    >
      {children}
    </div>
  );
}
