import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrayerBible from "../../assets/spiritual-prayer-hands-holding-bible.jpg";
import Mission from "../../assets/Mission.png";
import Varhistoria from "../../assets/Varhistoria.jpg";


const RollingSection = () => {
  const topics = [
    { title: "Topic 1: React Hooks", url: "/react-hooks", backgroundImage: PrayerBible  },
    { title: "Topic 2: JavaScript ES6 Features", url: "/js-es6",backgroundImage: Mission },
    { title: "Topic 3: CSS Grid & Flexbox", url: "/css-grid-flexbox",backgroundImage: PrayerBible   },
    { title: "Topic 4: Understanding Redux", url: "/redux",backgroundImage: Mission },
    { title: "Topic 5: TypeScript with React", url: "/typescript-react",backgroundImage: Varhistoria },
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
      style={{ 
        cursor: "pointer", 
        backgroundImage: `url(${topics[currentIndex].backgroundImage})`,
        backgroundSize: "cover", // Ensure background image covers the entire section
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Do not repeat the background image
        height: "200px", // Adjust the height as needed
        color: "white", // Adjust text color for better contrast
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }} 
    >
      <h3 
      style={{ 
       
      }} >{topics[currentIndex].title}</h3>
    </div>
  );
};

export default RollingSection;
