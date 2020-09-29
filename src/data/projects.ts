import { Color } from './enums';

export const projectData = [
    {
        title: 'SoundTube',
        description: `SoundTube is a social media and music sharing website.`,
        categories: [
            { name: 'HTML', color: Color.HTML },
            { name: 'CSS', color: Color.CSS },
            { name: 'JavaScript', color: Color.JavaScript },
            { name: 'Express', color: Color.Express },
            { name: 'JSON', color: Color.JSON },
            { name: 'MySQL', color: Color.MySQL },
            { name: 'Node.js', color: Color.Nodejs },
        ],
        post: 'soundtube',
    },
    {
        title: 'TypeScript MERN To Do Application',
        description: `A to do application created in Typescript using the MERN Stack.`,
        categories: [
            { name: 'HTML', color: Color.HTML },
            { name: 'CSS', color: Color.CSS },
            { name: 'JavaScript', color: Color.JavaScript },
            { name: 'TypeScript', color: Color.TypeScript },
            { name: 'MongoDB', color: Color.Java },
            { name: 'Express', color: Color.Express },
            { name: 'React', color: Color.React },
            { name: 'Node.js', color: Color.Nodejs },
        ],
        post: 'todo',
    },
    {
        title: 'World of Tanks TypeScript API Wrapper',
        description: `A wrapper for WarGaming's API in TypeScript`,
        categories: [
            { name: 'TypeScript', color: Color.TypeScript },
            { name: 'Node.js', color: Color.Nodejs },
        ],
        post: 'world-of-tanks-api',
    },
    {
        title: 'Docstring Generator',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [
            { name: 'TypeScript', color: Color.TypeScript },
            { name: 'Node.js', color: Color.Nodejs },
        ],
        post: 'docstring-generator',
    },
    {
        title: 'Manga Downloader',
        description: `Search for and download the latest manga through command line.`,
        categories: [{ name: 'Python', color: Color.React }],
        post: 'manga-downloader',
    },
    {
        title: 'Bank System',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [
            { name: 'Java', color: Color.Java },
            { name: 'Software GUI', color: Color.SoftwareGUI },
        ],
        post: 'bank-system',
    },
    {
        title: '1',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [
            { name: 'TypeScript', color: Color.TypeScript },
            { name: 'Node.js', color: Color.Nodejs },
        ],
        post: '1',
    },
    {
        title: '2',
        description: `Search for and download the latest manga through command line.`,
        categories: [{ name: 'Python', color: Color.React }],
        post: '2',
    },
    {
        title: '3',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [
            { name: 'Java', color: Color.Java },
            { name: 'Software GUI', color: Color.SoftwareGUI },
        ],
        post: '3',
    },
];

export const getCategories = (): { name: string; color: string }[] => {
    let categories: { name: string; color: string }[] = [];

    // Create an array containing every category
    for (const project of projectData) {
        categories = categories.concat(project.categories);
    }

    return Object.values(
        categories.reduce(
            (acc, cur) => Object.assign(acc, { [cur.name]: cur }),
            {}
        )
    );
};
