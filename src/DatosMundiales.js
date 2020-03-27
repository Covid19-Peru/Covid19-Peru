import React, {useState,useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg'
//alert("1")
function DatosMundiales() {
    //alert("2")
    const [dataMundial, setdataMundial] = useState({});
    const [loadingMundial, setLoadingMundial] = useState(true);
    const [actualizarComponente, setActualizarComponente] = useState(false);
    //alert("3")
    useEffect( () => {
        const ObtencionDatos = async () =>{
            setLoadingMundial(true);
            //alert("4")
            const resultadoJSON = await axios(
                'https://proyectosupnjose.website/api/coronavirus/total',
            );
            //alert("6")
            setdataMundial(resultadoJSON.data);
            //alert("8")
            setLoadingMundial(false);
            //alert("9")
        }
        ObtencionDatos();
    }, [actualizarComponente]);
    //alert("10")
    return (
        <div>
            <section className="DatosMundiales">
                <div className=" text-center">
                    
                    <section className="jumbotron text-center">
                        <div className="container">
                            <img className="d-block mx-auto mb-4" src={logo} alt="imgCovid19" />
                            <h1 className="display-4">Coronavirus en el Perú</h1>
                            <p className="lead">Aquí encontrarás información y noticias sobre el COVID-19 en Perú y en el mundo.🦠</p>
                            <p className="text-muted"><em>(Mantenemos actualizada nuestra información a diario)</em> </p>
                        </div>

                    </section>
                    <hr></hr>
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="display-4">Datos del Mundo 🗺️</h1>
                            <div className="my-3 p-3">
                                <p className="text-muted"><em>(Mantenemos actualizada nuestra información a diario)</em></p>
                                <button className="btn btn-primary" onClick={() => setActualizarComponente(!actualizarComponente)} >Actualizar información ahora</button>
                            </div>
                            
                            
                            <div className="row">
                                <div className="col-md-4">
                                    <h2>Casos de Coronavirus</h2>
                                    <p>Todos los casos confirmados de <code>Covid-19</code> en todo el mundo. </p>
                                    <div className="cases" style={{color:"purple" }}>
                                    {loadingMundial ? <div className="spinner-border text-primary" role="status"></div>  : <h4 className="">{dataMundial.cases}</h4>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2>Muertes</h2>
                                    <p>La cantidad de muertes causadas por el <code>Covid-19</code> en todo el mundo.</p>
                                    <div className="deaths" style={{color:"red" }}>
                                    {loadingMundial ?<div className="spinner-border text-danger" role="status"></div>  : <h4 className="">{dataMundial.deaths}</h4>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <h2>Casos recuperados</h2>
                                    <p>La cantidad de personas que se recuperaron del <code>Covid-19</code></p>
                                    <div className="recovered" style={{color:"green" }}>
                                    {loadingMundial ? <div className="spinner-border text-success" role="status"></div> : <h4 className="">{dataMundial.recovered}</h4>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr></hr>
                </div>
            </section>
        </div>
    )
}
export default DatosMundiales