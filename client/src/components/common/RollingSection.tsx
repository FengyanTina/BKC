import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const RollingSection = () => {
  const topics = [
    { title: "Topic 1: React Hooks", url: "/react-hooks" },
    { title: "Topic 2: JavaScript ES6 Features", url: "/js-es6" },
    { title: "Topic 3: CSS Grid & Flexbox", url: "/css-grid-flexbox" },
    { title: "Topic 4: Understanding Redux", url: "/redux" },
    { title: "Topic 5: TypeScript with React", url: "/typescript-react" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const changeTopic = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        changeTopic();
      }, 3000); // 30 seconds interval

      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex, topics.length]);

  // Function to handle the click
  const handleClick = (url: string) => {
    navigate(url); // Use navigate from React Router
  };

  return (
    <div
      className="rolling-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => handleClick(topics[currentIndex].url)} // Handle click
      style={{ cursor: "pointer" }} // Change cursor to pointer
    >
      <h1>{topics[currentIndex].title}</h1>
    </div>
  );
};

export default RollingSection;
