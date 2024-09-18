// NewsDetailsModal.tsx
import React from 'react';
import './news.css'

interface EventProps {
    id: string;
    time: Date;
    title: string;
    image: string;
    description: string;
  }
  

interface NewsDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventProps| null; // Define your Event type accordingly
}

const NewsDetailsModal: React.FC<NewsDetailsModalProps> = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <h1>{event.title}</h1>
        <img src={event.image} alt={event.title} />
        <p>{event.description}</p>
        <p>{event.time.toLocaleDateString()} {event.time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default NewsDetailsModal;
