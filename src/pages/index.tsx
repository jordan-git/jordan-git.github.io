import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Landing = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url('./landing.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-weight: 400;
        font-size: 3.5rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 1rem;
    }

    h2 {
        color: #ffffff;
        font-weight: 400;
        font-size: 1.8rem;
        text-transform: capitalize;
    }

    // Button
    button {
        display: inline-block;
        margin-top: 2rem;
        padding: 0.5rem 2rem;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 500;
        background: transparent;
        border: 1px solid #ffffff;
        border-radius: 50px;
        text-decoration: none;
        transition: background 500ms ease;
        outline: none;
        cursor: pointer;

        &:hover {
            color: #000000;
            background: #ffffff;
        }
    }

    @media screen and (max-width: 420px) {
        h1 {
            font-size: 1.7rem;
        }

        h2 {
            font-size: 1rem;
        }

        button {
            font-size: 1.1rem;
        }
    }
`;

const scrollToContent = () => {
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth',
    });
};

const Home = () => {
    return (
        <>
            <Landing>
                <h1>Jordan Quinlan</h1>
                <h2>Third Year Computing Student</h2>
                <button onClick={scrollToContent}>View Portfolio</button>
            </Landing>
            <Layout>
                <h1>Welcome to my website!</h1>
            </Layout>
        </>
    );
};

export default Home;
