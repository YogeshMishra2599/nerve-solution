// Libraries & Packages

// Styles & Styled Components
import { GlobalStyles } from "./styles/GlobalStyles"
import { StyledContainer } from "./styles/Utilities.styled"

// Components
import { Tabs } from "./Components/Tabs/Tabs"
import { Header } from "./Components/Header"


function App() {

  return (
    <> 
      <GlobalStyles />
      <StyledContainer>
        <Header />
        <Tabs />
      </StyledContainer>
    </>
  )
}

export default App