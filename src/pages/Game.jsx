import { Button, Container, Typography } from "@mui/material";
import GameGrid from "../components/GameGrid";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Game({username}){
    const nav = useNavigate()

    // gameState {inGame: bool, activePlayer: 0/1, board: []}
    const [gameState, setGameState] = useState({"inGame": false,"activePlayer": 1,"board": ["","","","","","",""]});

    const getGameState = () => { 
        fetch("https://tic-tac-toe-ajw-api.web.app/gameState")
            .then(response => response.json())
            .then(data => setGameState(data))
            .catch(alert)
    }




    return (
        <AppLayout>
            <Container component='main' maxWidth='sm'>
                <Typography type='h1' variant='h2' align='center'>Active Player: {username}</Typography>
                <GameGrid board={gameState.board}/>
                {true && <Button onClick={() => {nav('/')}} fullWidth variant="contained" sx={{mt:2, mb:2}}>Return to Main Menu</Button>}
            </Container>
        </AppLayout>
    )
}