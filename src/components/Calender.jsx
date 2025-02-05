import React, { useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog, Button, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import data from "../data.json";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [chartData, setChartData] = useState(null);

  const events = Object.keys(data).map((date) => ({
    start: moment(date, "DD-MM-YYYY", true).isValid()
      ? moment(date, "DD-MM-YYYY").toDate()
      : new Date(date),
    end: moment(date, "DD-MM-YYYY", true).isValid()
      ? moment(date, "DD-MM-YYYY").toDate()
      : new Date(date),
    title: `Data available for ${date}`,
    data: data[date] || [],
  }));

  const handleSelectEvent = useCallback((event) => {
    const formattedDate = moment(event.start).format("DD-MM-YYYY");
    const selectedData = data[formattedDate] || [];

    setChartData({
      labels: selectedData.map((item, index) => `User ${index + 1}`),
      datasets: [
        {
          label: "User Activity",
          data: selectedData.map((item) => Object.values(item)[0]),
          backgroundColor: "rgba(75,192,192,0.6)",
        },
      ],
    });

    setSelectedDate(event.start);
    setDialogOpen(true);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        React Big Calendar with Bar Graph
      </Typography>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day", "agenda"]}
        defaultView="month"
        defaultDate={new Date()}
        selectable
        onSelectSlot={handleSelectEvent}
        style={{ height: 600 }}
        eventPropGetter={(event) => ({
          style: { backgroundColor: "#1976d2", color: "#fff" },
        })}
      />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <div style={{ padding: 20 }}>
          <Typography variant="h6">
            Data for {moment(selectedDate).format("MMMM Do YYYY")}
          </Typography>
          {chartData?.datasets?.map(({ data }) =>
            data.length > 0 ? (
              <Bar data={chartData} options={{ responsive: true }} />
            ) : (
              <Typography>No data found.</Typography>
            )
          )}
          <Button
            onClick={() => setDialogOpen(false)}
            variant="contained"
            color="secondary"
          >
            Close
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default CalendarComponent;
