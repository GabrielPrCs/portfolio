import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import profile from "../assets/images/profile.jpeg";
import AppRoute from "../common/AppRoute";

const ProfileImage = styled.img`
    border-radius: 100%;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
`;

const Home = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={4}>
                    <Box bgcolor="primary.main" p={2} borderRadius={100}>
                        <ProfileImage src={profile} alt="Gabriel Prieto Cassano" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export const HomeRoute = new AppRoute({
    path: "/home",
    element: <Home />,
});

export default Home;
