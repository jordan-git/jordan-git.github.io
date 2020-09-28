import React from 'react';
import styled from 'styled-components';

import '../styles/burger.scss';

const BurgerContainer = styled.div`
    padding: 16px;

    border-radius: 50%;
    background: #ccc;
    opacity: 0.8;
    z-index: 2;
    position: fixed;
    bottom: 90px;
    right: 25px;
    display: none;
    -webkit-user-select: none;
    user-select: none;

    span {
        margin-top: 8px;
    }

    span:first-of-type {
        margin-top: 0;
    }

    @media screen and (max-width: 540px) {
        display: block;
    }
`;

const BurgerBar = styled.span`
    display: block;
    background: #000000;
    height: 4px;
    width: 48px;
    border-radius: 3px;
`;

const Checkbox = styled.input`
    position: absolute;
    width: 40px;
    height: 40px;
    z-index: 1;
    opacity: 0;
    -webkit-touch-callout: none;
`;

const BurgerMenu = styled.ul`
    width: 100%;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    position: fixed;
    bottom: 160px;
    right: 0;
    background: #ededed;
    list-style-type: none;
`;

const toggleMenu = () => {
    const menu = document.getElementById('menu');
    if (menu != null) menu.classList.toggle('nav-open');
};

const Burger = () => {
    return (
        <>
            <BurgerContainer id="burger" onClick={toggleMenu}>
                <BurgerBar />
                <BurgerBar />
                <BurgerBar />
            </BurgerContainer>
            <BurgerMenu id="menu">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/projects">
                    <li>Projects</li>
                </a>
                <a href="/about">
                    <li>About</li>
                </a>
            </BurgerMenu>
        </>
    );
};

export default Burger;
