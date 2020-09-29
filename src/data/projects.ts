import { Category, Color } from './enums';

export const projectData = [
    {
        title: 'SoundTube',
        description: `SoundTube is a social media and music sharing website.`,
        categories: [
            Category.HTML.data(),
            Category.CSS.data(),
            Category.JavaScript.data(),
            Category.Express.data(),
            Category.JSON.data(),
            Category.MySQL.data(),
            Category.Nodejs.data(),
        ],
        post: 'soundtube',
    },
    {
        title: 'TypeScript MERN To Do Application',
        description: `A to do application created in Typescript using the MERN Stack.`,
        categories: [
            Category.HTML.data(),
            Category.CSS.data(),
            Category.JavaScript.data(),
            Category.TypeScript.data(),
            Category.MongoDB.data(),
            Category.React.data(),
            Category.Nodejs.data(),
        ],
        post: 'todo',
    },
    {
        title: 'World of Tanks TypeScript API Wrapper',
        description: `A wrapper for WarGaming's API in TypeScript`,
        categories: [Category.TypeScript.data(), Category.Nodejs.data()],
        post: 'world-of-tanks-api',
    },
    {
        title: 'Docstring Generator',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [Category.TypeScript.data(), Category.Nodejs.data()],
        post: 'docstring-generator',
    },
    {
        title: 'Manga Downloader',
        description: `Search for and download the latest manga through command line.`,
        categories: [Category.Python.data()],
        post: 'manga-downloader',
    },
    {
        title: 'Bank System',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [Category.Java.data(), Category.SoftwareGUI.data()],
        post: 'bank-system',
    },
    {
        title: '1',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [Category.TypeScript.data(), Category.Nodejs.data()],
        post: '1',
    },
    {
        title: '2',
        description: `Search for and download the latest manga through command line.`,
        categories: [Category.Python.data()],
        post: '2',
    },
    {
        title: '3',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [Category.Java.data(), Category.SoftwareGUI.data()],
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
