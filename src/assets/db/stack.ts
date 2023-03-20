import Skill from "../../models/Skill";

const stack: { current: Skill[]; backlog: Skill[] } = {
    current: [
        { name: "Flutter", experienceYears: 3 },
        { name: "React.js", experienceYears: 3 },
        { name: ".NET Core", experienceYears: 2 },
        { name: "SQL Server", experienceYears: 4 },
    ],
    backlog: [
        { name: "PHP", experienceYears: 2 },
        { name: "MQTT", experienceYears: 2 },
        { name: "Firebase", experienceYears: 1 },
    ],
};

export default stack;
