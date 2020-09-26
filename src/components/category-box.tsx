import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const CategoryBoxContainer = styled.section`
    padding: 10px 0;
`;

const CategoryBoxHeader = styled.h4`
    font-weight: normal;
    font-size: 0.9rem;

    @media screen and (max-width: 420px) {
        text-align: center;
        font-size 0.8rem;
    }
`;

const CategoryRow = styled((props) => <div {...props}></div>)`
    display: flex;
    flex-wrap: wrap;
`;

interface CategoryBoxProps {
    categories: Array<string> | null;
    filterProjects: (category: string | null) => void;
    // selectedCategory: {
    //     get: HTMLSpanElement | null;
    //     set: (value: HTMLSpanElement | 'clear' | null) => any;
    // };
}

const Category = styled.button`
    cursor: pointer;
    border: 1px solid #a1a1a1;
    font-size: 0.6rem;
    margin: 4px 3px;
    padding: 2px 8px;
`;

const CategoryBox: FunctionComponent<CategoryBoxProps> = ({
    categories,
    filterProjects,
    // selectedCategory,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.innerHTML === 'Clear Selection') {
            filterProjects(null);
        } else {
            filterProjects(event.currentTarget.innerText);
        }
    };

    if (categories === null) return null;

    return (
        <CategoryBoxContainer>
            <CategoryBoxHeader>
                Select a category to sort projects:
            </CategoryBoxHeader>
            <CategoryRow style={{ justifyContent: 'space-around' }}>
                {Array.from(categories).map((category) => (
                    <Category onClick={handleClick}>{category}</Category>
                ))}
            </CategoryRow>
            <CategoryRow style={{ justifyContent: 'flex-end' }}>
                <Category onClick={handleClick}>Clear Selection</Category>
            </CategoryRow>
        </CategoryBoxContainer>
    );
};

export default CategoryBox;
