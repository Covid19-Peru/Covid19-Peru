/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/css/social.css'
import '../assets/styles/css/style.css'

function DatosRegionesPeru() {
    const [datosRegiones, setDatosRegiones] = useState([{Country:'',Provinces:{}}]);
    const [indexDatosRegiones, setIndexDatosRegiones] = useState(0);
    const [loadingRegiones, setLoadingRegiones] = useState(true);
    const [actualizarComponente, setActualizarComponente] = useState(false);

    useEffect( () => {
        const ObtensionDatos = async () =>{
            setLoadingRegiones(true);
            const datos = await axios(
                'https://covid19peru.now.sh/vistas/data/dataByRegion.json',
            );
            setDatosRegiones(datos.data)
            setLoadingRegiones(false)   
        }
        ObtensionDatos();
    }, [actualizarComponente]);

    return (
        <>
            <section className="container text-center DatosRegiones">
                <div className="text-center">
                    <hr sx={{borderBottomStyle:`solid`, borderBottomColor:'borderNavbar',borderBottomWidth:'1px'}}></hr>
                    <div className="my-3 container">
                        {loadingRegiones ? <h1 className="display-4">Cargando ...</h1>  : <h1 className="display-4">Region de Peru: {datosRegiones.Provinces}</h1>}
                            <div className="container form-group">
                                <select id="select_country" value={indexDatosRegiones} data-live-search="true" data-show-subtext="true" className="form-control" onChange={e => setIndexDatosRegiones(e.currentTarget.value)} sx={{backgroundColor:'background',color:'text'}}>
                                    {
                                        loadingRegiones
                                        ?
                                            <option>Obteniendo datos ...</option>
                                        :
                                        (datosRegiones).map( (datoRegion) =>(
                                            Object.keys(datoRegion.Provinces).map( (provincia,index)=>(
                                                <option key={index} value={index}>{provincia}</option>
                                            ))
                                        ))
                                    }
                                </select>
                            </div>
                        <button className="btn btn-primary" onClick={() => setActualizarComponente(!actualizarComponente)}>Actualizar información ahora</button>
                    </div>
                    
                    <div className="container">
                            <div className="text-center">
                                <h2>Proximamente Disponible</h2>
                            </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default DatosRegionesPeru