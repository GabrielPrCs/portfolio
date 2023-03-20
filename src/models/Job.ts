export default interface Job {
    id: number;
    start: Date;
    finish?: Date;
    title: string;
    position: string;
    summary: string[];
    skills: string[];
    link?: { title: string; url: string };
    moreInformation?: string;
    images?: string[];
}
