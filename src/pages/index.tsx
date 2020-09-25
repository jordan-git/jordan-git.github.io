import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
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
            <SEO />
            <Landing id="landing">
                <h1>Jordan Quinlan</h1>
                <h2>Third Year Computing Student</h2>
                <button onClick={scrollToContent}>View Portfolio</button>
            </Landing>
            <Layout>
                <h1>Welcome to my website!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eu lectus eros. Proin aliquam sapien vel eros eleifend, sit
                    amet facilisis urna rutrum. Phasellus non diam sem. Morbi
                    sit amet pulvinar nibh. Fusce sit amet lacus nisl. Vivamus
                    varius bibendum tristique. Sed accumsan tellus mauris, at
                    euismod dolor placerat ut. Vivamus luctus hendrerit arcu, at
                    pharetra risus molestie sed. Vivamus laoreet augue turpis, a
                    iaculis leo fringilla in. Proin sollicitudin, ante et
                    rhoncus viverra, lectus lectus congue felis, ac laoreet elit
                    arcu vitae sapien. Aliquam erat volutpat.
                </p>
                <p>
                    Pellentesque accumsan ex in ipsum volutpat maximus. Sed
                    efficitur hendrerit lacus eget eleifend. Pellentesque quis
                    sagittis sem. Nam vel enim accumsan, consequat nulla sed,
                    convallis enim. Nulla pulvinar cursus elit, in varius ligula
                    pretium et. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus. Fusce elementum nisi facilisis purus fringilla,
                    nec condimentum tortor pellentesque. Etiam at pretium augue.
                    Aenean semper massa vel ullamcorper vehicula. Quisque sem
                    nisl, cursus ut egestas ut, consectetur sit amet urna.
                    Pellentesque id leo ut metus malesuada cursus. In id rutrum
                    lacus. Nunc lobortis, lectus non gravida sodales, justo
                    felis laoreet tortor, id laoreet purus augue sed neque. In
                    vel feugiat dolor, tincidunt viverra ex.
                </p>
                <p>
                    Morbi cursus consequat purus quis blandit. Morbi tincidunt
                    porttitor mi, in pellentesque nisl porttitor eget. Donec
                    congue nunc ac eros condimentum, a varius neque aliquet.
                    Quisque sed congue turpis. Mauris vulputate mauris arcu, et
                    porta velit convallis vitae. Maecenas volutpat hendrerit
                    ligula. Maecenas vitae lacus et nunc faucibus fringilla
                    luctus quis nibh. In eleifend posuere arcu, quis blandit
                    purus. Fusce suscipit ornare commodo. Nunc sed quam sem.
                </p>
                <p>
                    Etiam consequat imperdiet dui quis convallis. Donec pretium,
                    tellus vitae rutrum consequat, purus tellus ornare massa,
                    sed sagittis leo nisi vitae justo. Morbi tempor augue non
                    turpis tincidunt, eget lobortis nibh consectetur. Curabitur
                    mattis purus a lacus condimentum, et tincidunt mi lacinia.
                    In tempus laoreet ligula, suscipit sollicitudin sem blandit
                    vel. Cras mattis elit vel tincidunt lobortis. Vivamus
                    accumsan gravida metus, ut rhoncus purus imperdiet in.
                </p>
                <p>
                    Phasellus varius imperdiet varius. Nunc vulputate turpis
                    eget varius auctor. Proin auctor dignissim rutrum. In in
                    lectus eu ipsum consectetur tincidunt id eget ligula. Ut
                    varius enim a enim venenatis pharetra. Etiam ornare suscipit
                    ipsum, sit amet interdum mi venenatis eget. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Aliquam volutpat et diam at sagittis.
                    Suspendisse pellentesque ipsum sapien. Vivamus ornare, lacus
                    ac sagittis aliquet, orci metus ultricies nisi, eu laoreet
                    eros purus sit amet metus. Nulla mattis, quam sed sodales
                    rhoncus, quam sapien aliquam lectus, sit amet scelerisque
                    augue nibh luctus enim. Donec sed elit vel sapien gravida
                    gravida ac sit amet turpis. Aliquam posuere facilisis sem
                    sit amet placerat. Aliquam ullamcorper metus scelerisque,
                    volutpat ligula vel, rutrum turpis. Cras ipsum ligula,
                    vestibulum eu venenatis quis, blandit sed quam. Donec
                    dapibus dui in accumsan iaculis.
                </p>
                <p>
                    Sed iaculis erat eget eleifend sagittis. Integer tristique
                    neque orci, non pulvinar ex malesuada a. Sed rutrum faucibus
                    tortor, quis sodales sem sodales a. Nulla facilisi. Cras nec
                    nisi sodales, lobortis tortor luctus, tristique magna. Duis
                    mattis arcu in nulla faucibus volutpat. Curabitur vulputate
                    felis tellus, eu consequat ex feugiat posuere. Sed convallis
                    hendrerit pharetra. Etiam ac lobortis sapien. Maecenas
                    lacinia posuere placerat.
                </p>
                <p>
                    Nunc finibus pretium blandit. Duis facilisis nunc nec
                    euismod efficitur. Phasellus tristique non tellus in
                    laoreet. Nam in massa ut nulla sodales luctus. Nunc ut
                    ligula libero. Etiam quis eros id elit fringilla pharetra
                    eget sit amet magna. Pellentesque faucibus justo id tellus
                    sollicitudin convallis et in mi. Maecenas at mauris at neque
                    lacinia bibendum vel non magna. Nullam ullamcorper commodo
                    arcu, et posuere magna scelerisque at. Donec orci sapien,
                    dictum id feugiat sit amet, eleifend nec quam. Praesent ut
                    feugiat erat. Maecenas imperdiet massa in mauris consequat,
                    sit amet feugiat odio rutrum. Nulla facilisi.
                </p>
                <p>
                    Aliquam gravida gravida nibh, id sollicitudin ipsum cursus
                    a. Cras et libero orci. Fusce ultricies ex at elit bibendum,
                    sed pellentesque leo lacinia. Morbi tincidunt molestie enim
                    vitae vulputate. Suspendisse pulvinar, turpis non venenatis
                    pulvinar, velit arcu fringilla erat, vitae varius diam mi in
                    erat. Etiam tincidunt eros eu elit imperdiet, sed fermentum
                    ligula tristique. Nam molestie condimentum lectus vel
                    condimentum. Sed ultricies faucibus ipsum vitae accumsan.
                </p>
            </Layout>
        </>
    );
};

export default Home;
