import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavContainer = styled.section`
    display: flex;
    margin: 0 auto;
    padding: 0 30px;
    max-width: 980px;
`;

const NavLink = styled((props) => <Link {...props} activeClassName="active" />)`
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
        padding: 30px 20px;

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
                    <Link id="logo" to="/">
                        jordan quinlan
                    </Link>
                    <NavLinkContainer>
                        <NavLink to="/projects">projects</NavLink>
                        <NavLink to="/about">about</NavLink>
                    </NavLinkContainer>
                </Nav>
            </NavContainer>
        </header>
    );
};

export default Header;
