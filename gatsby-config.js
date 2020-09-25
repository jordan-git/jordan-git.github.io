module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icons/favicon.svg',
            },
        },
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
                // appendScript: require.resolve('src/scripts/custom-sw.ts'),
            },
        },
    ],
    siteMetadata: {
        title: 'Jordan Quinlan',
        titleTemplate: '%s',
        description: `Jordan Quinlan's website.`,
        url: 'https://jordan-git.github.io',
        image: 'favicon.svg',
    },
};
