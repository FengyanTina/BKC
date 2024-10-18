import { EventInput } from "@fullcalendar/core";
import React from "react";
import {
  EventApi,
  EventClickArg,
  EventContentArg,
  EventChangeArg,
  EventRemoveArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import svLocale from "@fullcalendar/core/locales/sv"; // Swedish locale
import Grid from "@mui/material/Grid2";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import EventAddAndEditForm from "./EventAddAndEditForm";
import "./schedule.css"
import { AuthContext, AuthContextType, } from "../../context/AuthContext";
import {  UserCategory } from "../../models/User";

// Custom event interface
interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
}

interface DemoAppState {
  weekendsVisible: boolean;
  currentEvents: CustomEvent[];
  selectedEvent: CustomEvent | null;
  isModalOpen: boolean;
  isDetailModalOpen: boolean;
  isEditing: boolean;
  newEventInfo: { start: string; end: string; allDay: boolean };
  isConfirmDeleteOpen: boolean;
}
const getStoredEvents = (): CustomEvent[] => {
  const storedEvents = localStorage.getItem("calendarEvents");
  return storedEvents ? JSON.parse(storedEvents) : [];
};

const saveEventsToLocalStorage = (events: CustomEvent[]) => {
  localStorage.setItem("calendarEvents", JSON.stringify(events));
};

