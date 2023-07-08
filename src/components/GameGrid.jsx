import { Grid } from "@mui/material";

export default function GameGrid({board}) {


    const getImgSource = (rowNum, columnNum) => {
        if(board[columnNum][5-rowNum] === 'Y'){
            return 'images/yellow.png'
        }
        if(board[columnNum][5-rowNum] === 'R'){
            return 'images/red.png'
        }
        return 'images/blank.png'
    }

    return (
        <Grid container spacing={0} columns={7}>
            {[...Array(6)].map((e,rowNum) => 
            <Grid item spacing={0}>
                {[...Array(7)].map((e,columnNum) => 
                    <img 
                        src={getImgSource(rowNum, columnNum)}
                        style={{width:'14%'}}
                        onClick={() => console.log(columnNum)}
                    />
                )}
            </Grid>
            )}
        </Grid>
    )
}