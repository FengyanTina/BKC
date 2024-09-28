import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./youtube.css";
import { Box, Paper, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Define types for the video items
interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
  };
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const YouTubePlaylists: React.FC = () => {
  //const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
  //  const apiKey = "AIzaSyDDGV1wYonUjhRI2BxUVYCU774mTNpFKpc";
  const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your YouTube channel ID
  const apiKey = "";

  const maxResults = 3; // Number of videos to fetch
  const [videos, setVideos] = useState<Video[]>([]);
  const [listError, setListError] = useState<string | null>(null);
  const [liveError, setLiveError] = useState<string | null>(null);
  const [liveStreams, setLiveStreams] = useState<any[]>([]);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setVideos(data.items);
        } else {
          setListError("No videos found");
        }
      }catch (error) {
        console.error("Error fetching channel videos:", error);
        setListError("Error fetching videos.");
      }
    };
    fetchChannelVideos();
  }, []);

  useEffect(() => {
    const fetchLiveStreams = async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if there are live streams available
        if (data.items.length > 0) {
          setLiveStreams(data.items);
          // Clear any previous error messages
        } else {
          setLiveError("No live streams currently available."); // Update error state
        }
      } catch (error) {
        console.error("Error fetching live streams:", error);
        setLiveError("No live streams currently available."); // Set a specific error message
      }
    };
    fetchLiveStreams();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Box>
      <Typography variant="h3">Latest Sunday Service Videos</Typography>

      {listError && <p>{listError}</p>}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 1, sm: 1, md: 12 }}
        >
          {videos.slice(0, 3).map((video, index) => (
            <Grid key={video.id.videoId} size={{ xs: 12, sm: 12, md: 4 }}>
              <Box sx={{ maxWidth: "450px", margin: "0 auto" }}>
                {/* Video Thumbnail */}
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${video.id.videoId}`,
                      "_blank"
                    )
                  } // Click event to open video
                />

                {/* Video Title */}
                <Typography variant="h6" sx={{ marginTop: "10px" }}>
                  {video.snippet.title}
                </Typography>

                {/* Published Date */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginTop: "5px" }}
                >
                  Published on:{" "}
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </Typography>

                {/* Video Description */}
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  {video.snippet.description.length > 100
                    ? `${video.snippet.description.substring(0, 100)}...`
                    : video.snippet.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>

        <Box>
          <h1>Live Stream Video:Sunday 11:00</h1>
          {liveError && <p style={{ color: "red" }}>Error: {liveError}</p>}
          <ul>
            {liveStreams.map((stream) => (
              <li key={stream.id.videoId}>
                <h2>{stream.snippet.title}</h2>
                <img
                  src={stream.snippet.thumbnails.default.url}
                  alt={stream.snippet.title}
                  style={{ width: "100px", height: "auto", cursor: "pointer" }}
                  // onClick handler to open the live stream on YouTube
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${stream.id.videoId}`,
                      "_blank"
                    )
                  }
                />
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default YouTubePlaylists;