export default class EventsCalendar extends React.Component<{}, DemoAppState> {
    static contextType = AuthContext; // Set context type
    declare context: AuthContextType;
  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: getStoredEvents(), // Load from localStorage
    selectedEvent: null, // Track the clicked event
    isModalOpen: false, // Modal state
    isDetailModalOpen: false,
    isEditing: false,
    newEventInfo: { start: "", end: "", allDay: false },
    isConfirmDeleteOpen: false,
  };
  handleEventClick = (clickInfo: EventClickArg) => {
    const selectedEvent = this.state.currentEvents.find(
      (event) => event.id === clickInfo.event.id
    );

    if (selectedEvent) {
      this.setState({
        selectedEvent, // Set the clicked event
        isDetailModalOpen: true, // Open the modal
      });
    }
  };
  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
      isDetailModalOpen: false,
      selectedEvent: null, // Clear the selected event when closing modal
    });
  };
  handleDateSelect = (selectInfo: any) => {
    // Store selected date information for the new event
    this.setState((prevState) => ({
      newEventInfo: {
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      },
      isModalOpen: true, // Open modal
      isEditing: true, // Edit mode (adding a new event)
      // Prepare the empty event object for the form and ensure the 'id' is a string (empty initially)
      selectedEvent: {
        id: "", // Ensure id is always a string
        title: "",
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        description: "",
        allDay: selectInfo.allDay,
      },
    }));

    selectInfo.view.calendar.unselect(); // Unselect the date after opening the form
  };

  //   // Function to save the newly added event
  handleSaveEvent = () => {
    const { selectedEvent, currentEvents, newEventInfo } = this.state;

    if (selectedEvent && selectedEvent.title) {
      let updatedEvents;

      // If editing (selectedEvent has an id), update the existing event
      if (selectedEvent.id) {
        updatedEvents = currentEvents.map((event) =>
          event.id === selectedEvent.id
            ? {
                ...event,
                title: selectedEvent.title,
                start: selectedEvent.start || newEventInfo.start, // Use selectedEvent's start if available
                end: selectedEvent.end || newEventInfo.end, // Use selectedEvent's end if available
                description: selectedEvent.description || "",
                allDay: selectedEvent.allDay,
              }
            : event
        );
      } else {
        // If no id, it's a new event, so add it
        const newEvent: CustomEvent = {
          id: String(new Date().getTime()), // Generate a unique ID
          title: selectedEvent.title,
          start: newEventInfo.start,
          end: newEventInfo.end,
          description: selectedEvent.description || "",
          allDay: newEventInfo.allDay,
        };
        updatedEvents = [...currentEvents, newEvent]; // Add new event
      }

      // Update the state with the updated events array
      this.setState(
        {
          currentEvents: updatedEvents,
          isModalOpen: false, // Close the modal after saving
          selectedEvent: null, // Clear the selected event
        },
        () => saveEventsToLocalStorage(this.state.currentEvents) // Save to localStorage
      );
    }
  };

  // Handle form field changes (title/description)
  handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Ensure the id always has a valid string value
    this.setState((prevState) => ({
      selectedEvent: {
        ...prevState.selectedEvent,
        id: prevState.selectedEvent?.id || "", // Ensure id is always a string
        title: prevState.selectedEvent?.title || "", // Ensure title is always a string
        description: prevState.selectedEvent?.description || "", // Ensure description is always a string
        start: prevState.selectedEvent?.start || "", // Ensure start is always a string
        end: prevState.selectedEvent?.end || "", // Ensure end is always a string
        allDay: prevState.selectedEvent?.allDay ?? false, // Ensure allDay is always a boolean
        [name]: value, // Dynamically update field (title or description)
      },
    }));
  };
  handleEdit = (event: CustomEvent) => {
    this.setState({
      selectedEvent: {
        ...event, // Spread the existing event data
      },
      isModalOpen: true, // Open the modal
      isEditing: true, // Set editing mode
    });
  };
  convertCustomEventsToEventInput(): EventInput[] {
    return this.state.currentEvents.map((event) => ({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
      description: event.description,
    }));
  }

  render() {
    const { selectedEvent, isModalOpen, isDetailModalOpen, isEditing } =
      this.state;
    return (
      <div className="demo-app">
       
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            events={this.convertCustomEventsToEventInput()} // Convert and pass CustomEvent[] to EventInput[]
            select={this.handleDateSelect}
            // eventAdd={this.handleEventAdd}
            eventChange={this.handleEventChange}
            eventRemove={this.handleEventRemove}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // Update state and localStorage when events change
            locale={svLocale}
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: false, // 24-hour format
            }}
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              omitZeroMinute: false,
              hour12: false, // 24-hour format
            }}
          />
          {/* Modal for adding/viewing events */}
          <EventAddAndEditForm
          isModalOpen={isModalOpen} 
          handleCloseModal={this.handleCloseModal} 
          selectedEvent={selectedEvent}
          isEditing={isEditing}
          handleFieldChange={this.handleFieldChange}
          handleSaveEvent ={this.handleSaveEvent}
         
          />
          {/* <EventFormWithTimeSelection
            open={isModalOpen}
            onClose={this.handleCloseModal}
            event={selectedEvent}
            isEditing={isEditing}
            onSave={this.handleSaveEvent}
          /> */}
          {/* Modal for event details */}
          <Dialog open={isDetailModalOpen} onClose={this.handleCloseModal}>
            <DialogTitle>Event Details</DialogTitle>
            <DialogContent>
              {selectedEvent ? (
                <div>
                  <Typography variant="body1">
                    <strong>Title:</strong> {selectedEvent.title}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Start:</strong>{" "}
                    {new Date(selectedEvent.start).toLocaleString()}
                  </Typography>
                  {selectedEvent.end && (
                    <Typography variant="body1">
                      <strong>End:</strong>{" "}
                      {new Date(selectedEvent.end).toLocaleString()}
                    </Typography>
                  )}
                  <Typography variant="body1">
                    <strong>Description:</strong>{" "}
                    {selectedEvent.description || "No description"}
                  </Typography>
                </div>
              ) : (
                <Typography variant="body1">No event selected.</Typography>
              )}
              <Button onClick={this.handleCloseModal} color="primary">
                Close
              </Button>
            </DialogContent>
          </Dialog>
          {/* Modal for confirm delte */}
          <Dialog
            open={this.state.isConfirmDeleteOpen}
            onClose={this.handleCloseConfirmDelete}
          >
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
              <p>
                Are you sure you want to delete the event '
                {this.state.selectedEvent?.title}'?
              </p>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseConfirmDelete} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleConfirmDelete} color="secondary">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {this.renderSidebar()}
      </div>
    );
  }

  renderSidebar() {
    const { currentUser } = this.context; 
  // Check if action buttons exist
    const isAdmin = currentUser?.category === UserCategory.Admin;
console.log("logedin user",currentUser)
    // Set sizes based on whether the user is an admin
    const dateColumnSize = isAdmin ? 2 : 3;
    const timeColumnSize = isAdmin ? 2 : 3;
    const titleColumnSize = isAdmin ? 6 : 4;
    const actionColumnSize = isAdmin ? 2: 0;
    // Set sizes based on whether action buttons are available
 
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
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <Paper elevation={1} style={{ marginBottom: "30px" }}>
            <Grid container spacing={0} style={{ padding: "10px" , }}>
              {/* Header Row */}
              <Grid size={dateColumnSize}>
                <strong>Date</strong>
              </Grid>
              <Grid size={timeColumnSize}>
                <strong>Time</strong>
              </Grid>
              <Grid size={ titleColumnSize}>
                <strong>Event</strong>
              </Grid>
              {currentUser?.category === UserCategory.Admin && (
              <Grid size={actionColumnSize}>
                <strong>Action</strong>
              </Grid> 
            )}
            </Grid>
            {/* Action Rows */}
            {/* {this.state.currentEvents.map((event) =>
              renderSidebarEvent(event, this.handleEdit, this.handleDelete)
            )} */}
             {this.state.currentEvents.map((event) =>
            renderSidebarEvent(
              event,
               currentUser?.category === UserCategory.Admin ? this.handleEdit : null,
               currentUser?.category === UserCategory.Admin ? this.handleDelete : null
            //   isAdmin ? this.handleEdit : null,
            //     isAdmin ? this.handleDelete : null,
               
            )
          )}
          </Paper>
        </div>
      </div>
    );
  }

 

  //   handleEdit = (event: CustomEvent) => {
  //     const newTitle = prompt(
  //       "Please enter a new title for your event",
  //       event.title
  //     );
  //     if (newTitle) {
  //       const updatedEvent: CustomEvent = {
  //         ...event,
  //         title: newTitle,
  //       };

  //       this.setState(
  //         (prevState) => {
  //           const updatedEvents = prevState.currentEvents.map((e) =>
  //             e.id === updatedEvent.id ? updatedEvent : e
  //           );
  //           return { currentEvents: updatedEvents };
  //         },
  //         () => saveEventsToLocalStorage(this.state.currentEvents)
  //       );
  //     }
  //   };
 
  //   handleDelete = (event: CustomEvent) => {
  //     const confirmDelete = confirm(
  //       `Are you sure you want to delete the event '${event.title}'?`
  //     );
  //     if (confirmDelete) {
  //       this.setState(
  //         (prevState) => {
  //           const updatedEvents = prevState.currentEvents.filter(
  //             (e) => e.id !== event.id
  //           );
  //           return { currentEvents: updatedEvents };
  //         },
  //         () => saveEventsToLocalStorage(this.state.currentEvents)
  //       );
  //     }
  //   };
  handleDelete = (event: CustomEvent) => {
    this.setState({
      selectedEvent: event, // Store the event to be deleted
      isConfirmDeleteOpen: true, // Open the confirmation modal
    });
  };

  // Function to close the confirmation modal
  handleCloseConfirmDelete = () => {
    this.setState({ isConfirmDeleteOpen: false, selectedEvent: null });
  };

  // Function to confirm deletion
  handleConfirmDelete = () => {
    const { selectedEvent } = this.state;

    if (selectedEvent) {
      this.setState(
        (prevState) => {
          const updatedEvents = prevState.currentEvents.filter(
            (e) => e.id !== selectedEvent.id
          );
          return {
            currentEvents: updatedEvents,
            isConfirmDeleteOpen: false,
            selectedEvent: null,
          };
        },
        () => saveEventsToLocalStorage(this.state.currentEvents) // Save to localStorage
      );
    }
  };

  handleEventChange = (changeInfo: EventChangeArg) => {
    const updatedEvent: CustomEvent = {
      id: changeInfo.event.id,
      title: changeInfo.event.title,
      start: changeInfo.event.startStr,
      end: changeInfo.event.endStr,
      allDay: changeInfo.event.allDay,
    };

    const updatedEvents = this.state.currentEvents.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );

    this.setState({ currentEvents: updatedEvents }, () =>
      saveEventsToLocalStorage(this.state.currentEvents)
    );
  };

  // Event Remove Handler
  handleEventRemove = (removeInfo: EventRemoveArg) => {
    const updatedEvents = this.state.currentEvents.filter(
      (event) => event.id !== removeInfo.event.id
    );

    this.setState({ currentEvents: updatedEvents }, () =>
      saveEventsToLocalStorage(this.state.currentEvents)
    );
  };
  handleEventsSet = (events: EventApi[]) => {
    // Sync state with FullCalendar
    const eventList = events.map((event: EventApi) => ({
      id: event.id,
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
    }));

    this.setState({ currentEvents: eventList }, () =>
      saveEventsToLocalStorage(this.state.currentEvents)
    );
  };

  //   handleDateSelect = (selectInfo: DateSelectArg) => {
  //     let title = prompt("Please enter a new title for your event");
  //     let calendarApi = selectInfo.view.calendar;

  //     calendarApi.unselect(); // clear date selection

  //     if (title) {
  //       const newEvent: CustomEvent = {
  //         id: createEventId(),
  //         title,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       };

  //       // Add event to the calendar
  //       calendarApi.addEvent(newEvent);

  //       // Update local state and localStorage
  //       this.setState(
  //         (prevState) => ({
  //           currentEvents: [...prevState.currentEvents, newEvent],
  //         }),
  //         () => saveEventsToLocalStorage(this.state.currentEvents)
  //       );
  //     }
  //   };

  //   handleEventClick = (clickInfo: EventClickArg) => {
  //     if (
  //       confirm(
  //         `Are you sure you want to delete the event '${clickInfo.event.title}'`
  //       )
  //     ) {
  //       clickInfo.event.remove();

  //       // Remove event from state and localStorage
  //       this.setState(
  //         (prevState) => ({
  //           currentEvents: prevState.currentEvents.filter(
  //             (event) => event.id !== clickInfo.event.id
  //           ),
  //         }),
  //         () => saveEventsToLocalStorage(this.state.currentEvents)
  //       );
  //     }
  //   };

  handleEvents = () => {
    // This function could be used to sync changes to external sources if needed
  };
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  );
}

