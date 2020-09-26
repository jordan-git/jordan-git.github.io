import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectTemplate = ({ data }) => {
    const { frontmatter, html } = data.markdownRemark;

    return (
        <Layout>
            <SEO />
            <section>
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
                title
            }
        }
    }
`;
