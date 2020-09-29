import { Category } from './enums';

export const projectData = [
    {
        title: 'SoundTube',
        description: `SoundTube is a social media and music sharing website.`,
        categories: [
            Category.HTML,
            Category.CSS,
            Category.JavaScript,
            Category.Express,
            Category.JSON,
            Category.MySQL,
            Category.Nodejs,
        ],
        post: 'soundtube',
    },
    {
        title: 'TypeScript MERN To Do Application',
        description: `A to do application created in Typescript using the MERN Stack.`,
        categories: [
            Category.HTML,
            Category.CSS,
            Category.JavaScript,
            Category.TypeScript,
            Category.MongoDB,
            Category.React,
            Category.Nodejs,
        ],
        post: 'todo',
    },
    {
        title: 'World of Tanks TypeScript API Wrapper',
        description: `A wrapper for WarGaming's API in TypeScript`,
        categories: [Category.TypeScript, Category.Nodejs],
        post: 'world-of-tanks-api',
    },
    {
        title: 'Docstring Generator',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [Category.TypeScript, Category.Nodejs],
        post: 'docstring-generator',
    },
    {
        title: 'Manga Downloader',
        description: `Search for and download the latest manga through command line.`,
        categories: [Category.Python],
        post: 'manga-downloader',
    },
    {
        title: 'Bank System',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [Category.Java, Category.SoftwareGUI],
        post: 'bank-system',
    },
    {
        title: '1',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [Category.TypeScript, Category.Nodejs],
        post: '1',
    },
    {
        title: '2',
        description: `Search for and download the latest manga through command line.`,
        categories: [Category.Python],
        post: '2',
    },
    {
        title: '3',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [Category.Java, Category.SoftwareGUI],
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
