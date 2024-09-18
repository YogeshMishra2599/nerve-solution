// Libraries & Packages
import { useState } from "react";
import {
    StyledTabContainer,
    StyledTabBtnGroup,
    StyledTabContentContainer,
} from "../../styles/Utilities.styled";

// Components
import { TabButton } from "./TabButton"
import { TabContent } from "./TabContent"

export const Tabs = () => {
    const [currentTab, setCurrentTab] = useState("1");
    const views = [
        { id: "1", vTitle: "Bullish" },
        { id: "2", vTitle: "Bearish" },
        { id: "3", vTitle: "Rangebound" },
        { id: "4", vTitle: "Volatile" },
    ];

    const dateArray = ["24-Apr-2024","02-May-2024","09-May-2024","31-May-2024","21-Jun-2024"];
    
    const strategyArray = [
        {
            'View': 'Bullish',
            'Value': {
                '24-Apr-2024': [
                    'Bull Call Spread', 'Bull Put Spread', 'Bull Put Spread', 'Long Call', 
                    'Bull Put Spread', 'Bull Call Spread', 'Strategy1', 'Bull Call Spread', 
                    'Strategy1', 'Strategy1', 'Spread-Strategy', 'Bull Call Spread'
                ],
                '02-May-2024': [
                    'Bull Call Spread', 'Bull Call Spread', 'Bull Put Spread', 'Long Call', 
                    'Long Call', 'Long Call', 'Bull Put Spread', 'Bull Call Spread', 
                    'Strategy1', 'Bull Call Spread', 'Strategy2', 'Strategy1', 
                    'Strategy2', 'Bull Call Spread'
                ],
                '09-May-2024': [
                    'Strategy Put', 'Strategy Call', 'Strategy Call', 'Strategy Call', 
                    'Strategy Put'
                ]
            }
        },
        {
            'View': 'Bearish',
            'Value': {
                '24-Apr-2024': [
                    'Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 
                    'Long Put', 'Long Put', 'Bear Call Spread'
                ],
                '31-May-2024': [
                    'Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'
                ],
                '21-Jun-2024': [
                    'Strategy3', 'Strategy3', 'Bear Put Spread', 'Strategy3', 'Long Put', 
                    'Long Put'
                ]
            }
        },
        {
            'View': 'RangeBound',
            'Value': {
                '24-Apr-2024': [
                    'Short Straddle', 'Short Strangle', 'Short Strangle', 'Iron Butterfly', 
                    'Short Strangle', 'Short Straddle', 'Strategy1', 'Short Straddle', 
                    'Strategy1', 'Strategy1', 'Spread-Strategy', 'Short Straddle'
                ],
                '02-May-2024': [
                    'Short Straddle', 'Short Straddle', 'Short Strangle', 'Iron Butterfly', 
                    'Iron Butterfly', 'Iron Butterfly', 'Short Strangle', 'Short Straddle', 
                    'Strategy1', 'Short Straddle', 'Strategy2', 'Strategy1', 
                    'Strategy2', 'Short Straddle'
                ],
                '21-Jun-2024': [
                    'Iron Condor', 'Iron Butterfly', 'Iron Butterfly', 'Iron Butterfly', 
                    'Iron Condor'
                ]
            }
        },
        {
            'View': 'Volatile',
            'Value': {
                '02-May-2024': [
                    'Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 
                    'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy1', 
                    'Strategy1', 'Spread-Strategy', 'Long Straddle'
                ],
                '09-May-2024': [
                    'Long Straddle', 'Long Straddle', 'Long Strangle', 'Long Strangle', 
                    'Long Straddle', 'Strategy1', 'Long Straddle', 'Strategy2', 
                    'Strategy1', 'Strategy2', 'Long Straddle'
                ],
                '31-May-2024': [
                    'Long Straddle', 'Long Strangle', 'Long Strangle', 'Long Strangle', 
                    'Long Straddle'
                ]
            }
        }
    ];

    
    return (
        <StyledTabContainer>
            <StyledTabBtnGroup>
                {views.map((view) => (
                    <TabButton
                        key={view.id}
                        id={view.id}
                        title={view.vTitle}
                        isActive={currentTab === view.id}
                        onClick={setCurrentTab}
                    />
                ))}
            </StyledTabBtnGroup>
            
            <StyledTabContentContainer>
                {views.map((view) => (
                    <TabContent
                        key={view.id}
                        id={view.id}
                        title={view.vTitle}
                        dateArray={dateArray}
                        strategyArray={strategyArray}
                        isActive={currentTab === view.id}
                    />
                ))}
            </StyledTabContentContainer>
        </StyledTabContainer>
    );
};