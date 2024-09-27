import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "white",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const getCurrentWeek = () => {
  const today = new Date();
  const startOfWeek = today.getDate() - today.getDay(); // Get the start of the week (Sunday)

  const daysInSwedish = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]; // Days of the week in Swedish

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today.setDate(startOfWeek + index));
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
    }; // Correct types for options
    const formattedDate = date.toLocaleDateString("sv-SE", dateOptions); // Format as "DD/MM"
    return {
      date: formattedDate, // e.g., "25/09"
      dayName: daysInSwedish[index], // Day name in Swedish
    };
  });
};

export default function RowAndColumnSpacing() {
  const currentWeek = getCurrentWeek();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {currentWeek.map((day, index) => (
          <Grid container columns={12} key={index} size= {12}>
            <Grid size={3}>
              <Item>
                <Typography>{day.date}</Typography>
                <Typography>{day.dayName}</Typography>
              </Item>
            </Grid>
            <Grid size={9} sx={{ alignContent: "center" }}>
              <Item>
                <Typography>
                  Events event event 
                  event event for 
                </Typography>
              </Item>
            </Grid>
            {/* This line would also render after the last item */}

            <Grid size={12}>
              <Box
                sx={{ borderBottom: "1px solid #ccc", width: "100%", my: 1 }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
    // <Box sx={{ width: '100%', display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',backgroundColor: "rgba(255, 255, 255, 0.3)",

    //     backdropFilter: "blur(10px)", }}>
    //   <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>1 </Typography> <Typography> Mon</Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={9} sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>1 </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>2 </Typography> <Typography> Mon</Typography>
    //       </Item>

    //     </Grid>
    //     <Grid size={9}  sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>2 </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>3 </Typography> <Typography> Mon</Typography>
    //       </Item>

    //     </Grid>
    //     <Grid size={9}  sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>2 </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>4 </Typography> <Typography> Mon</Typography>
    //       </Item>

    //     </Grid>
    //     <Grid size={9}  sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>2 </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>5 </Typography> <Typography> Mon</Typography>
    //       </Item>

    //     </Grid>
    //     <Grid size={9}  sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>2 </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>6</Typography> <Typography> Mon</Typography>
    //       </Item>

    //     </Grid>
    //     <Grid size={9}  sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>2 </Typography>
    //       </Item>
    //     </Grid>
    //     <Grid size={3}>
    //       <Item sx={{  display:'flex',flexDirection:'column' }}>
    //        <Typography>7</Typography> <Typography> Mon</Typography>
    //       </Item>

    //     </Grid>
    //     <Grid size={9}  sx={{alignContent:'center' }}>
    //       <Item>
    //       <Typography>2 </Typography>
    //       </Item>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
}
