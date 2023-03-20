import { Box } from "@mui/system";
import { FC } from "react";
import jobs from "../assets/db/jobs";
import AppRoute from "../common/AppRoute";
import JobCard from "../components/JobCard";

const Experience: FC = () => {
    return (
        <>
            {jobs.map((job, index) => (
                <Box key={job.id} mb={1}>
                    <JobCard job={job} elevation={index % 2 === 0 ? 1 : 0} />
                </Box>
            ))}
        </>
    );
};

export const ExperienceRoute = new AppRoute({
    path: "/experience",
    element: <Experience />,
});

export default Experience;
