
import styled, { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './context/AuthContext'
import { MyRountes } from './routes/routes'
import { createContext, useState } from 'react'
import { Dark, Light } from './styles/themes'
import { Device } from './styles/breackpoints'
import { Sidebar } from './components/organism/sidebar/Sidebar'
import { MenuHambur } from './components/organism/MenuHambur'

export const ThemeContext = createContext(null)
function App() {
  const [themeuse, setTheme] = useState("dark")
  const theme = themeuse === "light" ? "light" : "dark"
  const themeStyle = theme === "light" ? Light : Dark
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle} >
          <AuthContextProvider>
            <Container className={sidebarOpen && "active" }>
              <section className="ContentSidebar">
                  <Sidebar state={sidebarOpen} setState={()=> setSidebarOpen(!sidebarOpen)} />      
              </section>
              <section className="ContentMenuambur">
                  <MenuHambur />
              </section>
              <section className="ContentRoutes">
              <MyRountes />
              </section>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({theme}) => theme.bgtotal};
  .ContentSidebar{
    display: none;
  }
  .ContentMenuambur{
    display: block;
    position: absolute;
    width: 100px;
  }
  .ContentRoutes{
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet}{
      grid-column: 2;
    }
  }
  @media ${Device.tablet}{
    grid-template-columns: 65px 1fr;
    &.active{
       grid-template-columns: 220px 1fr;
    }
    .ContentSidebar{
      display: initial;
    }
    .ContentMenuambur{
      display: none;
    }
  }
`

export default App
