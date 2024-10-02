

import React, { useState, useEffect } from "react";
import FullCalendar  from "@fullcalendar/react"; // Assuming you're using FullCalendar React
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // Example plugin
import interactionPlugin from "@fullcalendar/interaction"; // for dateClick

// Custom event interface with optional description
interface CustomEvent extends EventInput {
  description?: string;
}

let eventGuid = 0;
export function createEventId(): string {
  return String(eventGuid++);
}

// Retrieve events from localStorage
const getStoredEvents = (): CustomEvent[] => {
  const storedEvents = localStorage.getItem("calendarEvents");
  return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
};

// Initial events
export const INITIAL_EVENTS: CustomEvent[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: new Date().toISOString().split("T")[0], // Today
    end: new Date().toISOString().split("T")[0],
    description: "This is an all-day event.",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: new Date().toISOString().split("T")[0] + "T12:00:00",
    end: new Date().toISOString().split("T")[0] + "T13:00:00",
    description: "This is a timed event.",
  },
];

const MyCalendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<CustomEvent[]>(getStoredEvents());

  // Store events in localStorage whenever the events change
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(currentEvents));
  }, [currentEvents]);

  // Handle new event creation
  const handleDateSelect = (selectInfo: any) => {
    const title = prompt("Please enter a new title for your event");
    const description = prompt("Please enter a description for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // Clear date selection

    if (title) {
      const newEvent: CustomEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        description: description || "", // Optional description field
      };

      // Add event using calendar API
      calendarApi.addEvent(newEvent);

      // Update the state and persist in localStorage
      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={currentEvents} // Load events from state/localStorage
      />
    </div>
  );
};

export default MyCalendar;
