// NewsDetailsModal.tsx
import { useState } from "react";
import "./news.css";
import { Box, Slider } from "@mui/material";
import formatDateTime from "../../utils/FormatDateTime";

interface EventProps {
  id: string;
  time: Date;
  title: string;
  image: string;
  description: string;
  details?: string;
}

interface NewsDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: EventProps | null; // Define your Event type accordingly
}

export default function NewsDetailsModal({
  isOpen,
  onClose,
  event,
}: NewsDetailsModalProps) {
  if (!isOpen || !event) return null;

  const [fontSize, setFontSize] = useState(16);
  const handleFontSizeChange = (newValue: number | number[]) => {
    setFontSize(newValue as number); // Cast newValue to number
  };

  return (
    <Box className="modal-overlay">
      <Box className="modal-content" style={{ fontSize: `${fontSize}px` }}>
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h1>{event.title}</h1>
        <img src={event.image} alt={event.title} />
        <p>{event.description}</p>
        <p>{formatDateTime(event.time)}</p>
        <Box style={{ marginTop: "20px", textAlign: "center" }}>
          <label htmlFor="font-size-slider">Adjust text size:</label>
          <Slider
            id="font-size-slider"
            min={12}
            max={30}
            value={fontSize}
            onChange={(_e, newValue) => handleFontSizeChange(newValue)}
            style={{ width: "200px", margin: "10px auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
