/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/css/style.css'

//alert("1")
function DatosCountry() {
    const [datosCountry, setDatosCountry] = useState([]);
    const [indexDatosCountry, setIndexDatosCountry] = useState(0);
    const [loadingCounrty, setLoadingCountry] = useState(true);
    const [actualizarComponente, setActualizarComponente] = useState(false);
    const [unaVez, setUnaVez] = useState(true);

    useEffect( () => {
        //alert("2")
        const ObtensionDatos = async () =>{
            //alert("2.1")
            setLoadingCountry(true);
            //alert("2.2")
            const datos = await axios(
                'https://proyectosupnjose.website/api/coronavirus/countries',
            );
            //alert("2.3")
            setDatosCountry(datos.data)
            //alert("2.6")
            setLoadingCountry(false)

            if(unaVez===true){
                datos.data.filter( (datoCountry,index) =>{
                    if(datoCountry.country==='Peru'){
                        setIndexDatosCountry(index)
                    }
                })
                setUnaVez(false)
            }        
        }
        ObtensionDatos();
    }, [actualizarComponente, unaVez]);

    return (
        <>
            <section className="container text-center DatosCountry">
                <div className="text-center">
                    <hr sx={{borderBottomStyle:`solid`, borderBottomColor:'borderNavbar',borderBottomWidth:'1px'}}></hr>
                    <div className="my-3 container">
                        <h1 className="titulo-seccion">Selecciona tu País</h1>
                            <div className="container form-group">
                                <select id="select_country" value={indexDatosCountry} data-live-search="true" data-show-subtext="true" className="custom-select" onChange={e => setIndexDatosCountry(e.currentTarget.value)} sx={{backgroundColor:'transparent',color:'text', maxWidth: '300px'}}>
                                    {
                                        loadingCounrty
                                        ?
                                            <option>Obteniendo datos ...</option>
                                        :
                                        datosCountry.map((datoCountry,index) => (
                                            <option key={index} value={index}>{datoCountry.country +" - Top: "+(index+1)}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        <button className="btn btn-primary" onClick={() => setActualizarComponente(!actualizarComponente)}>Actualizar información ahora</button>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4" sx={{color:'casosCoronavirus'}}>
                                <h2>Casos de Coronavirus</h2>
                                {loadingCounrty ? <p>Casos de Covid-19 en ...</p>  : <p>Casos de Covid-19 en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="casesPeru">
                                {loadingCounrty ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].total}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4" sx={{color:'nuevosCasos'}}>
                                <h2>Nuevos Casos</h2>
                                {loadingCounrty ? <p>Nuevos casos de Covid-19 en ...</p>  : <p>Nuevos casos de Covid-19 en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru">
                                {loadingCounrty ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].newCases}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4" sx={{color:'totalMuertes'}}>
                                <h2>Total de Muertes</h2>
                                {loadingCounrty ? <p>Total de muertes causadas por el Covid-19 en ...</p>  : <p>Total de muertes causadas por el Covid-19 en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru" >
                                {loadingCounrty ? <div className="spinner-border text-danger" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].totalDeaths}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4" sx={{color:'nuevasMuertes'}}>
                                <h2>Nuevas Muertes</h2>
                                {loadingCounrty ? <p>Nuevas muertes Covid-19 en ...</p>  : <p>Nuevas muertes Covid-19 en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru">
                                {loadingCounrty ? <div className="spinner-border text-danger" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].newDeaths}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4" sx={{color:'casosSerios'}}>
                                <h2>Casos Serios</h2>
                                {loadingCounrty ? <p>Total de casos graves ocasionados por el Covid-19 en ...</p>  : <p>Total de casos graves ocasionados por el Covid-19 en {datosCountry[indexDatosCountry].country}.</p>}
                                <div className="deathsPeru">
                                {loadingCounrty ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].serious}</h4>}
                                </div>
                            </div>
                            <div className="col-md-4" sx={{color:'casosRecuperados'}}>
                                <h2>Casos Recuperados</h2>
                                {loadingCounrty ? <p>La cantidad de personas que se recuperaron del Covid-19 en ...</p>  : <p>La cantidad de personas que se recuperaron del Covid-19 en {datosCountry[indexDatosCountry].country}</p>}
                                <div className="recoveredPeru">
                                {loadingCounrty ? <div className="spinner-border text-success" role="status"></div>  : <h4 className="">{datosCountry[indexDatosCountry].totalRecovered}</h4>}
                                </div>
                            </div>

                            <div className="social">
                                <ul>
                                    <li>
                                        <a aria-label="facebook" href="https://www.facebook.com/minsaperu/" target="_blank" rel="noopener noreferrer" className="icon-facebook">
                                            <i  aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a aria-label="twitter" href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer" className="icon-twitter">
                                            <i aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default DatosCountry