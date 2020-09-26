import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from '../components/project';
import CategoryBox from '../components/category-box';

const ProjectHeader = styled.h1`
    margin: 0 auto 10px;
    padding: 5px;
    overflow: hidden;

    @media screen and (max-width: 420px) {
        font-size: 1.8rem;
    }
`;

const ProjectDescription = styled.h3`
    font-weight: normal;
    font-size: 1rem;
    margin: 0 auto 10px;

    @media screen and (max-width: 420px) {
        font-size: 0.8rem;
    }
`;

const ProjectContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 720px) {
        margin: 0 auto;
        max-width: 400px;
        grid-template-columns: 1fr;
    }
`;

const myProjects = [
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

const Projects = () => {
    const [projects, setProjects] = useState(myProjects);

    // const [
    //     selectedCategory,
    //     setSelectedCategory,
    // ] = useState<HTMLSpanElement | null>(null);

    let categories = [];

    // Create an array containing every category
    for (const project of myProjects) {
        categories = [...categories, ...project.categories];
    }

    // Remove duplicates
    categories = [...new Set(categories)];

    // if (selectedCategory !== null) {
    //     const filteredProjects = [];
    //     myProjects.map((project) => {
    //         let matchesCategory = false;
    //         for (const category of project.categories) {
    //             if (category === selectedCategory.innerHTML)
    //                 matchesCategory = true;
    //         }
    //         if (matchesCategory) filteredProjects.push(project);
    //     });

    //     setProjects(filteredProjects);
    // }

    const filterProjects = (category: string | null) => {
        if (category === null) return setProjects(myProjects);

        const filteredProjects = [];
        myProjects.map((project) => {
            let matchesCategory = false;
            for (const projectCategory of project.categories) {
                if (projectCategory === category) matchesCategory = true;
            }
            if (matchesCategory) filteredProjects.push(project);
        });

        setProjects(filteredProjects);
    };

    return (
        <Layout>
            <SEO />
            <ProjectHeader>Projects</ProjectHeader>
            <ProjectDescription>
                Here is a list of all the projects I have created.
            </ProjectDescription>
            <CategoryBox
                categories={categories}
                filterProjects={filterProjects}
            />
            <ProjectContainer>
                {projects.map((projectInfo) => (
                    <Project key={projectInfo.title} {...projectInfo} />
                ))}
            </ProjectContainer>
        </Layout>
    );
};

export default Projects;
