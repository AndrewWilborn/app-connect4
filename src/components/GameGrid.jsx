import { Grid } from "@mui/material";

export default function GameGrid() {

    return (
        <Grid container spacing={0} columns={7}>
            {[...Array(6)].map((e,ix) => 
            <Grid item spacing={0}>
                {[...Array(7)].map((e,columnNum) => 
                    <img 
                        src="/images/blank.png"
                        style={{width:'14%'}}
                        onClick={() => console.log(columnNum)}
                    />
                )}
            </Grid>
            )}
        </Grid>
    )
}