// Libraries & Packages
import styled from "styled-components"

// Styles & Styled Components

export const StyledHeader = styled.header`
    padding-block: 2rem;
    margin-bottom: 2.4rem;
`

export const StyledHeaderTitle = styled.h2`
    font-weight: 500;
    font-size: 2.4rem;
    text-align: center;
`

export const StyledTabContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 50rem;
`

export const StyledTabBtnGroup = styled.div`
    width: 100%;
    display: flex;
    padding: 0.75rem;
    align-items: center;
    border-radius: 2rem;
    justify-content: center;
    background-color: hsl(240, 17%, 90%);
`

export const StyledTabBtn = styled.button`
    flex-grow: 1;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6rem;
    border-radius: 2rem;
    padding: 1.125rem 2.4rem;
    background-color: inherit;
    transition: all 0.5s ease;
    
    ${props => props.$active && `
        color: hsl(0, 0%, 100%);
        background-color: hsl(227, 80%, 53%);
    `}
`

export const StyledTabContentContainer = styled.div`
    
`

export const StyledTabContent = styled.div`
    display: none;
    margin-block: 2rem;
    ${props => props.$isActive && `
        display: block;
    `}
`

export const StyledDropdownContainer = styled.div`
  width: 100%;
  margin-bottom: ${props => props.$isOpen ? '10px' : '0'};
  transition: margin-bottom 0.3s ease;
`;

export const StyledDropdown = styled.div`
    border: none;
    display: flex;
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    font-weight: 600;
    padding: 1.75rem;
    align-items: center;
    border-radius: 2rem;
    color: hsl(0, 0%, 10%);
    justify-content: space-between;
    background-color: hsl(0, 0%, 100%);
    outline: 1px solid hsl(0, 0%, 75%);
`;

export const StyledDropdownInput = styled.input`
    border: none;
    flex-grow: 1;
    cursor: pointer;
    background: none;
    font-weight: 600;
    font-size: 1.6rem;
    border-radius: 2rem;
    color: hsl(0, 0%, 10%);
    
    &:focus {
        outline: none;
    }

    &::placeholder {
        font-size: 1.6rem;
    }
`;

export const StyledDropdownList = styled.ul`
    padding: 0;
    width: 100%;
    margin-top: 1rem;
    border-top: none;
    list-style: none;
`;

export const StyledDropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    font-weight: 600;
    padding: 1.75rem;
    margin-block: 1rem;
    border-radius: 2rem;
    color: hsl(0, 0%, 40%);
    background-color: hsl(0, 0%, 100%);
    outline: 1px solid hsl(0, 0%, 75%);

    &:hover {
        background-color: hsl(0, 0%, 95%);
    }
`;

export const StyledCardContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledEmptyState = styled.div`
    display: flex;
    margin-top: 4rem;
    align-items: center;
    justify-content: center;
`

export const StyledCard = styled.div`
    width: 100%;
    display: flex;
    font-weight: 600;
    padding: 1.75rem;
    align-items: center;
    margin-block: 1rem;
    border-radius: 2rem;
    color: hsl(0, 0%, 10%);
    justify-content: space-between;
    background-color: hsl(0, 0%, 100%);
    outline: 1px solid hsl(0, 0%, 75%);
`