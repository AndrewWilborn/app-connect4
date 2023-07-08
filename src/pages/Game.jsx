import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import GameGrid from "../components/GameGrid";
import AppLayout from "../layout/AppLayout";

export default function Game({username}){

    return (
        <AppLayout>
            <Container component='main' maxWidth='md'>
                <Typography type='h1' variant='h2' align='center'>Display</Typography>
                <GameGrid />
            </Container>
        </AppLayout>
    )
}