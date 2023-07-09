import { Button, Container, Typography } from "@mui/material";
import GameGrid from "../components/GameGrid";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Game({username}){
    const nav = useNavigate()

    // gameState {inGame: bool, activePlayer: 0/1, board: []}
    const [gameState, setGameState] = useState({"inGame": false,"activePlayer": 1,"board": ["","","","","","",""]});
    const [playerId, setPlayerId] = useState();
    const [whichPlayer, setWhichPlayer] = useState();

    const getGameState = () => { 
        fetch("https://tic-tac-toe-ajw-api.web.app/gameState")
            .then(response => response.json())
            .then(data => setGameState(data))
            .catch(alert)
    }

    // Upon loading game page, attempt to join game
    useEffect(() => {
        fetch("https://tic-tac-toe-ajw-api.web.app/join")
            .then(response => response.json())
            .then(data => {
                setPlayerId(data.response);
                setWhichPlayer(data.whichPlayer);
            })
            .catch(alert);
        return() => {
            fetch("https://tic-tac-toe-ajw-api.web.app/reset")
        }
    }, []);

    // update board periodically if gameState.activePlayer === whichPlayer
    useEffect(() => {
        const x = setInterval(() => {
            (gameState.activePlayer !== whichPlayer) && getGameState();
        }, 500);
        return () => {
            clearInterval(x);
        }
    }, []);

    return (
        <AppLayout>
            <Container component='main' maxWidth='sm'>
                <Typography type='h1' variant='h2' align='center'>{
                    (gameState.inGame) ?
                    (gameState.activePlayer === whichPlayer)
                        ? "Your Move, " + username
                        : "Waiting for Opponent..."
                    : "Waiting for players..."
                }</Typography>
                <GameGrid gameState={gameState} playerId={playerId} whichPlayer={whichPlayer} getGameState={getGameState}/>
                {true && <Button onClick={() => {nav('/')}} fullWidth variant="contained" sx={{mt:2, mb:2}}>Return to Main Menu</Button>}
            </Container>
        </AppLayout>
    )
}