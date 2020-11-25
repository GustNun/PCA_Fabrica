import React from 'react';
import {CategoriasBase} from './styles';
import {Imgadp} from './styles';
import Categoria1 from './../../assets/images/sentimento/medo.png';
import Categoria2 from './../../assets/images/sentimento/feliz.png';
import Categoria3 from './../../assets/images/sentimento/machucado.png';

function Categorias(){
    return(
        <CategoriasBase>
            <Imgadp src={Categoria1} alt='Categoria'/>
            <Imgadp src={Categoria2} alt='Categoria'/>
            <Imgadp src={Categoria3} alt='Categoria'/>
        </CategoriasBase>
    );
}

export default Categorias;