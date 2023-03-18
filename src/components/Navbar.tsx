import { AppBar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeRoute } from "../sections/Home";

export default () => {
    return (
        <AppBar position="relative" elevation={0}>
            <Container>
                <Link to={HomeRoute.getPath()}>Home</Link>
            </Container>
        </AppBar>
    );
};
