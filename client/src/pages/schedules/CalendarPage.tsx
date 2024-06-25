import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";


const thumnailImageStyle = {
  cursor: "pointer",
  borderRadius: "5px",
  maxWidth: "100%",
};

const listItemStyle = {
  py: 1,
  flexDirection: "column",
  alignItems: "stretch",
  "@media (min-width: 600px)": {
    flexDirection: "row",
  },
};

export default  function CalendarPage() {
 

  return (
    <>
      <Grid my={"40px"}>
        <Button
          component={Link}
          to="product/new"
          variant="contained"
          color="primary"
          sx={{ fontSize: "10px", padding: "8px 16px" }}
          data-cy="admin-add-product"
        >
          Calendar
        </Button>
      </Grid>
    

      <Outlet />
    </>
  );
}