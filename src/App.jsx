import { useState } from "react";
import "./App.css";
import CalendarComponent from "./components/Calender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CalendarComponent />
    </>
  );
}

export default App;
