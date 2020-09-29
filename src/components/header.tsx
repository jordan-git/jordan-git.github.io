import React, { useEffect, useRef, useState } from 'react';
import { Link, navigate } from 'gatsby';
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
    cursor: pointer;

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

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */

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

const NavLinkSpan = styled.span`
    cursor: pointer;
`;

const scrollToLanding = () => {
    const landing = document.querySelector('#landing');

    if (landing === null) return navigate('/');

    landing.scrollIntoView({
        behavior: 'smooth',
    });
};

// const handleScroll = (event: React.UIEvent<HTMLElement>) => {
//     const header = event.currentTarget;
//     const sticky = header.offsetTop;

//     if (window.pageYOffset >= sticky) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// };

const Header = () => {
    const [isSticky, setSticky] = useState(false);
    const headerRef = useRef(null);

    const handleScroll = () => {
        if (headerRef.current) {
            if (headerRef.current.getBoundingClientRect().top <= 0)
                setSticky(true);
            else setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    return (
        // ref={headerRef} className={`${isSticky ? 'sticky' : ''}`}
        <header>
            <NavContainer>
                <Nav>
                    <NavLinkSpan id="logo" onClick={scrollToLanding}>
                        Jordan Quinlan
                    </NavLinkSpan>
                    <NavLinkContainer>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </NavLinkContainer>
                </Nav>
            </NavContainer>
        </header>
    );
};

export default Header;
