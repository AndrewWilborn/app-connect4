import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


export default function Footer(){

  const theme = useTheme()

    return (
          <Box
            sx={{
              position: 'fixed', bottom: 0, left: 0, right: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >

            <Box
              component="footer"
              sx={{
                py: 2,
                px: 2,
                mt: 'auto',
                backgroundColor: "#e4e4e7"
              }}
            >
              <Container maxWidth="sm">
                <Typography variant="body1">
                    <Link color='inherit' href="https://github.com/AndrewWilborn/app-connect4" target="_blank">See the code in GitHub</Link>
                </Typography>
              </Container>
            </Box>
          </Box>
      );
};