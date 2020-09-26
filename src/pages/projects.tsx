import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from '../components/project';
import CategoryBox from '../components/category-box';

import ProjectData from '../data/projects';

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

const Projects = () => {
    const [projects, setProjects] = useState(ProjectData);

    let categories = [];

    // Create an array containing every category
    for (const project of ProjectData) {
        categories = [...categories, ...project.categories];
    }

    // Remove duplicates
    categories = [...new Set(categories)];

    const filterProjects = (category: string | null) => {
        if (category === null) return setProjects(ProjectData);

        const filteredProjects = [];
        ProjectData.map((project) => {
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
