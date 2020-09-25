import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const IconContainer = styled.div`
    padding-left: 20px;

    a:not(:first-child) {
        margin-left: 10px;
    }

    @media screen and (max-width: 400px) {
        margin-top: 20px;
        padding-left: 0;
    }
`;

const Icons = () => {
    const query = useStaticQuery(graphql`
        query {
            linkedin: file(relativePath: { eq: "icon-linkedin.webp" }) {
                childImageSharp {
                    fixed(width: 44, height: 44) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            github: file(relativePath: { eq: "icon-github.png" }) {
                childImageSharp {
                    fixed(width: 44, height: 44) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            mail: file(relativePath: { eq: "icon-mail.webp" }) {
                childImageSharp {
                    fixed(width: 44, height: 44) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <IconContainer>
            <a
                href="https://www.linkedin.com/in/jordan-quinlan/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img
                    fixed={query.linkedin.childImageSharp.fixed}
                    alt="LinkedIn icon"
                />
            </a>
            <a
                href="https://github.com/jordan-git"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img
                    fixed={query.github.childImageSharp.fixed}
                    alt="GitHub icon"
                />
            </a>
            <a
                href="mailto:jordanquinlan734@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img fixed={query.mail.childImageSharp.fixed} alt="Mail icon" />
            </a>
        </IconContainer>
    );
};

export default Icons;
