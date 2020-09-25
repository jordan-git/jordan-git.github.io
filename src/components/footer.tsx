import React from 'react';
import styled from 'styled-components';

import Icons from './images/icons';

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    max-width: 980px;
    text-align: center;
    font-size: 0.8em;

    a {
        font-weight: 600;
    }

    @media screen and (max-width: 400px) {
        display: block;
        margin-top: 10px;

        span:first-child {
            padding-right: 0;
            padding-bottom: 10px;
        }
    }
`;

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

const Footer = () => {
    return (
        <footer>
            <FooterContainer>
                <div>&copy; Jordan Quinlan 2020</div>
                <Icons />
            </FooterContainer>
        </footer>
    );
};

export default Footer;
