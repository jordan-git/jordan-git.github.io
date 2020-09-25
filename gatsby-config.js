module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: 'gatsby-plugin-offline',
            options: {
                precachePages: ['/', '/projects', '/about'],
            },
        },
    ],
};
