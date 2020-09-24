import React from 'react';
import styled from 'styled-components';

// import '../styles/header.scss';

const NavContainer = styled.section`
    display: flex;
    margin: 0 auto;
    padding: 0 30px;
    max-width: 980px;
`;

const NavLink = styled.a`
    flex: 1;
    text-align: right;

    &:not(:first-child) {
        margin-left: 20px;
    }
`;

const Nav = styled.nav`
    display: flex;
    padding: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 540px) {
        #logo {
            width: 100%;
            text-align: center;
        }
    }
`;

const NavLinkContainer = styled.div`
    @media screen and (max-width: 540px) {
        display: none;
    }
`;

const Header = () => {
    return (
        <header>
            <NavContainer>
                <Nav>
                    <a id="logo" href="/">
                        jordan quinlan
                    </a>
                    <NavLinkContainer>
                        <NavLink href="/">home</NavLink>
                        <NavLink href="/projects">projects</NavLink>
                        <NavLink href="/about">about</NavLink>
                    </NavLinkContainer>
                </Nav>
            </NavContainer>
        </header>
    );
};

export default Header;
