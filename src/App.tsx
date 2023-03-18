import React from "react";
import theme from "./config/theme";
import { HomeRoute } from "./sections/Home";
import { Box, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection="column" height="100vh">
                <Navbar />

                <Box bgcolor="red" paddingTop={4} flex={1}>
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [HomeRoute],
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
