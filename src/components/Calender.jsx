import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import data from "../data.json";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const events = Object.keys(data).map((date) => ({
    start: new Date(date),
    end: new Date(date),
    title: `Data available for ${date}`,
  }));

  return (
    <div style={{ height: "500px", padding: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        onSelectEvent={(event) => setSelectedDate(event.start)}
      />
    </div>
  );
};

export default CalendarComponent;
