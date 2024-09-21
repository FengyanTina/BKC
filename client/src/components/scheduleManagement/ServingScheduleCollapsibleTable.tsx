import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
interface Job {
    name: string;
    members: string[];
    totalNumberNeeded: number;
  }
  
  interface Category {
    name: string;
    jobs: Job[];  // Jobs associated with the category
  }
  
  interface ServiceSchedule {
    event: string;
    team: string;
    memberNeeded: number;
    scheduleStatus: 'open' | 'closed';  // Union for specific values
    category: Category[];  // Array of categories, each with its own jobs
  }
  
  // Updated createData function to handle category and jobs
  function createData({
    event,
    team,
    memberNeeded,
    scheduleStatus,
    category
  }: ServiceSchedule): ServiceSchedule {
    return { event, team, memberNeeded, scheduleStatus, category };
  }
  const loggedInUser = 'David';
  function Row({ row }: { row: ServiceSchedule }) {
    const [open, setOpen] = React.useState(false);
    const categoryColors = ['#f5f5f5', '#e0f7fa', '#fce4ec', '#fff9c4', '#e8f5e9'];
    const loggedInUser = 'David';
    const isUserScheduled = row.category.some(category =>
        category.jobs.some(job => job.members.includes(loggedInUser))
      );
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.event}
          </TableCell>
          <TableCell align="right">{row.team}</TableCell>
          <TableCell align="right">{row.memberNeeded}</TableCell>
          <TableCell align="right">{row.scheduleStatus}</TableCell>
          <TableCell align="right">
          {isUserScheduled ? (
            <>
              {loggedInUser} (Scheduled)
            </>
          ) : (
            <>
              {loggedInUser} (Not Scheduled)
            </>
          )}
        </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Categories
                </Typography>
                {row.category.map((category,index) => (
                  <Box key={category.name} sx={{ marginBottom: 2, padding: 2,
                    backgroundColor: categoryColors[index % categoryColors.length], // Rotate through background colors
                    borderRadius: '8px', }}>
                    <Typography variant="subtitle1" gutterBottom component="div">
                      {category.name}
                    </Typography>
                    <Table size="small" aria-label="jobs">
                      <TableHead>
                        <TableRow>
                          <TableCell>Job</TableCell>
                          <TableCell>Members</TableCell>
                          <TableCell align="right">Total Needed</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {category.jobs.map((job) => (
                          <TableRow key={job.name}>
                            <TableCell component="th" scope="row">
                              {job.name}
                            </TableCell>
                            <TableCell>{job.members.join(', ') || 'No members yet'}</TableCell>
                            <TableCell align="right">{job.totalNumberNeeded}</TableCell>
                            <TableCell align="right">
                            {job.members.includes(loggedInUser) ? (
                              <>
                                <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
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
                ))}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  export default function CollapsibleTable() {
    const rows: ServiceSchedule[] = [
      createData({
        event: 'Sunday Service',
        team: 'Team A',
        memberNeeded: 3,
        scheduleStatus: 'open',
        category: [
          {
            name: 'Worship',
            jobs: [
              { name: 'singing', members: ['David', 'Olivia'], totalNumberNeeded: 1 },
              { name: 'dancing', members: [], totalNumberNeeded: 2 }
            ]
          },
          {
            name: 'Technical',
            jobs: [
              { name: 'sound', members: ['Paul'], totalNumberNeeded: 1 },
              { name: 'lights', members: [], totalNumberNeeded: 1 }
            ]
          }
        ]
      }),
      createData({
        event: 'Sunday School',
        team: 'Team B',
        memberNeeded: 5,
        scheduleStatus: 'closed',
        category: [
          {
            name: '5 Year group',
            jobs: [
              { name: 'teaching', members: ['John'], totalNumberNeeded: 0 },
              { name: 'assisstance', members: [], totalNumberNeeded: 2 }
            ]
          },
          {
            name: 'Baby group',
            jobs: [
              { name: 'singing', members: ['Alice'], totalNumberNeeded: 1 },
              { name: 'assisstance', members: ['Alice'], totalNumberNeeded: 0 }
            ]
          }
        ]
      })
    ,
    createData({
        event: 'Serving',
        team: 'Team12',
        memberNeeded: 2,
        scheduleStatus: 'open',
        category: [
          {
            name: 'Fika',
            jobs: [
              { name: 'coffee', members: ['John'], totalNumberNeeded: 0 },
              { name: 'food', members: [], totalNumberNeeded: 2 }
            ]
          },
          {
            name: 'communion',
            jobs: [
              { name: 'singing', members: ['Alice'], totalNumberNeeded: 1 },
              { name: 'assisstance', members: ['Alice'], totalNumberNeeded: 0 }
            ]
          }
        ]
      })
    ];
  
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Event</TableCell>
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Members Needed</TableCell>
              <TableCell align="right">Schedule Status</TableCell>
              <TableCell align="right">{loggedInUser} Status</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.event} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }