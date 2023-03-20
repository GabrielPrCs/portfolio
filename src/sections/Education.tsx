import { Card } from "@mui/material";
import { FC } from "react";
import AppRoute from "../common/AppRoute";

const Education: FC = () => {
    return <Card>Education</Card>;
};

export const EducationRoute = new AppRoute({
    path: "/education",
    element: <Education />,
});

export default Education;
