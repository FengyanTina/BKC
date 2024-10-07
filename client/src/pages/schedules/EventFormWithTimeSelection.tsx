// import React from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
// import { createEventId } from './Events';

// interface EventFormProps {
//   open: boolean;
//   event?: CustomEvent; // Optional because it can be undefined when adding a new event
//   onClose: () => void;
//   onSave: (event: CustomEvent) => void; // Callback for saving the event
// }
// interface CustomEvent {
//     id: string;
//     title: string;
//     start: string;
//     end: string;
//     allDay: boolean;
//     description?: string;
//   }
  
//   interface DemoAppState {
//     weekendsVisible: boolean;
//     currentEvents: CustomEvent[];
//     selectedEvent?: CustomEvent; 
//     isModalOpen: boolean;
//     isEditing: boolean;
//     newEventInfo: { start: string; end: string; allDay: boolean };
//   }

// const EventForm: React.FC<EventFormProps> = ({ open, event, onClose, onSave }) => {
//   const [title, setTitle] = React.useState(event?.title || '');
//   const [description, setDescription] = React.useState(event?.description || '');
  
//   // Optional: If you want to have start and end time inputs, you can also add those
//   // Here we're just handling title and description for simplicity

//   const handleSave = () => {
//     const newEvent: CustomEvent = {
//       id: event ? event.id : createEventId(), // Use existing ID or create a new one
//       title,
//       description,
//       start: event?.start || new Date().toISOString(), // Set default start to now if adding
//       end: event?.end || new Date(new Date().getTime() + 3600000).toISOString(), // Default end time (1 hour later)
//       allDay: event?.allDay || false, // Use existing or default to false
//     };

//     onSave(newEvent);
//     onClose(); // Close the dialog after saving
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>{event ? 'Edit Event' : 'Add Event'}</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="Title"
//           type="text"
//           fullWidth
//           variant="outlined"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <TextField
//           margin="dense"
//           label="Description"
//           type="text"
//           fullWidth
//           variant="outlined"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="primary">
//           Cancel
//         </Button>
//         <Button onClick={handleSave} color="primary">
//           Save
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default EventForm;
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
}

const EventForm: React.FC<EventFormProps> = ({ open, event, onClose, onSave,isEditing }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
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
