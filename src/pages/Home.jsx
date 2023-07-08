import { Box, Container, Typography, TextField, Button } from "@mui/material";
import AppLayout from "../layout/AppLayout";

export default function Home() {

    return (
        <AppLayout>
            <Container component='main' maxWidth='xs'>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography component='h1' variant='h3'>Sign In</Typography>
                    <Box component='form' onSubmit={()=>{}} noValidate sx={{mt:1}}>
                        <TextField margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        required
                        autoFocus
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Join Game</Button>
                        <Button fullWidth variant="contained" sx={{mt:2, mb:2}}>Join As Guest</Button> 
                    </Box>
                    
                </Box>
            </Container>
        </AppLayout>
    )
}