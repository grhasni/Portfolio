
import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
}

export function TypewriterText({ words, speed = 100, delay = 1500 }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    
    // Current word being processed
    const currentWord = words[currentWordIndex];
    
    // If typing
    if (!isDeleting && currentText.length < currentWord.length) {
      timeout = window.setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, speed);
    } 
    // If reached the end of the word
    else if (!isDeleting && currentText.length === currentWord.length) {
      // Wait before starting to delete
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } 
    // If deleting
    else if (isDeleting && currentText.length > 0) {
      timeout = window.setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, speed / 2);
    } 
    // If deleted entire word
    else if (isDeleting && currentText.length === 0) {
      setIsDeleting(false);
      // Move to the next word
      setCurrentWordIndex((current) => (current + 1) % words.length);
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="border-r-2 border-primary animate-blink">&nbsp;</span>
    </span>
  );
}
