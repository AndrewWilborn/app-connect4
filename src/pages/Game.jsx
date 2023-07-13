import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import GameGrid from "../components/GameGrid";
import AppLayout from "../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BorderAllRounded } from "@mui/icons-material";

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
            "Waiting for\nopponent", 
            "You Win!",
            "You Lose",
            "Opponent Left"
        ],
        [ // Player2 Messages
            "Waiting for\nopponent",
            `Your Move\n${username}`,
            "You Lose",
            "You Win!",
            "Opponent Left"
        ],
        [ // Spectator Messages
            "Spectating",
            "Spectating",
            "Red 1 Wins!",
            "Yellow 2 Wins!",
            "Player Disconnected"
        ]
    ]

    const getDisplayColor = () => {
        if(gameState.activePlayer === whichPlayer+2){
            return "#4ade80"
        }

        if(whichPlayer === gameState.activePlayer && gameState.inGame){
            return "#34d399"
        }
        return "";
    }

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
            (gameState.activePlayer===0||gameState.activePlayer===1) && getGameState();
        }, 500);
        return () => {
            clearInterval(x);
        }
    }, [whichPlayer, gameState.activePlayer]);

    return (
        <AppLayout>
            <Container component='main' maxWidth='sm'>
                <Box textAlign="center">
                    <Box textAlign="center" sx={{ border: "3px solid #3f48cc", mb:1, backgroundColor:getDisplayColor()}}>
                        <Typography type='h1' variant='h3' align='center'>{
                            (!gameState.inGame)
                            ? "Waiting for players..."
                            : messages[whichPlayer][gameState.activePlayer]
                        }</Typography>
                    </Box>
                    <GameGrid gameState={gameState} playerId={playerId} whichPlayer={whichPlayer} getGameState={getGameState}/>
                    {((gameState.activePlayer!==1 && gameState.activePlayer!==0) || !gameState.inGame) && <Button onClick={() => {nav('/')}} variant="contained" sx={{mt:2, mb:2}}>Return to Main Menu</Button>}
                </Box>
            </Container>
        </AppLayout>
    )
}