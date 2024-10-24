import "./myCalendar.css";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // Assuming you're using FullCalendar React
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // Example plugin
import svLocale from "@fullcalendar/core/locales/sv"; // Swedish locale
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // for dateClick
import ScheduleEventDetailDialog from "../../components/common/Forms/ScheduleEventDetailDialog";
import EventAddAndEditForm from "./EventAddAndEditForm";
//import Sidebar from "./ScheduleEventTable";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./ScheduleEventTable";
import ConfirmDeleteDialog from "../../components/common/Forms/ConfirmDeleteDialog";
import EventForm from "./EventFormWithTimeSelection";

// Custom event interface with optional description
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

let eventGuid = 0;
export function createEventId(): string {
  return String(eventGuid++);
}

// Retrieve events from localStorage
const getStoredEvents = (): CustomEvent[] => {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
};
const saveEventsToLocalStorage = (events: CustomEvent[]) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const INITIAL_EVENTS: CustomEvent[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: new Date().toISOString().split("T")[0], // Today (e.g., "2024-10-24")
    end: new Date().toISOString().split("T")[0], // Same day for all-day event
    description: "This is an all-day event.",
    allDay: true,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: new Date().toISOString().split("T")[0] + "T12:00:00", // Today at 12:00
    end: new Date().toISOString().split("T")[0] + "T13:00:00", // Today at 13:00
    description: "This is a timed event.",
    allDay: false,
  },
];

const MyCalendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<CustomEvent[]>(
    getStoredEvents()
  );
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newEventInfo, setNewEventInfo] = useState<{
    start: string;
    end: string;
    allDay: boolean;
  } | null>(null);
  const { currentUser } = useAuth();
  const [isConfirmDeleteOpen, setConfirmDeleteOpen] = useState<boolean>(false);

  const handleDelete = (event: CustomEvent) => {
    setSelectedEvent(event);
    setConfirmDeleteOpen(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDeleteOpen(false);
    setSelectedEvent(null);
  };

  const handleConfirmDelete = () => {
    if (selectedEvent) {
      const updatedEvents = currentEvents.filter(
        (e) => e.id !== selectedEvent.id
      );
      setCurrentEvents(updatedEvents);
      setConfirmDeleteOpen(false);
      setSelectedEvent(null);
      saveEventsToLocalStorage(updatedEvents);
    }
  };

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(currentEvents));
  }, [currentEvents]);

  const handleDateSelect = (selectInfo: any) => {
    setNewEventInfo({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });

    setSelectedEvent({
      id: "",
      title: "",
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      description: "",
      location: "",
      allDay: selectInfo.allDay,
    });

    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setSelectedEvent((prev) => {
        if (!prev) return null;

        if (name.startsWith('day_')) {
            const dayIndex = parseInt(name.split('_')[1], 10);
            const updatedDays = [...(prev.selectedDays || Array(7).fill(false))]; // Ensure it's an array of booleans
            updatedDays[dayIndex] = checked; // Checkbox returns a boolean
            return { ...prev, selectedDays: updatedDays };
        }

        // For other fields, treat them as strings
        return { ...prev, [name]: type === 'checkbox' ? checked : value }; // Ensure correct assignment
    });
};

  //   const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setSelectedEvent((prevEvent) => ({
  //       ...prevEvent!,
  //       id: prevEvent?.id || "", // Ensure id is always a string
  //       title: prevEvent?.title || "", // Ensure title is always a string
  //       description: prevEvent?.description || "", // Ensure description is always a string
  //       location: prevEvent?.location || "",
  //       start: prevEvent?.start || "", // Ensure start is always a string
  //       end: prevEvent?.end || "", // Ensure end is always a string
  //       allDay: prevEvent?.allDay ?? false, // Ensure allDay is always a boolean
  //       [name]: value, // Dynamically update field (title or description)
  //     }));
  //   };

  const handleEdit = (event: CustomEvent) => {
    setSelectedEvent({ ...event });
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      const updatedEvents = currentEvents.map((event) =>
        event.id === selectedEvent.id ? { ...event, ...selectedEvent } : event
      );

      const newEvents = generateRecurringEvents(selectedEvent);
      setCurrentEvents([...updatedEvents, ...newEvents]);
      setIsModalOpen(false);
      setSelectedEvent(null);
      saveEventsToLocalStorage([...updatedEvents, ...newEvents]);
    }
  };

  const generateRecurringEvents = (event: CustomEvent): CustomEvent[] => {
    const recurringEvents: CustomEvent[] = [];
    const { repeatCount, selectedDays, start } = event;

    const startDate = new Date(start);
    if (repeatCount)
      for (let i = 0; i < repeatCount; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i * 7); // Increment by 7 days for each occurrence

        selectedDays?.forEach((isSelected, index) => {
          if (isSelected) {
            const newEvent: CustomEvent = {
              ...event,
              id: String(new Date().getTime() + index), // Ensure unique ID
              start: currentDate.toISOString(), // Adjust this as necessary for your logic
              end: currentDate.toISOString(), // You might want to adjust the end date
            };
            recurringEvents.push(newEvent);
          }
        });
      }
    return recurringEvents;
  };

  //   const handleSaveEvent = () => {
  //     if (selectedEvent && selectedEvent.title) {
  //       let updatedEvents: CustomEvent[];

  //       if (selectedEvent.id && newEventInfo) {
  //         updatedEvents = currentEvents.map((event) =>
  //           event.id === selectedEvent.id
  //             ? {
  //                 ...event,
  //                 title: selectedEvent.title,
  //                 start: selectedEvent.start || newEventInfo.start,
  //                 end: selectedEvent.end || newEventInfo.end,
  //                 description: selectedEvent.description || "",
  //                 location: selectedEvent.location || "",
  //                 allDay: selectedEvent.allDay,
  //               }
  //             : event
  //         );
  //       } else {
  //         const newEvent: CustomEvent = {
  //           id: String(new Date().getTime()),
  //           title: selectedEvent.title,
  //           start: newEventInfo?.start || "",
  //           end: newEventInfo?.end || "",
  //           description: selectedEvent.description || "",
  //           location: selectedEvent.location || "",
  //           allDay: newEventInfo?.allDay || false,
  //         };
  //         updatedEvents = [...currentEvents, newEvent];
  //       }

  //       // Update the state with the updated events array
  //       setCurrentEvents(updatedEvents); // Update current events
  //       setIsModalOpen(false);
  //       setSelectedEvent(null);
  //       saveEventsToLocalStorage(updatedEvents);
  //     }
  //   };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const clickedEvent = currentEvents.find(
      (event) => event.id === clickInfo.event.id
    );
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setIsDetailModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsDetailModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDetailOnTable = (clickInfo: CustomEvent) => {
    const clickedEvent = currentEvents.find(
      (event) => event.id === clickInfo.id
    );
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setIsDetailModalOpen(true);
    }
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventTitle, setEventTitle] = useState<string>("");
  const handleScheduleFromDatePicker = () => {
    if (selectedDate && eventTitle) {
      const newEvent: CustomEvent = {
        id: String(new Date().getTime()),
        title: eventTitle,
        start: selectedDate.toISOString(),
        end: new Date(selectedDate.getTime() + 60 * 60 * 1000).toISOString(), // 1-hour event
        allDay: false,
      };

      setCurrentEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        saveEventsToLocalStorage(updatedEvents); // Save to localStorage
        return updatedEvents;
      });

      // Clear form after scheduling
      setEventTitle("");
      setSelectedDate(null);
    } else {
      alert("Please select a date and enter a title.");
    }
  };

  return (
    <div className="calendar-container">
      <h1>MyCalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={currentEvents}
        editable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
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
      <Sidebar
        currentEvents={currentEvents}
        handleEdit={handleEdit}
        currentUser={currentUser}
        handleDelete={handleDelete}
        handleDetailOnTable={handleDetailOnTable}
      />
      <ConfirmDeleteDialog
        open={isConfirmDeleteOpen}
        onClose={handleCloseConfirmDelete}
        onConfirm={handleConfirmDelete}
        title={selectedEvent?.title}
      />
      <ScheduleEventDetailDialog
        event={selectedEvent}
        open={isDetailModalOpen}
        onClose={handleCloseModal}
      />
      <EventAddAndEditForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        selectedEvent={selectedEvent}
        isEditing={isEditing}
        handleFieldChange={handleFieldChange}
        handleSaveEvent={handleSaveEvent}
      />
      {/* <EventForm onClose={handleCloseModal} onSave={handleSaveEvent} open={isModalOpen} isEditing={isEditing} /> */}
    </div>
  );
};
function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b>{eventInfo.timeText}</b> {/* Display event time */}
      <i>{eventInfo.event.title}</i> {/* Display event title */}
    </>
  );
}

export default MyCalendar;
