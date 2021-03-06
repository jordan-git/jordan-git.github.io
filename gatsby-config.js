module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-transformer-remark',
        // 'gatsby-plugin-offline',
        // 'gatsby-plugin-layout',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icons/favicon.svg',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        // {
        //     resolve: 'gatsby-plugin-offline',
        //     options: {
        //         precachePages: ['/', '/projects', '/about'],
        //         // appendScript: require.resolve('src/scripts/custom-sw.ts'),
        //     },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `project-pages`,
                path: `${__dirname}/src/data/markdown/projects`,
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
