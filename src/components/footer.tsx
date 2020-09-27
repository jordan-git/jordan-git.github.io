import { Link } from 'gatsby';
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

    div {
        font-weight: normal;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
`;

const Footer = () => {
    return (
        <footer>
            <FooterContainer>
                <Link to="/about">
                    <div>&copy; Jordan Quinlan 2020</div>
                </Link>
                <Icons />
            </FooterContainer>
        </footer>
    );
};

export default Footer;
