import styled from "styled-components"
import { LinksArray, SecondarylinksArray } from "../../utils/dataEstatica"
import { NavLink } from "react-router-dom"
import { ToggleTema } from "./ToggleTema"
import { v } from "../../styles/variables"
import { useState } from "react"

export const MenuHambur = () => {
  const [click, setClick] = useState(false)
  return (
    <Container>
      <NavBar>
        <section>
          <HamburgerMenu onClick={() => setClick(!click)}>

            <label className={click ? "toggle active" : "toggle"} htmlFor="checkbox">
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
          </HamburgerMenu>
        </section>
        <Menu $click={click.toString()}>
          {LinksArray.map(({ icon, label, to }) => (
            <div
              onClick={() => setClick(!click)}
              className="LinkContainer"
              key={label}
            >
              <NavLink
                to={to}
                className="Links"
              >
                <div className="Linkicon">{icon}</div>
                <span> {label}</span>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
              onClick={() => setClick(!click)}
              className="LinkContainer"
              key={label}
            >
              <NavLink
                to={to}
                className="Links"
              >
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <ToggleTema />
          <Divider />
        </Menu>
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
  &.active{
    #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: .3s;
  transform-origin: left;
  z-index: 1;
  }
    #bar2 {
    transform: translateY(14px) rotate(60deg);
    margin-left: 0;
    transform-origin: right;
    transition-duration: .3s;
    z-index: 2;
  }
  transform: rotate(-90deg);
  }
}

.bars {
  width: 100%;
  height: 4px;
  background-color: ${({theme})=> theme.text};
  border-radius: 5px;
  transition-duration: .3s;
}

`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  z-index: 10;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width:100vw;
  background-color: ${({theme}) => `${theme.bodyRgba},0.85` };
  backdrop-filter: blur(3px);
  transform: ${(props) => 
  props.$click === "true" ?  "translateY(0)" : "translateY(1000%)"};
  transition: all 0.3s ease;
  .LinkContainer{
    &:hover {
      background: ${({theme}) => theme.bgAlpha};
    }
    .Links{
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${({theme}) => theme.text};
      height: 80px;
      .Linkicon {
          padding: ${v.smSpacing} ${v.mdSpacing};
          display:flex;
          svg{
            font-size:25px;
          }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;