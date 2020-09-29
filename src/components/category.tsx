import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
        cursor: pointer;
        background: white;
        border: 1px solid ${(props) => props.color || 'lightgrey'};
        font-size: 0.6rem;
        margin: 4px 3px;
        padding: 2px 8px;

        :hover {
            transform: scale(1.2);
            transition: 0.2s;

        }

        &.clicked {
            background: ${(props) => props.color || 'lightgrey'},
            transition: 0.2s
        }
    `;

const Category: React.FunctionComponent<{
    color?: string;
    toggledState?: boolean;
}> = ({ children, color = 'grey', toggledState = false }) => {
    const [toggled, setToggled] = useState(toggledState);

    // let handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // if (handleClickCaregory) {
    //     handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //         setToggled(!toggled);
    //         handleClickCaregory(event);
    //     };
    // } else if (handleClear) {
    //     handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //         setToggled(false);
    //         handleClear(null);
    //     };
    // }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToggled(!toggled);
    };

    return (
        <ButtonContainer
            onClick={handleClick}
            className={toggled ? 'clicked' : ''}
            color={color}
        >
            {children}
        </ButtonContainer>
    );
};

export default Category;
