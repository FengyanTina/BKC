import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../../../common/ImageGallary";
import InforCard from "../../../common/cards/InforCard";

type Props = {
  category?: string;
  title: string;
  subTitle?: string;
  content: string;
  buttonText?: string;
  time?: Date;
  image: string | string[];
};


const ImgInforCard = ({ title, category, subTitle, content, image }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f0f4f8",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            maxWidth: 500,
            height: 350,
            transform: "translateZ(0)",
          }}
        >
          {Array.isArray(image) ? (
            <ImageGallary itemData={image.map((img) => ({ img: img }))} />
          ) : (
            // Otherwise, render a single image
            <img
              src={image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          )}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InforCard
            category={category}
            title={title}
            subTitle={subTitle}
            content={content}
            buttonText="Learn More"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImgInforCard;
