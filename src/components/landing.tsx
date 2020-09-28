import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = () => (
    <StaticQuery
        query={graphql`
            query {
                landing: file(relativePath: { eq: "landing.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={(data) => {
            // Set ImageData.
            const imageData = data.landing.childImageSharp.fluid;
            return (
                <BackgroundImage
                    Tag="section"
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                ></BackgroundImage>
            );
        }}
    />
);

const StyledBackgroundSection = styled(BackgroundSection)`
    position: absolute;
    top: 0;
    left: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: -1
    width: 100%;
    height: 100vh;
`;

export default StyledBackgroundSection;
