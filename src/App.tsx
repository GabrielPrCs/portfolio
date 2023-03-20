import React, { FC, ReactNode } from "react";
import theme from "./config/theme";
import { Box, Button, Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { createBrowserRouter, matchPath, Outlet, RouterProvider, useLocation, useNavigate } from "react-router-dom";
import PersonalSummary from "./components/PersonalSummary";
import { ExperienceRoute } from "./sections/Experience";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { EducationRoute } from "./sections/Education";
import { ContactMeRoute } from "./sections/ContactMe";

const NavbarButton: FC<{ path: string; icon: JSX.Element; children: ReactNode }> = ({ path, icon, children }) => {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const variant = matchPath(pathname, path) ? "outlined" : "text";

    return (
        <Button size="large" startIcon={icon} variant={variant} onClick={() => navigate(path)}>
            {children}
        </Button>
    );
};

const Root: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Grid container mb={10} spacing={10} p={2}>
                    <Grid item xs={12} md={5}>
                        <PersonalSummary />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box my={3} display="flex" justifyContent="space-evenly">
                            <NavbarButton icon={<WorkIcon />} path={ExperienceRoute.getPath()}>
                                EXPERIENCE
                            </NavbarButton>

                            <NavbarButton icon={<SchoolIcon />} path={EducationRoute.getPath()}>
                                EDUCATION
                            </NavbarButton>

                            <NavbarButton icon={<ContactIcon />} path={ContactMeRoute.getPath()}>
                                CONTACT ME
                            </NavbarButton>
                        </Box>

                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [ExperienceRoute, EducationRoute, ContactMeRoute],
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
