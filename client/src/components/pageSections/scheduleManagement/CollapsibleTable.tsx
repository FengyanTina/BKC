import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ServiceSchedule } from "../../../data.ts";
import { Row } from "./TableRow.tsx";

export default function CollapsibleTable() {
  const loggedInUser = "David";

//   const getDisplayDateTime = (startTime: string, endTime: string) => {
//     const startDate = new Date(startTime);
//     const endDate = new Date(endTime);
//     const sameDay = startDate.toDateString() === endDate.toDateString();

//     const displayDayAndMonth = sameDay
//       ? `${startDate.getDate()}/${startDate.getMonth() + 1}` // Only show start date in Day/Month format
//       : `${startDate.getDate()}/${
//           startDate.getMonth() + 1
//         } - ${endDate.getDate()}/${endDate.getMonth() + 1}`;

//     const displayTime = sameDay
//       ? `${formatDateTime(startDate).split(" ")[1]} - ${
//           formatDateTime(endDate).split(" ")[1]
//         }`
//       : `${formatDateTime(startDate).split(" ")[1]} - (+) ${
//           formatDateTime(endDate).split(" ")[1]
//         }`;

//     return { displayDayAndMonth, displayTime };
//   };

  const rows: ServiceSchedule[] = [
    {
      startTime: "2023-10-01T10:00:00", // Start time in ISO format
      endTime: "2023-10-01T12:00:00",
      event: {
        eventName: "Sunday Service",
        description: "A regular church service held every Sunday.",
        detail: "The service includes worship, prayers, and sermons.",
      },
      team: "Team A",
      memberNeeded: 3,
      scheduleStatus: "open",
      category: [
        {
          startTime: "2023-10-01T10:00:00",
          endTime: "2023-10-01T12:00:00",
          name: "Worship",
          jobs: [
            {
              name: "singing",
              members: ["David", "Olivia"],
              totalNumberNeeded: 1,
            },
            { name: "dancing", members: [], totalNumberNeeded: 2 },
          ],
        },
        {
          startTime: "2023-10-01T10:00:00",
          endTime: "2023-10-02T12:00:00",
          name: "Technical",
          jobs: [
            { name: "sound", members: ["Paul"], totalNumberNeeded: 1 },
            { name: "lights", members: [], totalNumberNeeded: 1 },
          ],
        },
      ],
    },
    {
      startTime: "2023-10-01T11:00:00",
      endTime: "2023-10-01T13:00:00",
      event: {
        eventName: "Sunday School",
        description: "A gathering for children to learn about the Bible.",
        detail: "Divided into age groups for teaching and activities.",
      },
      team: "Team B",
      memberNeeded: 5,
      scheduleStatus: "open",
      category: [
        {
          startTime: "2023-10-01T11:00:00",
          endTime: "2023-10-01T13:00:00",
          name: "5 Year group",
          jobs: [
            { name: "teaching", members: ["John"], totalNumberNeeded: 0 },
            { name: "assisstance", members: [], totalNumberNeeded: 2 },
          ],
        },
        {
          startTime: "2023-10-01T11:00:00",
          endTime: "2023-10-01T13:00:00",
          name: "Baby group",
          jobs: [
            { name: "singing", members: ["Alice"], totalNumberNeeded: 1 },
            { name: "assisstance", members: ["Alice"], totalNumberNeeded: 0 },
          ],
        },
      ],
    },
    {
      startTime: "2023-10-01T10:00:00",
      endTime: "2023-10-01T12:00:00",
      event: {
        eventName: "Serving",
        description: "Volunteers serving during the church service.",
        detail: "Involves preparing food and assisting with various duties.",
      },
      team: "Team12",
      memberNeeded: 2,
      scheduleStatus: "open",
      category: [
        {
          startTime: "2023-10-01T12:00:00",
          endTime: "2023-10-01T13:00:00",
          name: "Fika",
          jobs: [
            { name: "coffee", members: ["John"], totalNumberNeeded: 0 },
            { name: "food", members: [], totalNumberNeeded: 2 },
          ],
        },
        {
          startTime: "2023-10-01T11:00:00",
          endTime: "2023-10-01T12:00:00",
          name: "Communion",
          jobs: [
            { name: "singing", members: ["Alice"], totalNumberNeeded: 1 },
            { name: "assisstance", members: ["Alice"], totalNumberNeeded: 0 },
          ],
        },
      ],
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Date
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Time
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Event
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              align="right"
            >
              Team
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              align="right"
            >
              Members Needed
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              align="right"
            >
              Schedule Status
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              align="right"
            >
              {loggedInUser} Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.event.eventName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
