import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import formatDateTime from "../../../utils/FormatDateTime.tsx";
import { Category } from "@mui/icons-material";
import {ServiceSchedule,Job,} from "../../../data.ts"
const getDisplayDateTime = (startTime: string, endTime: string) => {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    const sameDay = startDate.toDateString() === endDate.toDateString();
  
    const displayDayAndMonth = sameDay
    ? `${startDate.getDate()}/${startDate.getMonth() + 1}` // Only show start date in Day/Month format
    : `${startDate.getDate()}/${startDate.getMonth() + 1} - ${
        endDate.getDate()}/${endDate.getMonth() + 1
      }`; 
  
    const displayTime = sameDay
      ? `${formatDateTime(startDate).split(" ")[1]} - ${
          formatDateTime(endDate).split(" ")[1]
        }`
      : `${formatDateTime(startDate).split(" ")[1]} - (+) ${
          formatDateTime(endDate).split(" ")[1]
        }`;
  
    return { displayDayAndMonth, displayTime };
  };
  

export function Row({ row }: { row: ServiceSchedule }){
    const [open, setOpen] = React.useState(false);
    const categoryColors = [
      "#f5f5f5",
      "#e0f7fa",
      "#fce4ec",
      "#fff9c4",
      "#e8f5e9",
    ];
    const loggedInUser = "David";
    const isUserScheduled = row.category.some((category) =>
      category.jobs.some((job) => job.members.includes(loggedInUser))
    );
    const startDate = new Date(row.startTime);
    const endDate = new Date(row.endTime);
    const sameDay = startDate.toDateString() === endDate.toDateString();
    const displayDate = sameDay
      ? formatDateTime(startDate).split(" ")[0] // Only show start date
      : `${formatDateTime(startDate).split(" ")[0]} - ${
          formatDateTime(endDate).split(" ")[0]
        }`; // Start date - End date
  
        const displayDayAndMonth = sameDay
        ? `${startDate.getDate()}/${startDate.getMonth() + 1}` // Only show start date in Day/Month format
        : `${startDate.getDate()}/${startDate.getMonth() + 1} - ${
            endDate.getDate()}/${endDate.getMonth() + 1
          }`; 
  
    const displayTime = sameDay
      ? `${formatDateTime(startDate).split(" ")[1]} - ${
          formatDateTime(endDate).split(" ")[1]
        }` // Start time - End time
      : `${formatDateTime(startDate).split(" ")[1]} - (+) ${
          formatDateTime(endDate).split(" ")[1]
        }`; // Start time (+) End time
    
    return(
       
            <React.Fragment>
              <TableRow
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "& > *": { borderBottom: "unset" },
                  background: open
                    ? "linear-gradient(90deg, #ff9966, #ff5e62)"
                    : "#fff",
                  color: open ? "#fff" : "#333",
                  "&:hover": {
                    backgroundColor: "#ffeaa7",
                    transition: "background-color 0.3s ease-in-out",
                  },
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {displayDate}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {displayTime}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {row.event.eventName}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {row.team}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {row.memberNeeded}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {row.scheduleStatus}
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                  {isUserScheduled ? (
                    <>{loggedInUser} (Scheduled)</>
                  ) : (
                    <>{loggedInUser} (Not Scheduled)</>
                  )}
                </TableCell>
              </TableRow>
        
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Categories
                      </Typography>
        
                      {row.category.map((category, index) => {
                        const {
                            displayDayAndMonth: displayCategoryDate,
                          displayTime: displayCategoryTime,
                        } = getDisplayDateTime(category.startTime, category.endTime);
        
                        return (
                          <Box
                            key={category.name}
                            sx={{
                              marginBottom: 2,
                              padding: 2,
                              backgroundColor:
                                categoryColors[index % categoryColors.length],
                              borderRadius: "8px",
                            }}
                          >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                              <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "bold" }}
                              >
                                {category.name}
                              </Typography>
                              <Button
                                variant="contained"
                                
                                size="small"
                                sx={{
                                    marginLeft: 1,
                                    backgroundColor: "#4CAF50", // Soft green
                                    color: "#fff",
                                    '&:hover': {
                                      backgroundColor: "#45A049", // Darker green on hover
                                    },
                                  }}
                              >
                                Create Job
                              </Button>
                              <Button
                                variant="contained"
                               
                                size="small"
                                sx={{
                                    marginLeft: 1,
                                    backgroundColor: "#4CAF50", // Soft green
                                    color: "#fff",
                                    '&:hover': {
                                      backgroundColor: "#45A049", // Darker green on hover
                                    },
                                  }}
                              >
                                Edit Jobs
                              </Button>
                            </Box>
                            <Table size="small" aria-label="jobs">
                              <TableHead>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Date
                                  </TableCell>
                                  {/* New column header for date */}
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Time
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: "bold" }}>Job</TableCell>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Members
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                                    Total Needed
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                                    Action
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {category.jobs.map((job) => (
                                  <TableRow key={job.name}>
                                    <TableCell component="th" scope="row">
                                      {displayCategoryDate}
                                    </TableCell>{" "}
                                    {/* Show category date */}
                                    <TableCell component="th" scope="row">
                                      {displayCategoryTime}
                                    </TableCell>{" "}
                                    {/* Show category time */}
                                    <TableCell component="th" scope="row">
                                      {job.name}
                                    </TableCell>
                                    <TableCell>
                                      {job.members.join(", ") || "No members yet"}
                                    </TableCell>
                                    <TableCell align="right">
                                      {job.totalNumberNeeded}
                                    </TableCell>
                                    <TableCell align="right">
                                      {job.totalNumberNeeded === 0 &&
                                      !job.members.includes(loggedInUser) ? (
                                        <Typography>No Actions Needed</Typography>
                                      ) : job.members.includes(loggedInUser) ? (
                                        <>
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginRight: 1 }}
                                          >
                                            Confirm
                                          </Button>
                                          <Button variant="outlined" color="secondary">
                                            Help
                                          </Button>
                                        </>
                                      ) : (
                                        <Button variant="outlined" color="primary">
                                          Contribute
                                        </Button>
                                      )}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        );
                      })}
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
    );
}