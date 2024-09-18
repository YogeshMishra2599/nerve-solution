// Libraries & Packages

// Styles & Styled Components
import {
    StyledTabBtn
} from "../../styles/Utilities.styled";

export const TabButton = ({ id, title, isActive, onClick }) => (
    <StyledTabBtn
        id={id}
        onClick={() => onClick(id)}
        $active={isActive}
    >
        {title}
    </StyledTabBtn>
);