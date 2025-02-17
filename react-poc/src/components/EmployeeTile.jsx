import { useEffect, useState } from "react";
import { fetchEmployees } from "../api";
import { Card, CardContent, Typography, Grid, Button, Grid2 } from "@mui/material";

const EmployeeTile = ({ onClick }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  return (
    <Grid2 container spacing={2}>
      {employees.map((emp) => (
     
        <Grid2 item key={emp.id} xs={12} sm={6} md={4} lg={3}>
            {        console.log("employees==",employees)
            }   
          <Card onClick={() => onClick(emp)}>
            <CardContent>
              <Typography variant="h6">{emp.firstName} {emp.lastName}</Typography>
              <Typography variant="body2">{emp.email}</Typography>
              <Button size="small">Edit</Button>
              <Button size="small">Flag</Button>
              <Button size="small">Delete</Button>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default EmployeeTile;
