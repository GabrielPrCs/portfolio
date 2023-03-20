import { Box, Button, Card, CardContent, Link, TextField, Typography } from "@mui/material";
import { FC } from "react";
import AppRoute from "../common/AppRoute";
import SendIcon from "@mui/icons-material/Send";
import { animated, useSpring, useSprings } from "@react-spring/web";

const SpringsDuration = 500;

const AnimatedTextField = animated(TextField);

const AnimatedButton = animated(Button);

const ContactMe: FC = () => {
    const [textfieldSprings] = useSprings(3, (index) => ({
        delay: index * SpringsDuration,
        config: { duration: SpringsDuration },
        from: { x: (index % 2 == 0 ? 1 : -1) * 300, opacity: 0 },
        to: { x: 0, opacity: 1 },
    }));

    const buttonSpring = useSpring({
        delay: 3 * SpringsDuration,
        config: { duration: SpringsDuration },
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1 },
    });

    return (
        <Box>
            <Card>
                <CardContent sx={{ p: 4 }}>
                    <Box mb={2}>
                        <AnimatedTextField fullWidth placeholder="Your Email" style={textfieldSprings[0]} />
                    </Box>

                    <Box mb={2}>
                        <AnimatedTextField fullWidth placeholder="Subject" style={textfieldSprings[1]} />
                    </Box>

                    <Box mb={2}>
                        <AnimatedTextField
                            fullWidth
                            placeholder="Your Message"
                            multiline
                            rows={4}
                            style={textfieldSprings[2]}
                        />
                    </Box>

                    <Box display="flex" justifyContent="flex-end">
                        <AnimatedButton startIcon={<SendIcon />} variant="contained" style={buttonSpring}>
                            Send
                        </AnimatedButton>
                    </Box>
                </CardContent>
            </Card>

            <Typography variant="h6" textAlign="justify" mt={2}>
                If you need to send a more complex message, please don't hesitate to contact me at
                <Link href="mailto:gabrielprietocassano@gmail.com" target="_blank" mx={1}>
                    gabrielprietocassano@gmail.com
                </Link>
                or
                <Link href="https://www.linkedin.com/in/gabriel-prieto-cassano/" target="_blank" mx={1}>
                    My LinkedIn
                </Link>
            </Typography>
        </Box>
    );
};

export const ContactMeRoute = new AppRoute({
    path: "/contact",
    element: <ContactMe />,
});

export default ContactMe;
