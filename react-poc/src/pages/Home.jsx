import { useState } from "react";
import EmployeeGrid from "../components/EmployeeGrid";
import EmployeeTile from "../components/EmployeeTile";
import EmployeeDetails from "../components/EmployeeDetails";
import { Button } from "@mui/material";

const Home = () => {
  const [view, setView] = useState("grid");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <Button onClick={() => setView(view === "grid" ? "tile" : "grid")}>
        Toggle View
      </Button>
      {view === "grid" ? (
        <EmployeeGrid />
      ) : (
        <EmployeeTile onClick={setSelectedEmployee} />
      )}
      <EmployeeDetails employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} />
    </div>
  );
};

export default Home;
