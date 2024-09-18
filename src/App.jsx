// Libraries & Packages

// Styles & Styled Components
import { GlobalStyles } from "./styles/GlobalStyles"

// Components
import { Tabs } from "./Components/Tabs/Tabs"
import { Header } from "./Components/Header"


function App() {

  return (
    <> 
      <GlobalStyles />
      <Header />
      <Tabs />
    </>
  )
}

export default App