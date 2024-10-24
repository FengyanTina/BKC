// EventFormModal.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

interface EventFormProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  selectedEvent: CustomEvent | null;
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEvent: () => void;

  event?: CustomEvent; // Optional because it can be undefined when adding a new event

  isEditing: boolean;
}

interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?: string;
  repeatCount?: number; // Number of times to repeat
  selectedDays?: boolean[];
}
const EventAddAndEditForm = ({
  isModalOpen,
  handleCloseModal,
  selectedEvent,
  isEditing,
  handleFieldChange,
  handleSaveEvent,
}: EventFormProps) => {
  return (
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
      <DialogTitle>{isEditing ? "Add New Event" : "Event Details"}</DialogTitle>
      <DialogContent>
        {selectedEvent && (
          <div>
            <TextField
              label="Title"
              name="title"
              value={selectedEvent.title}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              disabled={!isEditing} // Disable in view mode
            />
            <TextField
              label="Description"
              name="description"
              value={selectedEvent.description || ""}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              disabled={!isEditing} // Disable in view mode
            />
            <TextField
              label="Location"
              name="location"
              value={selectedEvent.location || ""}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              disabled={!isEditing} // Disable in view mode
            />
             <TextField
              label="Repeat Count"
              name="repeatCount"
              type="number"
              value={selectedEvent.repeatCount || 1}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              disabled={!isEditing} // Disable in view mode
            />
            <div>
              <p>Select days for weekly repeat:</p>
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                 <FormControlLabel
                 key={index}
                 control={
                   <Checkbox
                     checked={selectedEvent.selectedDays ? !!selectedEvent.selectedDays[index] : false} // Ensure boolean is used here
                     onChange={(e) => {
                       handleFieldChange({
                         ...e,
                         target: {
                           ...e.target,
                           name: `day_${index}`,
                           checked: e.target.checked,
                         },
                       });
                     }}
                     disabled={!isEditing} // Disable in view mode
                   />
                 }
                 label={day}
               />
              ))}
            </div>
            <Button
              onClick={handleSaveEvent}
              color="primary"
              variant="contained"
              style={{ marginTop: "16px", marginRight: "10px" }}
            >
              Save Event
            </Button>

            <Button
              onClick={handleCloseModal}
              color="primary"
              variant="contained"
              style={{ marginTop: "16px" }}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventAddAndEditForm;
