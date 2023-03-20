import Job from "../../models/Job";

const jobs: Job[] = [
    {
        id: 1,
        start: new Date("2021-04-01T00:00:00.000-03:00"),
        title: "Residencial Building Access Control System",
        position: "SSR Software Engineer",
        summary: [
            "Access control system for Aston Martin Residences Miami building. Mobile application and administrative web platform development. Integration of custom hardware into the solution.",
        ],
        skills: ["Flutter", "React.js", ".NET Core", "SQL Server", "Typescript"],
        images: [
            "am_access_system/image.png",
            "am_access_system/image2.jpg",
            "am_access_system/image.png",
            "am_access_system/image.png",
            "am_access_system/image2.jpg",
            "am_access_system/image.png",
        ],
    },
    {
        id: 2,
        start: new Date("2023-03-15T00:00:00.000-03:00"),
        finish: new Date("2023-03-20T00:00:00.000-03:00"),
        title: "This portfolio",
        position: "Personal Project",
        summary: ["If you want to, you can browse the whole source code of this website in the following link:"],
        skills: ["React.js", "React Spring", "MUI"],
        link: {
            title: "Source Code",
            url: "http://example.com/",
        },
    },
    {
        id: 3,
        start: new Date("2019-08-01T00:00:00.000-03:00"),
        finish: new Date("2020-07-31T00:00:00.000-03:00"),
        title: "Mar del Plata's Port Administrative System",
        position: "Full-Stack Developer",
        summary: [
            "Exploitation and Marketing area of the Mar del Plata Regional Port Consortium administrative system development, commissioned by the Faculty of Engineering of the UNMDP.",
        ],
        skills: ["Laravel", "Vue.js", "MySQL", "Linux Server Administration"],
    },
    {
        id: 4,
        start: new Date("2018-07-01T00:00:00.000-03:00"),
        finish: new Date("2019-11-30T00:00:00.000-03:00"),
        title: "Mar del Plata's Port Access Control System",
        position: "Full-Stack Developer",
        summary: [
            "Exploitation and Marketing area of ​​the Mar del Plata Regional Port Consortium administrative system development, commissioned by the Faculty of Engineering of the UNMDP.",
            "This project served as my graduation thesis, which can be found at the following link:",
        ],
        skills: ["MQTT", "Laravel", "Vue.js", "MySQL", "Linux Server Administration"],
        link: {
            title: "Publication (Spanish)",
            url: "http://rinfi.fi.mdp.edu.ar/bitstream/handle/123456789/478/BColautti-GPrietoCassano-TFG-IIn-2020.pdf",
        },
    },
];

export default jobs;
