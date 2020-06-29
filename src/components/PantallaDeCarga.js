import React from 'react';
import '../assets/styles/css/Loading.css'
import Imagen_De_Carga from '../assets/img/covid_19.svg'

function PantallaDeCarga() {
    return (
        <div className="Loading">
            <div>
                <img src={Imagen_De_Carga} alt="Pantalla de Carga"></img>
                <h1>Cargando ...</h1>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PantallaDeCarga