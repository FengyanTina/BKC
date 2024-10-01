// import React, { useState, useEffect } from "react";
// import "./youtube.css";
// import { Box, Paper, styled, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import { Video } from "../../data.ts";


// const YouTubePlaylists: React.FC = () => {
//   //const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY";  // tinaalwarzon
//   const apiKey = "AIzaSyDDGV1wYonUjhRI2BxUVYCU774mTNpFKpc"; //alwarzontina
//   const channelId = "UChwk9uZFucRkHKZCStrwy3w";
//   //const apiKey = "";

//   const maxResults = 3; // Number of videos to fetch
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [listError, setListError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchChannelVideos = async () => {
//       const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`;

//       try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.items) {
//           setVideos(data.items);
//         } else {
//           setListError("No videos found");
//         }
//       } catch (error) {
//         console.error("Error fetching channel videos:", error);
//         setListError("Error fetching videos.");
//       }
//     };
//     fetchChannelVideos();
//   }, []);

//   return (
//     <Box>
//       {listError && <p>{listError}</p>}
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid
//           container
//           spacing={{ xs: 1, md: 2 }}
//           columns={{ xs: 1, sm: 1, md: 12 }}
//         >
//           {videos.slice(0, 3).map((video, index) => (
//             <Grid key={video.id.videoId} size={{ xs: 12, sm: 12, md: 4 }}>
//               <Box sx={{ maxWidth: "450px", margin: "0 auto" }}>
//                 {/* Video Thumbnail */}
//                 <img
//                   src={video.snippet.thumbnails.high.url}
//                   alt={video.snippet.title}
//                   style={{
//                     width: "100%",
//                     cursor: "pointer",
//                     borderRadius: "8px",
//                   }}
//                   onClick={() =>
//                     window.open(
//                       `https://www.youtube.com/watch?v=${video.id.videoId}`,
//                       "_blank"
//                     )
//                   }
//                 />
//                 {/* Video Title */}
//                 <Typography variant="h6" sx={{ marginTop: "10px" }}>
//                   {video.snippet.title}
//                 </Typography>

//                 {/* Published Date */}
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   sx={{ marginTop: "5px" }}
//                 >
//                   Published on:{" "}
//                   {new Date(video.snippet.publishedAt).toLocaleDateString()}
//                 </Typography>
//                 {/* Video Description */}
//                 <Typography variant="body2" sx={{ marginTop: "10px" }}>
//                   {video.snippet.description.length > 100
//                     ? `${video.snippet.description.substring(0, 100)}...`
//                     : video.snippet.description}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box></Box>
//     </Box>
//   );
// };

// export default YouTubePlaylists;
