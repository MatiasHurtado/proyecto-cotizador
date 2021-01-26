import React from 'react';
import styled from '@emotion/styled'
import PropType from 'prop-types';
import { primerMayuscula}  from '../helper'


const ContenedorResumen = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin-top:1rem;
`;


const Resumen = ({datos}) => {

    //Extraer de datos
   const {marca,year,plan} = datos;
    if (marca === '' || year === ''|| plan=== '') return null;
    return ( 

        <ContenedorResumen>
        <h2>Resumen de cotizacion</h2>

        <ul>
            <li>Marca : {primerMayuscula(marca)}</li>
            <li>Plan : {primerMayuscula(plan)}</li>
            <li>Year Del Auto : {primerMayuscula(year)}</li>
            
        </ul>
        </ContenedorResumen>
        
     );
}
Resumen.prototype ={
    datos:PropType.object.isRequired
    
}
export default Resumen;