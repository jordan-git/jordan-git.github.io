import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Category from './category';

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
    categories: Array<{ name: string; color: string }> | null;
    filterProjects: (category: string | null) => void;
}

// const Category = styled.button`
//     cursor: pointer;
//     background: #ffffff;
//     border: 1px solid ${(props) => props.color};
//     font-size: 0.6rem;
//     margin: 4px 3px;
//     padding: 2px 8px;
// `;

const CategoryBox: FunctionComponent<CategoryBoxProps> = ({
    categories,
    filterProjects,
}) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.innerHTML.includes('Clear Selection')) {
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
            <CategoryRow style={{ justifyContent: 'flex-start' }}>
                {categories.map((category) => (
                    <span onClick={handleClick}>
                        <Category color={category.color}>
                            {category.name}
                        </Category>
                    </span>
                ))}
            </CategoryRow>
            <CategoryRow style={{ justifyContent: 'flex-end' }}>
                <span onClick={handleClick}>
                    <Category>Clear Selection</Category>
                </span>
            </CategoryRow>
        </CategoryBoxContainer>
    );
};

export default CategoryBox;
