import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PostContainer = styled.section`
    a {
        font-weight: bold;
        color: black;
    }

    ul {
        padding: 10px;
        list-style-type: none;
    }

    li {
        display: inline-block;
    }
`;

const BreadcrumbContainer = styled.div`
    a {
        text-decoration: underline;
    }
`;

const ProjectTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout>
            <SEO />
            <PostContainer className="project-post">
                <BreadcrumbContainer>
                    <Link to="/projects">projects</Link> /{' '}
                    <Link to={`/projects/${frontmatter.breadcrumb}`}>
                        {frontmatter.breadcrumb}
                    </Link>
                </BreadcrumbContainer>
                <h1>{frontmatter.title}</h1>
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </PostContainer>
        </Layout>
    );
};

export default ProjectTemplate;

export const pageQuery = graphql`
    query ProfilePost($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                breadcrumb
                title
            }
        }
    }
`;
