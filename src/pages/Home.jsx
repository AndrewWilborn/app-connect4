import { Box, Container, Typography, TextField, Button } from "@mui/material";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Home({setUsername}) {

    const theme = useTheme();
    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        if(!data.get('username')){
            return;
        }
        setUsername(data.get('username'));
        nav('/game')
    }

    const handleGuest = () => {
        setUsername('Guest')
        nav('/game')
    }

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
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Join Game</Button>
                        <Button onClick={handleGuest} fullWidth variant="contained" sx={{mt:2, mb:2}}>Join As Guest</Button> 
                    </Box>
                    
                </Box>
            </Container>
        </AppLayout>
    )
}