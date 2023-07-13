import { Grid } from "@mui/material";

export default function GameGrid({gameState, playerId, whichPlayer, getGameState}) {

    const postMove = (columnNum) => {
        if(gameState.activePlayer === whichPlayer){
            console.log("posting")
            fetch("https://tic-tac-toe-ajw-api.web.app/move", {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({moveCol: columnNum, playerId: playerId}),
            })
            .catch(alert);
        }
    }

    const getImgSource = (rowNum, columnNum) => {
        if(gameState.board[columnNum][5-rowNum] === 'Y'){
            return 'images/yellow.png'
        }
        if(gameState.board[columnNum][5-rowNum] === 'R'){
            return 'images/red.png'
        }
        return 'images/blank.png'
    }

    return (
        <Grid container spacing={0} columns={7}>
            {[...Array(6)].map((e,rowNum) => 
            <Grid item spacing={0} style={{backgroundColor:"#3f48cc"}}>
                {[...Array(7)].map((e,columnNum) => 
                    <img 
                        src={getImgSource(rowNum, columnNum)}
                        style={{width:'14.285714285%'}} // number is 1/7
                        onClick={() => postMove(columnNum)}
                    />
                )}
            </Grid>
            )}
        </Grid>
    )
}