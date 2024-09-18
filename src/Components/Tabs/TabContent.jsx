import { useState, useEffect } from "react";
import {
    StyledTabContent,
    StyledCardContainer,
    StyledCard,
    StyledEmptyState
} from "../../styles/Utilities.styled";
import { Dropdown } from "../Dropdown";

export const TabContent = ({ id, title, isActive, dateArray, strategyArray }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [strategies, setStrategies] = useState([]);

    useEffect(() => {
        if (selectedDate) {
            const viewData = strategyArray.find(item => item.View === title);
            if (viewData && viewData.Value[selectedDate]) {
                const counts = viewData.Value[selectedDate].reduce((acc, strategy) => {
                    acc[strategy] = (acc[strategy] || 0) + 1;
                    return acc;
                }, {});
                setStrategies(Object.entries(counts).map(([name, count]) => ({ name, count })));
            } else {
                setStrategies([]);
            }
        }
    }, [selectedDate, title, strategyArray]);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <StyledTabContent $isActive={isActive}>
            <Dropdown dateArray={dateArray} onDateSelect={handleDateSelect} />
            {selectedDate && (
                strategies.length > 0 ? (
                    <StyledCardContainer>
                        {strategies.map((strategy, index) => (
                            <StyledCard key={index}>
                                <h3>{strategy.name}</h3>
                                <p>{strategy.count} {strategy.count === 1 ? 'Strategy' : 'Strategies'}</p>
                            </StyledCard>
                        ))}
                    </StyledCardContainer>
                ) : (
                    <StyledCardContainer>
                        <StyledEmptyState>
                            No strategies available for {selectedDate}
                        </StyledEmptyState>
                    </StyledCardContainer>
                )
            )}
        </StyledTabContent>
    );
};