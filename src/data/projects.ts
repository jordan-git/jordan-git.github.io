export const projectData = [
    {
        title: 'SoundTube',
        description: `SoundTube is a social media and music sharing website.`,
        categories: [
            { name: 'HTML', color: '#e44d26' },
            { name: 'CSS', color: '#264de4;' },
            { name: 'JavaScript', color: '#264de4;' },
            { name: 'Express', color: '' },
            { name: 'JSON', color: '#466df4' },
            { name: 'MySQL', color: '#47809d' },
            { name: 'Node.js', color: '#70a761' },
        ],
        post: 'soundtube',
    },
    {
        title: 'TypeScript MERN To Do Application',
        description: `A to do application created in Typescript using the MERN Stack.`,
        categories: [
            { name: 'HTML', color: '#e44d26' },
            { name: 'CSS', color: '#264de4;' },
            { name: 'JavaScript', color: '#264de4;' },
            { name: 'TypeScript', color: '#3178c6' },
            { name: 'MongoDB', color: '#e58f14' },
            { name: 'Express', color: '' },
            { name: 'React', color: '#61dafb' },
            { name: 'Node.js', color: '#70a761' },
        ],
        post: 'todo',
    },
    {
        title: 'World of Tanks TypeScript API Wrapper (WIP)',
        description: `A wrapper for WarGaming's API in TypeScript`,
        categories: [
            { name: 'TypeScript', color: '#3178c6' },
            { name: 'Node.js', color: '#70a761' },
        ],
        post: 'world-of-tanks-api',
    },
    {
        title: 'Docstring Generator',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: [
            { name: 'TypeScript', color: '#3178c6' },
            { name: 'Node.js', color: '#70a761' },
        ],
        post: 'docstring-generator',
    },
    {
        title: 'Manga Downloader',
        description: `Search for and download the latest manga through command line.`,
        categories: [{ name: 'Python', color: '#61dafb' }],
        post: 'manga-downloader',
    },
    {
        title: 'Bank System',
        description: `A bank GUI that supports basic banking features built using NetBeans GUI Builder.`,
        categories: [
            { name: 'Java', color: '#e58f14' },
            { name: 'Software GUI', color: '' },
        ],
        post: 'bank-system',
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
