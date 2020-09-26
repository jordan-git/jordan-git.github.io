import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BreadcrumbContainer = styled.div`
    a {
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const ProjectTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout>
            <SEO />
            <section class="project-post">
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
            </section>
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
