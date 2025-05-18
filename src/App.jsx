import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import "../src//components/Dashboard.css";
function App() {
  const [count, setCount] = useState(0);
  const dummyPieData = {
    // overallPassPercentage: "75",
    overallFailPercentage: "15",
    overallAbsentPercentage: "10",
  };
  return (
    <>
      <div>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
