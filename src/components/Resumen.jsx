import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    const { marca, modelo, plan } = datos;
    return (
        <Fragment>
            <ContenedorResumen>
                <h2>Resumen de cotización</h2>
                <ul>
                    <li>Marca: {primerMayuscula(marca)}</li>
                    <li>Plan: {primerMayuscula(plan)}</li>
                    <li>Modelo: {primerMayuscula(modelo)}</li>
                </ul>
            </ContenedorResumen>
        </Fragment>
    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;