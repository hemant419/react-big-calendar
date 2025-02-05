# React Big Calendar with Bar Graph

## Task Overview
This project integrates **React Big Calendar** to display data on a date, week, or month-wise basis. The calendar will highlight the selected date, and on clicking the highlighted date, a bar graph will appear showing data for that date. If no data exists for the selected date, an alert message will be displayed.

## Features
- Display date-wise data in the **React Big Calendar**.
- Highlight the selected date in the calendar.
- Display a **Bar Graph** popup when clicking the highlighted date.
- If no data is available for the selected date, show an alert: "No data found for the selected date."
- Ensures compatibility across all operating systems.

## Setup Instructions

### Prerequisites
1. Node.js (v16 or above) installed on your machine.
2. Vite React template.

### 1. Clone the repository
```bash
git clone https://github.com/hemant419/react-big-calendar.git
cd react-big-calendar
```

### 2. Install Dependencies
To install the necessary dependencies, run:
```bash
npm install
```

### 3. Run the Application
To start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`.

### 4. Project Structure
The project is structured as follows:
```
/src
  /components
    CalendarComponent.js - Contains the React Big Calendar and Bar Graph logic.
  /data
    data.json - Contains the dummy data used in the calendar.
  App.js - Main application file integrating all components.
  main.js - Entry point for the React app.
```

### 5. Sample Data
A sample data file `data.json` has been included in the project with the following format:
```json
{
  "01-02-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 }
  ],
  "02-02-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 }
  ],
  "03-02-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 }
  ],
  "04-02-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 }
  ],
  "05-02-2025": [
    { "user_1": 1 },
    { "user_2": 2 },
    { "user_3": 3 },
    { "user_4": 4 }
  ]
}

```

## Dependencies
- `react-big-calendar`: For displaying the calendar.
- `chart.js`: For rendering the Bar Graph.
- `react-chartjs-2`: React wrapper for Chart.js.
- `moment`: For handling date manipulation.

## Expected Outcome
Once the task is completed, the user should be able to:
1. View the React Big Calendar with date-wise data.
2. Click on a date to see a popup bar graph for that date.
3. Receive an alert if no data is available for a selected date.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```