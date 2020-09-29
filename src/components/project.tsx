import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

interface CategoryFormat {
    name: string;
    color: string;
}

interface ProjectProps {
    title: string;
    description: string;
    categories: Array<CategoryFormat>;
    post: string;
}

const ProjectContainer = styled.div`
    cursor: pointer;
    padding: 5px;
    margin: 10px 15px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex: 0 1 calc(100% / 2);
    box-shadow: 2px 2px #d3d3d3;
    border: 1px solid #cccccc;
    background: #fdfdfd;

    :hover {
        transform: scale(1.1);
        transition: 0.2s;
    }
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
    color: #111111;
    border: 1px solid ${(props) => props.color};
    font-size: 0.6rem;
    margin: 2px 6px;
    padding: 2px 8px;
`;

const Project: FunctionComponent<ProjectProps> = ({
    title,
    description,
    categories,
    post,
}) => {
    const handleClick = () => navigate(`/projects/${post}`);

    return (
        <ProjectContainer onClick={handleClick}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CategoryContainer>
                {categories.sort().map((category) => (
                    <Category key={category.name} color={category.color}>
                        {category.name}
                    </Category>
                ))}
            </CategoryContainer>
        </ProjectContainer>
    );
};

export default Project;
