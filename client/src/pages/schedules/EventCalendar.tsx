

import {
 
    EventInput,
  } from "@fullcalendar/core";
  import React from "react";
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./Events";
import svLocale from "@fullcalendar/core/locales/sv"; // Swedish locale
  
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
  }
  
  // Helper function to store events in localStorage
  const saveEventsToLocalStorage = (events: CustomEvent[]) => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  };
  
  // Retrieve events from localStorage
  const getStoredEvents = (): CustomEvent[] => {
    const storedEvents = localStorage.getItem("calendarEvents");
    return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
  };
  
  export default class EventsCalendar extends React.Component<{}, DemoAppState> {
    state: DemoAppState = {
      weekendsVisible: true,
      currentEvents: getStoredEvents(), // Load from localStorage
    };
  
    render() {
      return (
        <div className="demo-app">
          {this.renderSidebar()}
          <div className="demo-app-main">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
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
          </div>
        </div>
      );
    }
  
    renderSidebar() {
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
            <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
          </div>
        </div>
      );
    }
  
    // Convert CustomEvent[] to EventInput[] for FullCalendar
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
  
    handleDateSelect = (selectInfo: DateSelectArg) => {
      let title = prompt("Please enter a new title for your event");
      let calendarApi = selectInfo.view.calendar;
  
      calendarApi.unselect(); // clear date selection
  
      if (title) {
        const newEvent: CustomEvent = {
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        };
  
        // Add event to the calendar
        calendarApi.addEvent(newEvent);
  
        // Update local state and localStorage
        this.setState(
          (prevState) => ({
            currentEvents: [...prevState.currentEvents, newEvent],
          }),
          () => saveEventsToLocalStorage(this.state.currentEvents)
        );
      }
    };
  
    handleEventClick = (clickInfo: EventClickArg) => {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
  
        // Remove event from state and localStorage
        this.setState(
          (prevState) => ({
            currentEvents: prevState.currentEvents.filter(
              (event) => event.id !== clickInfo.event.id
            ),
          }),
          () => saveEventsToLocalStorage(this.state.currentEvents)
        );
      }
    };
  
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
  
  function renderSidebarEvent(event: CustomEvent) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  }
  