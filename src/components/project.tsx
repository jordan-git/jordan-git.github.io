import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ProjectProps {
    title: string;
    description: string;
    categories: Array<string>;
}

const ProjectContainer = styled.div`
    padding: 5px;
    margin: 10px 15px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex: 0 1 calc(100% / 2);
    box-shadow: 2px 2px #d3d3d3;
    border: 1px solid #cccccc;
    border-radius: 3px;
`;

const Title = styled.h2`
    text-align: center;
    width: 100%;
    padding: 5px;
    font-size: 0.8rem;
`;

const Description = styled.p`
    padding: 0 auto;
    font-size: 0.6rem;
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 10px;
    margin: auto auto 0;
`;

const Category = styled.span`
    border: 1px solid #a1a1a1;
    font-size: 0.6rem;
    margin: 2px 6px;
    padding: 2px 8px;
`;

const Project: FunctionComponent<ProjectProps> = ({
    title,
    description,
    categories,
}) => {
    return (
        <ProjectContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CategoryContainer>
                {categories.sort().map((category) => (
                    <Category key={category}>{category}</Category>
                ))}
            </CategoryContainer>
        </ProjectContainer>
    );
};

export default Project;
