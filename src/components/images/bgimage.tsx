import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImageContainer = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
    & img {
        filter: brightness(40%);
    }
`;

const BgImage = () => {
    const query = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "landing.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `);

    return (
        <ImageContainer>
            <Img
                fluid={query.image.childImageSharp.fluid}
                alt="Background image"
            />
        </ImageContainer>
    );
};

export default BgImage;
