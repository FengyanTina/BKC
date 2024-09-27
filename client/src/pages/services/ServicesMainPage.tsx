import { Box, Typography } from "@mui/material";
import YouTubePlaylists from "../../apis/youtube/YoutubeApi";
import { useEffect, useState } from "react";
interface Video {
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: { high: { url: string } };
      publishedAt: string;
    };
  }
export default function ServicesMainPage() {
    const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [liveStreams, setLiveStreams] = useState<any[]>([]);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
      const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your Channel ID
      const maxResults = 10; // Number of videos to fetch
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=${maxResults}&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setVideos(data.items);
        } else {
          setError("No videos found");
        }
      } catch (error) {
        setError("Error fetching videos");
      }
    };

    fetchChannelVideos();
  }, []);
  useEffect(() => {
    const fetchLiveStreams = async () => {
      const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // Replace with your YouTube API key
      const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your YouTube channel ID

      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if there are live streams available
        if (data.items.length > 0) {
          setLiveStreams(data.items);
        } else {
          setError("No live streams currently available.");
        }
      } catch (error) {
        setError("Error fetching live streams.");
        console.error(error);
      }
    };

    fetchLiveStreams();
  }, []); // Empty dependency array means this runs once on mount

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideoId(null);
  };
  const opts = {
    height: "390", // Set to appropriate height
    width: "640", // Set to appropriate width
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        marginTop:'100px'
      }}
    >
      <Typography variant="h1">This is service page</Typography>

      <YouTubePlaylists />
    </Box>
  );
}
