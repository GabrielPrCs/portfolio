import { Chip, Box, Typography, Divider, Grid, Card, Button, Link, CardContent } from "@mui/material";
import { animated, easings, useSpring } from "@react-spring/web";
import Job from "../models/Job";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WorkIcon from "@mui/icons-material/Work";
import Moment from "react-moment";
import { FC } from "react";

const SPRING_DELAY = 500;

const AnimatedBox = animated(Box);

const AnimatedWorkOutlineIcon = animated(WorkOutlineIcon);

const AnimatedWorkIcon = animated(WorkIcon);

const SkillChip = animated(Chip);

const JobCard: FC<{ job: Job; elevation?: number }> = ({ job, elevation = 0 }) => {
    const contentSpring = useSpring({
        config: { duration: 3 * SPRING_DELAY, easing: easings.easeInExpo },
        from: { x: 100, opacity: 0 },
        to: { x: 0, opacity: 1 },
    });

    const iconSpring = useSpring({
        delay: SPRING_DELAY,
        config: { duration: SPRING_DELAY },
        from: { x: -40, opacity: 0 },
        to: { x: 0, opacity: 1 },
    });

    const skillsSpring = useSpring({
        delay: 4 * SPRING_DELAY,
        config: { duration: SPRING_DELAY },
        from: { y: -50, opacity: 0 },
        to: { y: 0, opacity: 1 },
    });

    const currentJob = !!!job.finish;

    return (
        <Card elevation={elevation}>
            <CardContent sx={{ padding: 4 }}>
                <Grid container>
                    <Grid item xs={12} sm={1.5} pt={3.3}>
                        {currentJob ? (
                            <AnimatedWorkIcon color="primary" fontSize="large" style={iconSpring} />
                        ) : (
                            <AnimatedWorkOutlineIcon color="primary" fontSize="large" style={iconSpring} />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={10.5}>
                        <AnimatedBox style={contentSpring}>
                            <Typography variant="subtitle1" fontStyle="italic">
                                {job.title}
                            </Typography>

                            <Grid container spacing={1} mb={2}>
                                <Grid item xs={12} sm={7} md={8}>
                                    <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
                                        {job.position}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={5} md={4} display="flex" justifyContent={{ sm: "flex-end" }}>
                                    <Box>
                                        <Typography display="inline">
                                            <Moment format="MMM YYYY" date={job.start} />
                                        </Typography>

                                        {" - "}

                                        {!currentJob ? (
                                            <Typography display="inline">
                                                <Moment format="MMM YYYY" date={job.finish} />
                                            </Typography>
                                        ) : (
                                            <Typography display="inline" fontWeight="bold" color="primary">
                                                Present
                                            </Typography>
                                        )}
                                    </Box>
                                </Grid>
                            </Grid>

                            {job.summary.map((line) => (
                                <Typography key={line} textAlign="justify" mb={2}>
                                    {line}
                                </Typography>
                            ))}

                            <Grid container spacing={1} mb={2} display="flex" alignItems="center">
                                <Grid item xs={6}>
                                    {job.link && (
                                        <Link target="_blank" href={job.link.url}>
                                            {job.link.title}
                                        </Link>
                                    )}
                                </Grid>
                                <Grid item xs={6} display="flex" justifyContent="flex-end">
                                    {/* <Button size="small">Learn more</Button> */}
                                </Grid>
                            </Grid>

                            <Divider />
                        </AnimatedBox>

                        <Box mt={2}>
                            {job.skills.map((skill, index) => (
                                <Box key={index} display="inline-block" mr={1} mb={1}>
                                    <SkillChip label={skill} color="primary" style={skillsSpring} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default JobCard;
