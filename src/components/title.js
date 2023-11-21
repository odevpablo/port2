import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const originalText = 'Olá, este é o meu portfólio dev.';
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(originalText.slice(0, index));
      index++;

      if (index > originalText.length) {
        clearInterval(intervalId);
      }
    }, 50); 

    return () => clearInterval(intervalId); 
  }, [index, originalText]);

  return (
    <div className="typewriter">
      {text}
    </div>
  );
};

export default TypewriterEffect;
