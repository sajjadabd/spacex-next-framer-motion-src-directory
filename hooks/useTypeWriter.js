import { useState, useEffect } from 'react';

const useTypewriter = (initialText, typingSpeed = 100, inView = false , delay = 1000 ) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [startAnimation , setStartAnimation] = useState(false);

  useEffect(() => {
    let delayTimer;

    if(inView && !startAnimation) {
      delayTimer = setTimeout(() => {
        setStartAnimation(true);
      }, delay);
      return;
    }

    if (!inView && !startAnimation) return;
    
    const typingInterval = setInterval(() => {
      if( currentIndex == initialText.length ) {
        setDisplayText(initialText);
      } else if (currentIndex < initialText.length ) {
        const newText =
          initialText.slice(0, currentIndex + 1) +
          getRandomChar() ;
        setDisplayText(newText);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(delayTimer);
    }
  }, [currentIndex, initialText, typingSpeed , inView , startAnimation ]);

  const getRandomChar = () => {
    const characters =
      '78!@#$%^&*()-_=+[]{}|;:,.<>?';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  return displayText;
};

export default useTypewriter;