// NewsDetailsModal.tsx
import React from 'react';
import './news.css'
import { Box } from '@mui/material';

interface EventProps {
    id: string;
    time: Date;
    title: string;
    image: string;
    description: string;
    details?:string;
  }
  

interface NewsDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventProps| null; // Define your Event type accordingly
}

const NewsDetailsModal: React.FC<NewsDetailsModalProps> = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <Box className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <h1>{event.title}</h1>
        <Box className="new-detail-image">
           <img src={event.image} alt={event.title} />  
        </Box>
        
        <p>{event.description}</p>
        <p>{event.time.toLocaleDateString()} {event.time.toLocaleTimeString()}</p>
      </div>
    </Box>
  );
};

export default NewsDetailsModal;
