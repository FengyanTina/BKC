import { Box, Typography } from "@mui/material";
import YouTubePlaylists from "../../api/YoutubeApi";

export default function ServicesMainPage() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column',backgroundColor: "#f0f4f8",minHeight:'100vh' }}>
        <Typography variant="h1">
This is service page
        </Typography>

        <YouTubePlaylists/>
        </Box>
    )}