import React from 'react';
import { PecsBase } from './styles';
import Categorias from './../Categorias';

function Pecs(){
    return(
        <PecsBase>
            <Categorias>
            </Categorias>
                <p>Opções</p>
        </PecsBase>
    );
}

export default Pecs;