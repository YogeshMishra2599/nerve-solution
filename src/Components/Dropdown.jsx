import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
    StyledDropdownContainer,
    StyledDropdown,
    StyledDropdownInput,
    StyledDropdownList,
    StyledDropdownItem
} from "../styles/Utilities.styled";

export const Dropdown = ({ dateArray, onDateSelect }) => {
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleDropdownVisibility = () => {
        setToggleDropdownMenu(!toggleDropdownMenu);
    };

    const handleDateSelect = (date) => {
        setSelectedValue(date);
        setToggleDropdownMenu(false);
        onDateSelect(date);
    };

    return (
        <StyledDropdownContainer>
            <StyledDropdown onClick={handleDropdownVisibility}>
                <StyledDropdownInput 
                    readOnly
                    value={selectedValue}
                    placeholder="Select a date"
                />
                <IoIosArrowDown />
            </StyledDropdown>
            {toggleDropdownMenu && (
                <StyledDropdownList>
                    {dateArray.map((item, index) => (
                        <StyledDropdownItem
                            key={index}
                            onClick={() => handleDateSelect(item)}
                        >
                            {item}
                        </StyledDropdownItem>
                    ))}
                </StyledDropdownList>
            )}
        </StyledDropdownContainer>
    );
};