import styled from "styled-components"

export const ErrorMolecule = ({mensaje}) => {
    return (
        <Container>
          <span>Error... {mensaje}</span>
        </Container>
    )
}

const Container = styled.div`
    color: ${({theme}) => theme.text};
`