import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    padding: 20px;
    margin: 0 auto;
    max-width: 980px;
    text-align: center;
    font-size: 0.8em;

    a {
        font-weight: 600;
    }

    span:first-child {
        padding-right: 2em;
    }
`;

const Footer = () => {
    return (
        <footer>
            <FooterContainer>
                <span>&copy; Jordan Quinlan 2020</span>
                <span>
                    Made with{' '}
                    <a href="https://www.gatsbyjs.com/" target="_blank">
                        GatsbyJS
                    </a>
                </span>
            </FooterContainer>
        </footer>
    );
};

export default Footer;
