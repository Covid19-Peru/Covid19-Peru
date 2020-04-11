import React from 'react';
import Imagen_De_Carga from '../assets/img/covid_19.svg'

function PantallaDeCarga() {
    return (
        <div className="Loading">
            <div>
                <img src={Imagen_De_Carga}></img>
                <h1>Cargando ...</h1>
            </div>
        </div>
    )
}
export default PantallaDeCarga