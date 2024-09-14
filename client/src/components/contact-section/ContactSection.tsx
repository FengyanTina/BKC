
import Grid from "@mui/material/Grid2";
import { Box } from '@mui/material'
import Form from './Form'
import Info from './Info'

import './contact-section.css'

const ContactSection = () => (
  <>
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '3fr 1.5fr' },
      width: '80vw',
      height: '475px',
      margin: '0 auto',
      top: '-100px', // Directly set the value for --offset-height
      left: '50%',
      marginLeft: '-40vw', // This centers the grid horizontally
      marginBottom: '-100px', // Directly set the value for --offset-height
      position: 'relative',
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0 1px 5px 1px rgba(0, 0, 0, 0.15)',
      zIndex:'20'
    }}>
        
      <Form  />
        
      <Info />
    </Box>
  </>
)

export default ContactSection
