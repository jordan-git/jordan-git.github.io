import { Category } from './enums';

export const projectData = [
    {
        title: 'SoundTube',
        description: `SoundTube is a social media and music sharing website.`,
        categories: [
            Category.HTML.toObject(),
            Category.CSS.toObject(),
            Category.JavaScript.toObject(),
            Category.Express.toObject(),
            Category.JSON.toObject(),
            Category.MySQL.toObject(),
            Category.Nodejs.toObject(),
        ],
        post: 'soundtube',
    },
    {
        title: 'TypeScript MERN To Do Application',
        description: `A to do application created in Typescript using the MERN Stack.`,
        categories: [
            Category.HTML.toObject(),
            Category.CSS.toObject(),
            Category.JavaScript.toObject(),
            Category.TypeScript.toObject(),
            Category.MongoDB.toObject(),
            Category.React.toObject(),
            Category.Nodejs.toObject(),
        ],
        post: 'todo',
    },
    {
        title: 'World of Tanks TypeScript API Wrapper',
        description: `A wrapper for WarGaming's API in TypeScript`,
        categories: [
            Category.TypeScript.toObject(),
            Category.Nodejs.toObject(),
        ],
        post: 'world-of-tanks-api',
    },
    {
        title: 'Docstring Generator',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [
            Category.TypeScript.toObject(),
            Category.Nodejs.toObject(),
        ],
        post: 'docstring-generator',
    },
    {
        title: 'Manga Downloader',
        description: `Search for and download the latest manga through command line.`,
        categories: [Category.Python.toObject()],
        post: 'manga-downloader',
    },
    {
        title: 'Bank System',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [Category.Java.toObject(), Category.SoftwareGUI.toObject()],
        post: 'bank-system',
    },
    {
        title: '1',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [
            Category.TypeScript.toObject(),
            Category.Nodejs.toObject(),
        ],
        post: '1',
    },
    {
        title: '2',
        description: `Search for and download the latest manga through command line.`,
        categories: [Category.Python.toObject()],
        post: '2',
    },
    {
        title: '3',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [Category.Java.toObject(), Category.SoftwareGUI.toObject()],
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
