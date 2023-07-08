import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function Footer(){

    const Copyright = () => {
        return (
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }

    return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '50vh',
            }}
          >

            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              }}
            >
              <Container maxWidth="sm">
                <Typography variant="body1">
                    <Link color='inherit' href="#">See the code in GitHub</Link>
                </Typography>
                <Copyright />
              </Container>
            </Box>
          </Box>
      );
};