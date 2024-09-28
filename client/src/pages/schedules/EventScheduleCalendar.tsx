// import React, { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react'; // Import FullCalendar types
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid'; 
// import interactionPlugin from '@fullcalendar/interaction'; 
// import axios from 'axios';
// import svLocale from '@fullcalendar/core/locales/sv'; // Swedish locale
// import { EventInput } from '@fullcalendar/core';

// interface Holiday {
//   date: string;
//   localName: string;
// }

// const EventScheduleCalendar: React.FC = () => {
//   const [events, setEvents] = useState<EventInput[]>([]); // FullCalendar event type
 
//   const [currentView, setCurrentView] = useState<string>('timeGridWeek'); 

//   // Fetch Swedish holidays
//   const fetchHolidays = async () => {
//     try {
//       const response = await axios.get<Holiday[]>(
//         'https://date.nager.at/api/v3/PublicHoliday/2024/SE'
//       );
//       const holidays = response.data.map((holiday) => ({
//         title: holiday.localName,
//         start: holiday.date,
//         allDay: true, // Holidays are usually full-day events
//         backgroundColor: '#ffcccb', // Optional styling for holidays
//       }));

//       // Add holidays to events state
//       setEvents((prevEvents) => [...prevEvents, ...holidays]);
//     } catch (error) {
//       console.error('Error fetching holidays', error);
//     }
//   };
 

//   // Fetch holidays on component mount
//   useEffect(() => {
//     fetchHolidays();
//   }, []);




//   // Fetch holidays on component mount
//   useEffect(() => {
//     fetchHolidays();
//   }, []);

//   // Handle click on an existing event (to view, edit, delete)
//   const handleEventClick = (clickInfo: any) => {
//     const event = clickInfo.event;
//     const editOrDelete = window.confirm(
//       `Would you like to edit or delete the event: "${event.title}"?`
//     );
//     if (editOrDelete) {
//       const newTitle = prompt('Edit Event Title', event.title);
//       if (newTitle) {
//         event.setProp('title', newTitle); // Edit event title
//       } else {
//         event.remove(); // Delete the event if title is empty
//       }
//     }
//   };


//   // Handle time range selection to schedule a new event
//   const handleDateSelect = (selectInfo: any) => {
//     const title = prompt('Enter Event Title');
//     const calendarApi = selectInfo.view.calendar;

//     calendarApi.unselect(); // Clear the selection

//     if (title) {
//       setEvents((prevEvents) => [
//         ...prevEvents,
//         {
//           title,
//           start: selectInfo.startStr,
//           end: selectInfo.endStr,
//         },
//       ]);
//     }
//   };


//   // Handle view change
//   const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setCurrentView(e.target.value);
//   };


//   return (
//     // <FullCalendar
//     //   plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//     //   initialView="timeGridWeek" // Week view with time
//     //   events={events} // List of events including holidays
//     //   selectable={true} // Enable selection for scheduling events
//     //   select={handleDateSelect} // Handle time range selection
//     //   eventClick={handleEventClick} // Handle click on events
//     //   locale={svLocale} // Swedish locale
//     //   eventTimeFormat={{
//     //     hour: '2-digit',
//     //     minute: '2-digit',
//     //     meridiem: false, // 24-hour format
//     //   }}
//     //   slotLabelFormat={{
//     //     hour: '2-digit',
//     //     minute: '2-digit',
//     //     omitZeroMinute: false,
//     //     hour12: false, // 24-hour format
//     //   }}
//     // />
//     <div>
//     {/* Dropdown to switch between views */}
//     <select onChange={handleViewChange} value={currentView}>
//         <option value="customYear">Year View</option>
//         <option value="dayGridMonth">Month View</option>
//         <option value="timeGridWeek">Week View</option>
//       </select>

//     {/* FullCalendar component */}
//        {/* FullCalendar component */}
//        <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView={currentView} // Dynamically set view based on selection
//         events={events} // List of events including holidays
//         selectable={true} // Enable selection for scheduling events
//         select={handleDateSelect} // Handle time range selection
//         eventClick={handleEventClick} // Handle click on events
//         locale={svLocale} // Swedish locale

//         // Formats event time (e.g., event start and end times)
//         eventTimeFormat={{
//           hour: '2-digit',
//           minute: '2-digit',
//           meridiem: false, // 24-hour format
//         }}

//         // Formats the time labels in the time grid
//         slotLabelFormat={{
//           hour: '2-digit',
//           minute: '2-digit',
//           omitZeroMinute: false,
//           hour12: false, // 24-hour format
//         }}

//         // Define available views for FullCalendar
//         views={{
//           // Custom year view
//           customYear: {
//             type: 'dayGrid', // Grid-based view
//             duration: { months: 12 }, // 12-month duration for year view
//             buttonText: 'Year',
//             dayHeaderFormat: { weekday: 'long' }, // Show full weekday names
//             visibleRange: function(currentDate) {
//               // Set the visible range to the entire year
//               let start = new Date(currentDate.getFullYear(), 0, 1); // Jan 1st
//               let end = new Date(currentDate.getFullYear(), 11, 31); // Dec 31st
//               return { start, end };
//             }
//           },
//           dayGridMonth: {
//             type: 'dayGridMonth', // Displays a month
//             buttonText: 'Month',
//           },
//           timeGridWeek: {
//             type: 'timeGridWeek', // Displays a week with times
//             buttonText: 'Week',
//           },
//         }}
//       />
//   </div>
//   );
// };

// export default EventScheduleCalendar;
