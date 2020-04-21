/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/css/social.css'
import '../assets/styles/css/style.css'
import moment from 'moment'
function DatosRegionesPeru() {
    const [datosRegiones, setDatosRegiones] = useState([{Country:'',Provinces:{}}]);
    const [indexDatosRegiones, setIndexDatosRegiones] = useState('AMAZONAS');
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

    function restarFecha(fecha) {
        if (datosRegiones[0].Provinces[indexDatosRegiones][`${fecha.format('DD-MM-YYYY')}`] !== undefined) return fecha;
        return restarFecha(fecha.subtract(1, 'd'));
    }
    
    const fecha = () =>{
        const fecha = moment();
        const fechaSeleccionada=restarFecha(fecha).format('DD-MM-YYYY')
        return fechaSeleccionada
    }
    return (
        <>
            <section className="container text-center DatosRegiones">
                <div className="text-center">
                    <hr sx={{borderBottomStyle:`solid`, borderBottomColor:'borderNavbar',borderBottomWidth:'1px'}}></hr>
                    <h1 style={{color:'red'}}>SECCIÓN EN CONSTRUCCIÓN</h1>
                    <p className="text-muted"><em>(Puede tener algunos errores)</em> </p>
                    <div className="my-3 container">
                        {loadingRegiones ? <h1 className="display-4">Cargando ...</h1>  : <h1 className="display-4">Región del Perú: {datosRegiones.Provinces}</h1>}
                            <div className="container form-group">
                                <select id="select_country" value={indexDatosRegiones} data-live-search="true" data-show-subtext="true" className="form-control" onChange={e => setIndexDatosRegiones(e.currentTarget.value)} sx={{backgroundColor:'background',color:'text'}}>
                                    {
                                        loadingRegiones
                                        ?
                                            <option>Obteniendo datos ...</option>
                                        :
                                        (datosRegiones).map( (datoRegion) =>(
                                            Object.keys(datoRegion.Provinces).map( (provincia,index)=>(
                                                <option key={index} value={provincia}>{provincia}</option>
                                            ))
                                        ))
                                    }
                                </select>
                            </div>
                        <button className="btn btn-primary" onClick={() => setActualizarComponente(!actualizarComponente)}>Actualizar información ahora</button>
                    </div>
                    
                    <div className="container">
                        <div className="text-center" sx={{color:'casosCoronavirus'}}>
                            {
                                loadingRegiones 
                                ?
                                <div className="spinner-border text-primary" role="status"></div> 
                                :
                                <>
                                    <h2> Casos de Coronavirus</h2>
                                    <h3>{datosRegiones[0].Provinces[indexDatosRegiones][fecha()]}</h3>
                                </>
                            }
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default DatosRegionesPeru