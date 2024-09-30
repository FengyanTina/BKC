import {
    Box,
    Dialog,
    DialogContent,
    Paper,
    styled,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";


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
  
  type Props = {
    title: string;
    subTitle?: string;
    linkSubtitle?: string;
    description?: string;
    image: string | string[]; // Accept either a single string or an array of strings for images
    date?: Date;
    linkBody?: string;
    location?: string;
    steps: Step[]; // New field for steps
  }

const BaptismSectionCard = ({ 
    title, 
    subTitle, 
    linkSubtitle, 
    description, 
    image, 
    date, 
    linkBody, 
    location, 
    steps 
  }: Props) => {
    return (
      <Box sx={{ flexGrow: 1,width:'80%', }}>
        <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 1, sm: 12, md: 12 }}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Item>
            {Array.isArray(image) ? (
              // If it's an array, map through it to render multiple images
            //   image.map((imgSrc, index) => (
            //     <img
            //       key={index}
            //       src={imgSrc}
            //       alt={`Image ${index + 1}`}
            //       style={{ width: "100%", marginBottom: "10px" }} // Add margin if you want some space between images
            //     />
            //   ))
            <ImageGallary itemData={image.map(img => ({ img: img }))}/>
            ) : (
              // Otherwise, render a single image
              <img src={image} style={{ width: "100%" }} alt="" />
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
                fontSize:{
                    lg: 30, md: 20, sm: 18
                 },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                mx: "auto",
                px: 3,
                mt: 5,
              }}
            >
              {subTitle}
            </Typography>
        
               <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              mt: 5,
              minHeight: '100px',
              maxHeight: '300px',
              overflowY: 'auto',
            
              '@media (max-width: 1430px)': {
                maxHeight: '200px',
                overflowY: 'auto',
              },
            }}
          >
            {steps.map((step, index) => (
              <Typography
                key={index}
                variant="h5"
                sx={{
                  textAlign: index === 1 ? 'left' : 'center', // Center for step 1 and 3, left for step 2
                  maxHeight: { lg: "350px", md: "80px", sm: "80px" },
                  fontSize:{
                     lg: 20, md: 14, sm: 12
                  },
                 
                  px: 3,
                  lineHeight: 2,
                }}
              >
                <strong>{index + 1}.</strong>{' '} {/* Display step number */}
                
                {step.link ? (
                  <a href={step.link}>{step.description}</a>
                ) : (
                  step.description
                )}
              </Typography>
            ))}
          </Box>
            
          </Grid>
        </Grid>
      </Box>
    );
  };
  

export default BaptismSectionCard