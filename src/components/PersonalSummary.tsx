import { FC, ReactNode } from "react";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import profile from "../assets/images/profile.jpeg";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Moment from "react-moment";
import styled from "@emotion/styled";
import SquareIcon from "@mui/icons-material/Square";
import TranslateIcon from "@mui/icons-material/Translate";
import stack from "../assets/db/stack";

// Best day on human history.
const Birthday = new Date("1995-07-06T00:00:00.000-03:00");

// My profile picture. A responsive img that respects the aspect ratio on any screen size.
const ProfileImage = animated(styled.img`
    border-radius: 100%;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
`);

// A wrapper of the MUI Box component ready to be used with ReactSpring.
const AnimatedBox = animated(Box);

const SummaryRow: FC<{ icon: JSX.Element; children: ReactNode }> = ({ icon, children }) => {
    return (
        <Box display="flex" justifyContent="space-between" py={2}>
            {icon}
            {children}
        </Box>
    );
};

const PersonalSummary: FC = () => {
    const imageSprings = useSpring({
        config: { duration: 500 },
        from: { opacity: 0,  },
        to: { opacity: 1,  },
    });

    const otherSprings = useSpring({
        config: { duration: 1000 },
        from: { y: 300, opacity: 0 },
        to: { y: 0, opacity: 1 },
    });

    return (
        <>
            <Box bgcolor="primary.dark" mx={{ xs: 15, md: 5 }} p={0.5} mb={5} borderRadius={100}>
                <ProfileImage src={profile} style={imageSprings} alt="Gabriel Prieto Cassano" />
            </Box>

            <AnimatedBox position="sticky" top="0" style={otherSprings}>
                <Box textAlign="center" mt={1} mb={3}>
                    <Typography variant="h4" fontWeight="bold">
                        Gabriel Prieto Cassano
                    </Typography>
                    <Typography variant="h5" fontStyle="italic">
                        Software Engineer
                    </Typography>
                </Box>

                <Box px={7}>
                    <Typography textAlign="justify" mb={2}>
                        Computer Engineer passionate about new technologies and development. I enjoy implementing
                        challenging solutions, working in teams, and efficiently solving complex problems with attention
                        to implementation details.
                    </Typography>

                    <Divider />

                    <SummaryRow icon={<TranslateIcon />}>
                        <Typography fontWeight="bold" textAlign="right">
                            Spanish (Native), English
                        </Typography>
                    </SummaryRow>

                    <SummaryRow icon={<CakeIcon />}>
                        <Typography fontWeight="bold" textAlign="right">
                            <Moment to={Birthday} />
                        </Typography>
                    </SummaryRow>

                    <SummaryRow icon={<LocationOnIcon />}>
                        <Typography fontWeight="bold" textAlign="right">
                            Mar del Plata, Buenos Aires, Argentina
                        </Typography>
                    </SummaryRow>

                    <Divider />

                    <Box my={2}>
                        <Typography variant="h6" fontWeight="bold" mb={2}>
                            Technologies Stack
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={6} display="flex" flexDirection="column">
                                {stack.current.map((skill) => (
                                    <Box key={skill.name} my={1}>
                                        <Chip label={skill.name} color="primary" />
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={6} display="flex" flexDirection="column">
                                {stack.backlog.map((skill) => (
                                    <Box key={skill.name} my={1}>
                                        <Chip label={skill.name} color="secondary" />
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>

                        <Box mt={2}>
                            <Box display="inline-flex" mr={2}>
                                <SquareIcon fontSize="small" color="primary" />

                                <Typography variant="subtitle2" fontStyle="italic">
                                    Current
                                </Typography>
                            </Box>

                            <Box display="inline-flex">
                                <SquareIcon fontSize="small" color="secondary" />

                                <Typography variant="subtitle2" fontStyle="italic">
                                    Previously used
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AnimatedBox>
        </>
    );
};

export default PersonalSummary;
