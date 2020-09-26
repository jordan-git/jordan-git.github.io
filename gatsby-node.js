exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const projectTemplate = require.resolve(`./src/templates/project.tsx`);
    const result = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: projectTemplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
            },
        });
    });
};
