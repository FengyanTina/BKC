import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
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

export default  function NewsMainPage() {
 

  return (
    <>
      <Box my={"40px"}>
        <Button
          component={Link}
          to="product/new"
          variant="contained"
          color="primary"
          sx={{ fontSize: "10px", padding: "8px 16px" }}
          data-cy="admin-add-product"
        >
          Admin
        </Button>
      </Box>
    

      <Outlet />
    </>
  );
}