function renderSidebarEvent(
    event: CustomEvent,
    onEdit: ((event: CustomEvent) => void) | null, // Accept null
    onDelete: ((event: CustomEvent) => void) | null ,
    
) {
    

    const hasActionColumn = !!(onEdit || onDelete); // Check if action buttons exist

    // Set sizes based on whether action buttons are available
    const dateColumnSize = hasActionColumn ? 2 : 3;
    const timeColumnSize = hasActionColumn ? 2 : 3;
    const titleColumnSize = hasActionColumn ? 6 : 4;
    const actionColumnSize = hasActionColumn ? 2 : 0;
    
  return (
    <Grid
      container
      key={event.id}
      style={{ padding: "10px", borderBottom: "1px solid #ddd",  }}
    >
      <Grid size={dateColumnSize} style={{ textAlign: "left" }}>
        {formatDate(event.start, {
          day: "2-digit",
          month: "2-digit",
          locale: "sv-SE",
        })}
      </Grid>
      <Grid size={timeColumnSize} style={{ textAlign: "left" }}>
        {formatDate(event.start, {
          hour: "2-digit",
          minute: "2-digit",
          locale: "sv-SE",
        })}{" "}
        -{" "}
        {formatDate(event.end, {
          hour: "2-digit",
          minute: "2-digit",
          locale: "sv-SE",
        })}
      </Grid>
      <Grid size={titleColumnSize} style={{ textAlign: "left" }}>
        {event.title}
      </Grid>
      
      <Grid size={actionColumnSize} style={{ textAlign: "left" }}>
    
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
}
