import styled from 'styled-components'
import { Btnsave } from '../molecule/Btnsave'
import { useAuthStore } from '../../store/AuthStore'

export const HomeTemplate = () => {
  const { signOut } = useAuthStore()
  return (
    <Container>
      <h1>HomeTemplate</h1>
      <Btnsave titulo="Cerrar sesión" bgcolor="#fff" funcion={signOut} />
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
background-color: ${({ theme }) => theme.bgtotal};
color: ${({ theme }) => theme.text};
`
