import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Conference from "../../assets/Conference.jpg";
import Mission from "../../assets/Mission.png";
import Prayer from "../../assets/Prayer.jpg";
import Worship from "../../assets/Worship.jpeg";
import Bible from "../../assets/Bible.jpg";

const RollingSection = () => {
  const topics = [
    { title: " Youtube Video 1", url: "/react-hooks", backgroundImage: Prayer  },
    { title: " Youtube Video 2", url: "/js-es6",backgroundImage: Worship },
    { title: " Youtube Video 3", url: "/css-grid-flexbox",backgroundImage: Bible   },
    { title: " Youtube Video 4", url: "/redux",backgroundImage: Mission },
    { title: " Youtube Video 5", url: "/typescript-react",backgroundImage: Conference },
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
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => handleClick(topics[currentIndex].url)} // Handle click
      style={{ 
        cursor: "pointer", 
        backgroundImage: `url(${topics[currentIndex].backgroundImage})`,
        backgroundSize: "cover", // Ensure background image covers the entire section
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Do not repeat the background image
        width: "100%", // Take full width of the container
        height: "100%", // Take full height of the container
        color: "white", // Adjust text color for better contrast
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow:'hidden',
      }} 
    >    
      {/* <h2 >{topics[currentIndex].title}</h2> */}
    </div>
  );
};

export default RollingSection;
