import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

const EmployeeDetails = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <Dialog open={!!employee} onClose={onClose}>
      <DialogTitle>{employee.firstName} {employee.lastName}</DialogTitle>
      <DialogContent>
        <Typography>Email: {employee.email}</Typography>
        <Typography>Company: {employee.company.name}</Typography>
        <Typography>Phone: {employee.phone}</Typography>
        <Typography>City: {employee.address.city}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDetails;
