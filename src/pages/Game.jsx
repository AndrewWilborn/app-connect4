import { Button, Container, Typography } from "@mui/material";
import GameGrid from "../components/GameGrid";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";

export default function Game({username}){

    const nav = useNavigate()

    return (
        <AppLayout>
            <Container component='main' maxWidth='sm'>
                <Typography type='h1' variant='h2' align='center'>Active Player: {username}</Typography>
                <GameGrid />
                {true && <Button onClick={() => {nav('/')}} fullWidth variant="contained" sx={{mt:2, mb:2}}>Return to Main Menu</Button>}
            </Container>
        </AppLayout>
    )
}