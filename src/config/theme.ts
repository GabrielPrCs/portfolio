import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#50C878",
        },
        secondary: {
            main: "#7145D6",
        },
    },
    components: {
        MuiModal: {
            styleOverrides: {
                root: {
                    display: "flex",
                    alignItems: "center",
                },
            },
        },
    },
});

export default theme;
