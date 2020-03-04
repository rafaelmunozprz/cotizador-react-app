import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = () => {

    const [datos, guardarDatos] = useState({
        marca: '',
        modelo: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);

    //Extraer los valores del state
    const {marca, modelo, plan} = datos;

    //Leer datos del formulario
    const obtenerInfoFormulario = evt => {
        guardarDatos({
            ...datos,
            [evt.target.name]: evt.target.value
        })
    }

    //Cuando el usuario presiona submit
    const cotizarSeguro = (evt) => {
        evt.preventDefault();
        if(marca.trim() === '' || modelo.trim() === '' || plan.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //obtener la diferencia de años

        //por cada año hay que restar el 3%

        //Americano 15%
        //Asiatico 5%
        //Europeo 30%

        //Basico aumenta 20%
        //completo 50% del incremento

        //Total
    }

    return (
        <Fragment>
            <form
                onSubmit={cotizarSeguro}
            >
                {
                    error
                    ?
                        <Error>Todos los campos son obligatorios</Error>
                    :
                        null
                }
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtenerInfoFormulario}
                    >                        <option value="">--- Seleccione ---</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Año</Label>
                    <Select
                        name="modelo"
                        value={modelo}
                        onChange={obtenerInfoFormulario}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Plan</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan==="basico"}
                        onChange={obtenerInfoFormulario}
                    />Básico
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="completo"
                        checked={plan==="completo"}
                        onChange={obtenerInfoFormulario}
                    />Completo
                </Campo>
                <Boton type="submit">Cotizar</Boton>
            </form>
        </Fragment>
    );
}

export default Formulario;