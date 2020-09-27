import React, { useState } from 'react';
import styled from 'styled-components';

const Category: React.FunctionComponent<{
    handleClickCategory?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleClear?: () => void;
    color?: string;
    toggledState?: boolean;
}> = ({
    handleClickCategory,
    handleClear,
    children,
    color = 'grey',
    toggledState = false,
}) => {
    const [toggled, setToggled] = useState(toggledState);

    const ButtonContainer = styled.button`
        cursor: pointer;
        background: white;
        border: 1px solid ${color};
        font-size: 0.6rem;
        margin: 4px 3px;
        padding: 2px 8px;

        &:hover {
            transform: scale(1.15) ease-in;
            transition: 0.5s ease-in-out;
        }

        &.clicked {
            background: ${color},
            transition: 0.2s
        }
    `;

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
        if (event.currentTarget.innerText === 'Clear Selection') handleClear();
        else {
            setToggled(!toggled);
            handleClickCategory(event);
        }
    };

    return (
        <ButtonContainer
            onClick={handleClick}
            className={toggled ? 'clicked' : ''}
        >
            {children}
        </ButtonContainer>
    );
};

export default Category;
