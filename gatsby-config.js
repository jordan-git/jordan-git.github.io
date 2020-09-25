module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images/`,
            },
        },
    ],
};
