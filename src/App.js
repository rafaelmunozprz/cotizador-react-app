import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled';
import './assets/css/App.css';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #FFFFFF;
    padding: 3rem;
`;

function App() {
  return (
    <Contenedor>
        <Header
            titulo = 'Cotizador de seguros'
        />
        <ContenedorFormulario>
            <Formulario/>
        </ContenedorFormulario>
    </Contenedor>    
  );
}

export default App;
