import { Box, styled, Typography } from "@mui/material";
import "./customizedCards.css";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../../../common/ImageGallary";
import { BaptismSectionModel } from "../../../../models/ImageTextWithSteps";
const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",

  ...theme.applyStyles("dark", {}),
}));

const BaptismServiceSectionCard = ({
  title,
  subtitle,
  images,
  steps,
  showAllAsFeatured = false,
}: BaptismSectionModel) => {
  return (
    <Box sx={{ flexGrow: 1, width: "80%" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 12, md: 12 }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 6 }}>
          <Item>
            {Array.isArray(images) ? (
              <ImageGallary
                itemData={images.map((img) => ({ img: img }))}
                showAllAsFeatured={showAllAsFeatured}
              />
            ) : (
              // Otherwise, render a single image
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden", // Prevent overflow
                }}
              >
                <img src={images} className="image-responsive" alt="" />
              </div>
            )}
          </Item>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
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
              marginBottom: "10px",

              fontSize: {
                lg: "40px",
                md: "30px",
                sm: "30px",
                xs: "28px", // Adjust font size on smaller screens
              },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 3,
                marginBottom: "10px",
                fontSize: {
                  lg: "30px",
                  md: "22px",
                  sm: "22px",
                  xs: "20px", // Adjust font size for small screens
                },
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Box
            sx={{
              maxHeight: {
                xs: "300px",
                sm: "350px",
                md: "350px",
                lg: "400px",
              },
              marginTop: "10px",
              overflowY: "auto",
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
                          lg: "25px",
                          md: "20px",
                          sm: "20px",
                          xs: "18px", // Adjust font size for smaller screens
                        },
                        lineHeight: 1.5,

                        mb: 1,
                      }}
                    >
                      {step.link && step.linkName ? (
                        <>
                          {step.description} &nbsp; {/* Non-breaking space */}
                          <a href={step.link}>{step.linkName}</a>{" "}
                          {/* Render the link */}
                        </>
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

export default BaptismServiceSectionCard;
