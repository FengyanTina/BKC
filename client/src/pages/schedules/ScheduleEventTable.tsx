import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import Grid from "@mui/material/Grid2";
// Adjust import based on your utility functions
import { UserCategory } from "../../models/User";
import { formatDate, formatTime } from "../../utils/FormatDateAndTime";
import { Button, Paper } from "@mui/material";
import ConfirmDeleteDialog from "../../components/common/Forms/ConfirmDeleteDialog";
import { useState } from "react";


const saveEventsToLocalStorage = (events: CustomEvent[]) => {
    localStorage.setItem("events", JSON.stringify(events));
  };
interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?: string;
}
// Sidebar Component
const Sidebar = ({
  currentEvents,
  handleEdit,
 handleDelete,

 handleDetailOnTable: handleDetail,
  currentUser,
}: {
  currentEvents: CustomEvent[];
  handleEdit: (event: CustomEvent) => void;
  handleDelete: (event: CustomEvent) => void;
  handleDetailOnTable: (event: CustomEvent) => void;
  currentUser: any; // Adjust type based on your context
}) => {
  const isAdmin = currentUser?.category === UserCategory.Admin;

  const dateColumnSize = isAdmin ? 2 : 2;
  const timeColumnSize = isAdmin ? 2 : 2;
  const titleColumnSize = isAdmin ? 2 : 3;
  const locationColumnSize = isAdmin ? 3 : 3;
  const actionColumnSize = isAdmin ? 3 : 2;
 


  
 // const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);

  



  return (
    <div className="demo-app-sidebar">
      <div className="demo-app-sidebar-section">
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div className="demo-app-sidebar-section">
        <h2>All Events ({currentEvents.length})</h2>
        <Paper elevation={1} style={{ marginBottom: "30px" }}>
          <Grid container spacing={0} style={{ padding: "10px" }}>
            {/* Header Row */}
            <Grid size={dateColumnSize}>
              <strong>Date</strong>
            </Grid>
            <Grid size={timeColumnSize}>
              <strong>Time</strong>
            </Grid>
            <Grid size={titleColumnSize}>
              <strong>Event</strong>
            </Grid>
            <Grid size={locationColumnSize}>
              <strong>Location</strong>
            </Grid>
            
              <Grid size={actionColumnSize}>
                <strong>Action</strong>
              </Grid>
           
          </Grid>
          {/* Event Rows */}
          {currentEvents.map((event) => (
            <SidebarEvent
              key={event.id}
              event={event}
              handleDetail={() => handleDetail(event)} 
              onEdit={isAdmin ? handleEdit : null}
              onDelete={isAdmin ? handleDelete : null}
            />
          ))}
        </Paper>
        
      </div>
    </div>
  );
};

// SidebarEvent Component
const SidebarEvent = ({
  event,
  onEdit,
  onDelete,
  handleDetail,
}: {
  event: CustomEvent;
  onEdit: ((event: CustomEvent) => void) | null;
  onDelete: ((event: CustomEvent) => void) | null;
  handleDetail: (event: CustomEvent) => void;
}) => {
  const hasActionColumn = !!(onEdit || onDelete); // Check if action buttons exist
  const dateColumnSize = hasActionColumn ? 2 : 2;
  const timeColumnSize = hasActionColumn ? 2 : 2;
  const titleColumnSize = hasActionColumn ? 2 : 3;
  const locationColumnSize = hasActionColumn ? 3 : 3;
  const actionColumnSize = hasActionColumn ? 3 : 2;

  return (
    <Grid
      container
      key={event.id}
      style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
    >
      <Grid size={dateColumnSize} style={{ textAlign: "left" }}>
        
        {event.start ? formatDate(event.start) : 'Invalid date'}
      </Grid>
      <Grid size={timeColumnSize} style={{ textAlign: "left" }}>
      {event.start && event.end
      ? `${formatTime(event.start)} - ${formatTime(event.end)}`
      : 'Invalid time'}
      </Grid>
      <Grid size={titleColumnSize} style={{ textAlign: "left" }}>
        {event.title}
      </Grid>
      <Grid size={locationColumnSize} style={{ textAlign: "left" }}>
        {event.location}
      </Grid>
      <Grid size={actionColumnSize} style={{ textAlign: "left" }}>
      <Button onClick={() => handleDetail(event)} variant="outlined" style={{ marginRight: "5px" }}>
          Detail
        </Button>
        {onEdit && (
          <Button
            onClick={() => onEdit(event)}
            variant="outlined"
            style={{ marginRight: "5px" }}
          >
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            onClick={() => onDelete(event)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
