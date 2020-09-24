import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/global.scss';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div`
    margin: 0 auto;
    padding: 30px;
    max-width: 980px;
    flex: 1 0 auto;
`;

const Layout = ({ children }) => {
    return (
        <Container id="content">
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Container>
    );
};

export default Layout;
