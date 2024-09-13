import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const ContactUsPage = () => {
    return (
<Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'grey.100',
        padding: 15
        
      }}
    >
      <Box
        sx={{
            width: '100%',
            maxWidth: 600, 
            bgcolor: 'white',
            p: 4, 
            borderRadius: 2,
            boxShadow: 3,
            height: 'auto', 
            minHeight: '400px', 
          }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Feel free to reach out to us if you have any questions, suggestions, or inquiries.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="body2" color="textSecondary" component="span">
              Email:
            </Typography>{' '}
            <Link href="mailto:almasoud49@yahoo.com" color="primary">
              almasoud49@yahoo.com
            </Link>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary" component="span">
              Phone:
            </Typography>{' '}
            (+880) 1828121218
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary" component="span">
              Address:
            </Typography>{' '}
            Mirpur, Dhaka, Bangladesh
          </Box>
        </Box>
      </Box>
    </Container>
    );
};

export default ContactUsPage;