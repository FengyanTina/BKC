import {
  Box,
  styled,
  Typography,
} from "@mui/material";
import "./customizedCards.css";

import Grid from "@mui/material/Grid2";
import ImageGallary from "../../../common/ImageGallary";
const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",

  ...theme.applyStyles("dark", {}),
}));
interface Step {
  title: string;
  description: string;
  link?: string; // Optional link if needed
}

type BaptismSectionModal = {
  title: string;
  subTitle?: string; 
  image: string | string[]; // Accept either a single string or an array of strings for images
  steps?: Step[]; // New field for steps
};
type ImageLinksInforCardModal = {
    subTitle?: string;
    linkSubtitle?: string;
    image: string | string[]; // Accept either a single string or an array of strings for images
    linkBody?: string;
  };
const BaptismSectionCard = ({
  title,
  subTitle,
  image,
  steps,
}: BaptismSectionModal) => {
  return (
    <Box sx={{ flexGrow: 1, width: "80%" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 12, md: 12 }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
          <Item>
            {Array.isArray(image) ? (
              <ImageGallary itemData={image.map((img) => ({ img: img }))} />
            ) : (
              // Otherwise, render a single image
              <img src={image} style={{ width: '100%',}} alt="" />
            )}
          </Item>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mx: "auto",
              px: 3,
              fontSize: {
                lg: 30,
                md: 28,
                sm: 25,
              },
            }}
          >
            {title}
          </Typography>
          {subTitle && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 3,
                fontSize: {
                  lg: 25,
                  md: 20,
                  sm: 20,
                },
              }}
            >
              {subTitle}
            </Typography>
          )}

          <Box
            sx={{
              maxHeight: {
                md: "200px",
                lg: "350px",
              },
              overflowY: "auto",
              px: 3,
              pt: 2,
              pb: 2,
            }}
          >
            <ol>
              {steps &&
                steps.map((step, index) => (
                  <li key={index}>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        fontSize: {
                          lg: 20,
                          md: 20,
                          sm: 18,
                        },
                        lineHeight: 2,
                        mb: 1,
                      }}
                    >
                      {step.link ? (
                        <a href={step.link}>{step.description}</a>
                      ) : (
                        step.description
                      )}
                    </Typography>
                  </li>
                ))}
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BaptismSectionCard;
