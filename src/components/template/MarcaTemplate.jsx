import styled from 'styled-components'
import { useState } from 'react';
import { Header } from '../organism/Header';
import { TablaMarca } from '../organism/tablas/TablaMarca';
import { RegistrarMarca } from '../organism/formularios/RegistrarMarca';
import { BtnFiltro } from '../molecule/BtnFiltro';
import { ContentFiltro } from '../atom/ContentFiltro';
import { Title } from '../atom/Title';
import { v } from '../../styles/variables';
import { Buscador } from '../organism/Buscador';
import { useMarcaStore } from '../../store/MarcaStore';

export const MarcaTemplate = ({data}) => {
  const [state, setState] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [action, setAction] = useState("")
  const [openRegistro, setOpenRegistro] = useState(false)
  const nuevoRegistro = () => {
    setOpenRegistro(!openRegistro)
    setAction("Nuevo")
    setDataSelect([])
  }
  const { setBuscador } = useMarcaStore()
  return (
    <Container>
      {
        openRegistro && <RegistrarMarca dataSelect={dataSelect} action={action} onClose={() =>setOpenRegistro(!openRegistro)} />
      }
  
      <header className="header" >
        <Header stateConfig={{ state: state, setState: () => setState(!state) }} />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Marcas
          </Title>
          <BtnFiltro funcion={nuevoRegistro} bgcolor="#f6f3f3" textcolor="#353535" icono={<v.agregar />}  />
        </ContentFiltro>
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section >
      <section className="main">
        <TablaMarca data={data} SetOpenRegistro={setOpenRegistro}
         SetDataSelect={setDataSelect} SetAction={setAction} />
      </section>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${({ theme }) => theme.bgtotal};
color: ${({ theme }) => theme.text};
display: grid;
padding: 15px;
grid-template: 
"header" 100px
"area1" 100px
"area2" 100px
"main" auto;
.header{
  grid-area: header;
}
.area1{
  grid-area: area1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.area2{
  grid-area: area2;
  display: flex;
  align-items: center;
  justify-content: end;
}
.main{
  grid-area: main;
}
`
