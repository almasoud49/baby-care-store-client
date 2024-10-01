// import React from 'react';
// import { Container, Typography, Box, Link } from '@mui/material';

// const ContactUsPage = () => {
//     return (
// <Container
//       component="main"
//       maxWidth="xs"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         minHeight: '100vh',
//         backgroundColor: 'grey.100',
//         padding: 15
        
//       }}
//     >
//       <Box
//         sx={{
//             width: '100%',
//             maxWidth: 600, 
//             bgcolor: 'white',
//             p: 4, 
//             borderRadius: 2,
//             boxShadow: 3,
//             height: 'auto', 
//             minHeight: '400px', 
//           }}
//       >
//         <Typography variant="h5" component="h2" gutterBottom>
//           Contact Us
//         </Typography>
//         <Typography variant="body1" color="textSecondary" paragraph>
//           Feel free to reach out to us if you have any questions, suggestions, or inquiries.
//         </Typography>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <Box>
//             <Typography variant="body2" color="textSecondary" component="span">
//               Email:
//             </Typography>{' '}
//             <Link href="mailto:almasoud49@yahoo.com" color="primary">
//               almasoud49@yahoo.com
//             </Link>
//           </Box>
//           <Box>
//             <Typography variant="body2" color="textSecondary" component="span">
//               Phone:
//             </Typography>{' '}
//             (+880) 1828121218
//           </Box>
//           <Box>
//             <Typography variant="body2" color="textSecondary" component="span">
//               Address:
//             </Typography>{' '}
//             Mirpur, Dhaka, Bangladesh
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//     );
// };

// export default ContactUsPage;

//2//
import ContactUs from "@/components/contactUs/ContactUs";
import { Box, Container, Typography } from "@mui/material";
 // Import the ContactUs component

const ContactUsPage = () => {
  return (
<div className="mt-20">
<Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Page Header */}
      <Box
      sx={{ textAlign: "left", marginLeft:"26px", mb: 4 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="h6" component="p">
          Have a question or inquiry? We'd love to hear from you.Whether you're curious about features, pricing, or need assistance — we’re here to help.
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
          Please Contact Us
          </Typography>
          {/* <Typography variant="body1" component="p">
            Whether you're curious about features, pricing, or need assistance — we’re here to help.Please Contact Us
          </Typography> */}
        </Box>

        
        <ContactUs />
      </Container>

    </Box>
</div>
  );
};

export default ContactUsPage;
