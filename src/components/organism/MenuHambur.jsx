import styled from "styled-components"

export const MenuHambur = () => {
    return (
        <Container>
            <NavBar>
                <section>
                    <HamburgerMenu>
                        <input id="checkbox" type="checkbox" />
                        <label className="toggle" htmlFor="checkbox">
                            <div id="bar1" className="bars"></div>
                            <div id="bar2" className="bars"></div>
                            <div id="bar3" className="bars"></div>
                        </label>
                    </HamburgerMenu>
                </section>
            </NavBar>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.bgtotal};
`
const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    height: 100vh;
`

const HamburgerMenu = styled.span`
    /* From Uiverse.io by vinodjangid07 */ 
    position: fixed;
    top: 2rem;
    left: 1.7rem;
    z-index: 100;
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(253, 255, 243);
  border-radius: 5px;
  transition-duration: .3s;
}

#checkbox:checked + .toggle #bar2 {
  transform: translateY(14px) rotate(60deg);
  margin-left: 0;
  transform-origin: right;
  transition-duration: .3s;
  z-index: 2;
}

#checkbox:checked + .toggle #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: .3s;
  transform-origin: left;
  z-index: 1;
}

#checkbox:checked + .toggle {
  transform: rotate(-90deg);
}
/* #checkbox:checked + .toggle #bar3 {
  transform: rotate(90deg);
  transition-duration: .3s;
  transform-origin:right;
} */

`