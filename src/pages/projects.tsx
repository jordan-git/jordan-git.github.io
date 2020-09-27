import React, { useState } from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from '../components/project';
import CategoryBox from '../components/category-box';

import { projectData, getCategories } from '../data/projects';

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
    const [projects, setProjects] = useState(projectData);
    const categories = getCategories();

    const filterProjects = (category: string | null) => {
        if (category === null) {
            setProjects(projectData);
            return projectData;
        }

        const filteredProjects = [];
        projectData.map((project) => {
            let matchesCategory = false;
            for (const projectCategory of project.categories) {
                if (projectCategory.name === category) matchesCategory = true;
            }
            if (matchesCategory) filteredProjects.push(project);
        });

        setProjects(filteredProjects);
        return filterProjects;
    };

    return (
        <Layout>
            <SEO />
            <ProjectHeader>Projects</ProjectHeader>
            <ProjectDescription>
                Here is a list of all the projects I have created (so far)!
            </ProjectDescription>
            <ProjectDescription style={{ fontWeight: 'bold' }}>
                Click on a project for more information
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
