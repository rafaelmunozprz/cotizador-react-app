import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
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
    const [resumen, guardarResumen] = useState({});
    const { datos, cotizacion } = resumen;
    const [cargando, guardarCargando] = useState(false);

    return (
        <Contenedor>
            <Header
                titulo='Cotizador de seguros'
            />
            <ContenedorFormulario>
                <Formulario
                    guardarResumen={guardarResumen}
                    guardarCargando={guardarCargando}
                />
                {cargando ? <Spinner/> : null}
                {
                    datos 
                    ? 
                        <Resumen 
                            datos={datos}
                        />                   
                    : null
                }
                {
                    cotizacion 
                    ? 
                        <Resultado
                            cotizacion={cotizacion}
                        />                   
                    : null
                }
            </ContenedorFormulario>
        </Contenedor>
    );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}

export default App;
