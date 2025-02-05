import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: "Meeting with Team",
      start: new Date(2025, 1, 10, 10, 0),
      end: new Date(2025, 1, 10, 11, 0),
    },
    {
      title: "Project Deadline",
      start: new Date(2025, 1, 15, 14, 0),
      end: new Date(2025, 1, 15, 16, 0),
    },
  ]);

  return (
    <div style={{ height: "500px", padding: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default CalendarComponent;
