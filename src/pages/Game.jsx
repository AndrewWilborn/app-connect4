import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import GameGrid from "../components/GameGrid";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Game({username}){
    const theme = useTheme()
    const nav = useNavigate()

    // gameState {inGame: bool, activePlayer: 0/1, board: []}
    const [gameState, setGameState] = useState({"inGame": false,"activePlayer": 1,"board": ["","","","","","",""]});
    const [playerId, setPlayerId] = useState();
    const [whichPlayer, setWhichPlayer] = useState();

    /*
        ActivePlayer meanings:
        0: player 0's turn
        1: player 1's turn
        2: player 0 wins
        3: player 1 wins
        4: a player disconnected
    */

    const messages = [
        [ // Player 1 Messages
            `Your Move\n${username}`, 
            "Waiting for\nopponent...", 
            "You Win!",
            "You Lose.",
            "Opponent\nDisconnected"
        ],
        [ // Player2 Messages
            "Waiting for\nopponent...",
            `Your Move\n${username}`,
            "You Lose.",
            "You Win!",
            "Opponent\nDisconnected"
        ],
        // Spectator messages can go here
    ]

    const getGameState = () => {
        fetch(`https://tic-tac-toe-ajw-api.web.app/gameState/${whichPlayer}`)
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
            getGameState();
        }, 500);
        return () => {
            clearInterval(x);
        }
    }, [whichPlayer]);

    return (
        <AppLayout>
            <Container component='main' maxWidth='sm'>
                <Box textAlign="center">
                    <Box textAlign="center" sx={{ border: '3px solid blue'}}>
                        <Typography type='h1' variant='h2' align='center'>{
                            (!gameState.inGame)
                            ? "Waiting for\nplayers..."
                            : messages[whichPlayer][gameState.activePlayer]
                        }</Typography>
                        <GameGrid gameState={gameState} playerId={playerId} whichPlayer={whichPlayer} getGameState={getGameState}/>
                    </Box>
                    {((gameState.activePlayer!==1 && gameState.activePlayer!==0) || !gameState.inGame) && <Button onClick={() => {nav('/')}} variant="contained" sx={{mt:2, mb:2}}>Return to Main Menu</Button>}
                </Box>
            </Container>
        </AppLayout>
    )
}