export const projectData = [
    {
        title: 'SoundTube',
        description: `SoundTube is a social media and music sharing website.`,
        categories: [
            'HTML',
            'CSS',
            'JavaScript',
            'Express',
            'JSON',
            'MySQL',
            'Node',
        ],
    },
    {
        title: 'TypeScript MERN To Do Application',
        description: `A to do application created in Typescript using the MERN Stack.`,
        categories: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'MongoDB',
            'Express',
            'React',
            'Node',
        ],
    },
    {
        title: 'World of Tanks TypeScript API Wrapper (WIP)',
        description: `A wrapper for WarGaming's API in TypeScript`,
        categories: ['TypeScript', 'Node'],
    },
    {
        title: 'Docstring Generator',
        description: `A Visual Studio Code extension for generating docstrings.`,
        categories: ['TypeScript', 'Node'],
    },
    {
        title: 'Manga Downloader',
        description: `Search for and download the latest manga through command line.`,
        categories: ['Python'],
    },
    {
        title: 'Bank System',
        description: `A bank GUI that supports basic banking features.`,
        categories: ['Java', 'Netbeans'],
    },
];

export const categories = () => {
    let categories = [];

    // Create an array containing every category
    for (const project of projectData) {
        categories = [...categories, ...project.categories];
    }

    // Remove duplicates and return as array
    return [...new Set(categories)];
};
