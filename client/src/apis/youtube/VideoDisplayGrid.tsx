// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid2';

// import { Typography } from '@mui/material';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));
// interface Video {
//     id: { videoId: string };
//     snippet: {
//       title: string;
//       description: string;
//       thumbnails: { high: { url: string } };
//       publishedAt: string;
//     };
//   }
//   interface VideoDisplayGridProps {
//     videos: Video[]; // Adjust type as per your video data structure
//     handleVideoClick: (videoId: string) => void;
//     selectedVideoId: string | null;
//     handleCloseVideo: () => void;
//     opts: any; // Adjust type for opts if necessary
//   }
// // export default function VideoDisplayGrid() {
// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }}>
// //         {Array.from(Array(3)).map((_, index) => (
// //           <Grid key={index} size={{ xs: 12, sm: 12, md: 4 }}>
// //             <Item>{index + 1}</Item>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // }
// export default function VideoDisplayGrid({ videos, handleVideoClick, selectedVideoId, handleCloseVideo, opts }:VideoDisplayGridProps) {
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }}>
//           {videos.slice(0, 3).map((video, index) => (
//             <Grid key={video.id.videoId} size={{xs:12,sm:12,md:4}} >
//               <Box
//                 sx={{
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   padding: "16px",
//                   boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//                   textAlign: "center",
//                 }}
//               >
//                 {/* Video Thumbnail */}
//               <img
//                 src={video.snippet.thumbnails.high.url}
//                 alt={video.snippet.title}
//                 style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
//                 onClick={() => handleVideoClick(video.id.videoId)} // Click event to open video
//               />

//               {/* Video Title */}
//               <Typography variant="h6" sx={{ marginTop: "10px" }}>
//                 {video.snippet.title}
//               </Typography>

//               {/* Published Date */}
//               <Typography variant="body2" color="textSecondary" sx={{ marginTop: "5px" }}>
//                 Published on: {new Date(video.snippet.publishedAt).toLocaleDateString()}
//               </Typography>

//               {/* Video Description */}
//               <Typography variant="body2" sx={{ marginTop: "10px" }}>
//                 {video.snippet.description.length > 100
//                   ? `${video.snippet.description.substring(0, 100)}...`
//                   : video.snippet.description}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

