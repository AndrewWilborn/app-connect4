import { Grid } from "@mui/material";

export default function GameGrid() {

    return (
        <Grid container spacing={0} columns={7}>
            {[...Array(6)].map((e,i) => 
            <Grid item spacing={0}>
                {[...Array(7)].map((e,i) => <img src="/images/blank.png" style={{width:'14%'}}/>)}
            </Grid>
            )}
        </Grid>
    )
}