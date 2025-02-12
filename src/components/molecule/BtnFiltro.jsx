import styled from "styled-components"

export function BtnFiltro({
    bgcolor, textcolor, icono, funcion
}){
    return (
        <Container $bgcolor={bgcolor} $textcolor={textcolor} onClick={funcion}>
          <span>{icono}</span>
        </Container>
    )
}

const Container = styled.div`
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    background: linear-gradient(145deg, #f0f0f0, #ffffff) ;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    color: ${(props) => props.$textcolor}; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative;
    cursor: pointer;
    .contentIcon {
        position: absolute;
        top:25%;
        bottom: 25%;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        transition: 0.2s;
        &:hover {
            transform: scale(1.3);
        }
    }
`