import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface NewsSectionGridProps {
  title: string;
  subTitle?: string;
  content: string;
  image: string;
  links?: string[];
}
export default function NewHereSectionGrid({
  title,
  content,
  image,
  links,
  subTitle,
}: NewsSectionGridProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${image})`, // Set the image as background
        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Avoid repeating the image
        width: "100%",
        height: "auto",
        textAlign: "center",
        color: "white",
        display: "flex", // Use flex to center the content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px", // Set a maximum width for the content
          width: "100%", // Make sure it scales for smaller screens
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: "20px",
            fontWeight: "700",
            color: "#5eead4", // Light teal for the title
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            marginTop: "20px",
            fontWeight: "500",
            color: "#5eead4", // Light teal for the title
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {subTitle}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "20px",
            fontWeight: "500",
            color: "#5eead4", // Light teal for the title
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {content}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          {links &&
            links.length > 0 &&
            links.map((link, index) => (
              <a
                key={index}
                href={link}
                style={{
                  display: "block",
                  fontSize: "20px",
                  marginBottom: "10px",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {" "}
                {/* Added key and link */}
                {link}
              </a>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
