
import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { createEventId } from './Events';

interface EventFormProps {
  open: boolean;
  event?: CustomEvent|null; // Optional because it can be undefined when adding a new event
  onClose: () => void;
  onSave: (event: CustomEvent) => void; // Callback for saving the event
  isEditing:boolean;
}

interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?:string;
}

const EventForm: React.FC<EventFormProps> = ({ open, event, onClose, onSave,isEditing }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');
  const [allDay, setAllDay] = React.useState(false);
 

  // Populate fields when event prop changes
  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description || '');
      setStart(event.start);
      setEnd(event.end);
      setAllDay(event.allDay);
    } else {
      // Reset to default for a new event
      setTitle('');
      setDescription('');
      setStart(new Date().toISOString());
      setEnd(new Date(new Date().getTime() + 3600000).toISOString());
      setAllDay(false);
    }
  }, [event]);

  const handleSave = () => {
    const newEvent: CustomEvent = {
      id: event ? event.id : createEventId(), // Use existing ID or create a new one
      title,
      description,
      start,
      end,
      allDay,
      location,
    };

    onSave(newEvent);
    onClose(); // Close the dialog after saving
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{event ? 'Edit Event' : 'Add Event'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
          <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Start"
          type="datetime-local"
          fullWidth
          variant="outlined"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <TextField
          margin="dense"
          label="End"
          type="datetime-local"
          fullWidth
          variant="outlined"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={allDay}
            onChange={(e) => setAllDay(e.target.checked)}
          />
          All Day
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventForm;
