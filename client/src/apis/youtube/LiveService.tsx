import { useEffect, useState } from "react";
import { Box } from "@mui/material";
export default function LiveService() {
const apiKey = "AIzaSyDzO2fa8ac6Y6LLjwShHKwkNR87sMQ8WPY"; // tinaalwarzon 
//const apiKey = "AIzaSyDDGV1wYonUjhRI2BxUVYCU774mTNpFKpc";//alwarzontina
const channelId = "UChwk9uZFucRkHKZCStrwy3w"; // Replace with your YouTube channel ID
//const apiKey = "";

const [liveError, setLiveError] = useState<string | null>(null);
const [liveStreams, setLiveStreams] = useState<any[]>([]);
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
          setLiveError("No live streams currently available."); 
        }
      } catch (error) {
        console.error("Error fetching live streams:", error);
        setLiveError("No live streams currently available."); 
      }
    };
    fetchLiveStreams();
  }, []); // Empty dependency array means this runs once on mount
  return(
    <Box>
    {/* <Typography variant="h6" style={{color:"white"}}>Live: Sunday 11:00</Typography> */}
    {/* {liveError && <p style={{ color: "red" }}> {liveError}</p>} */}
    <ul>
      {liveStreams.map((stream) => (
        <Box key={stream.id.videoId}>
          {/* <h2 style={{color:"white"}}>{stream.snippet.title}</h2> */}
          <img
            src={stream.snippet.thumbnails.default.url}
            alt={stream.snippet.title}
            style={{ width: "100px", height: "auto", cursor: "pointer" }}
            onClick={() =>
              window.open(
                `https://www.youtube.com/watch?v=${stream.id.videoId}`,
                "_blank"
              )
            }
          />
        </Box>
      ))}
    </ul>
  </Box>
  )

}