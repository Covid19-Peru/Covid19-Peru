import React from 'react';
import '../../assets/styles/css/ComoHicimosLaPagina.css'
import Foto1 from '../../assets/img/Un_wapo.jpg'
import Foto2 from '../../assets/img/jose-cueva-celis.jpg'
import Foto3 from '../../assets/img/ElPapiChurro.jpg'
import Conversacion from '../../assets/img/conversacion.svg'
import Herramienta from '../../assets/img/herramienta.svg'
import JavaScript from '../../assets/img/javascript.svg'
import LogoReact from '../../assets/img/reaccionar.svg'
import Css from '../../assets/img/css-3.svg'

export default function ComoHicimosLaPagina() {
    return (
        <>
            
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center ">
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal" >Hola!</h1>
                    <p className="lead font-weight-normal">Soy Adrián Alva.</p>
                    <p className="lead font-weight-normal">Aquí te mostraremos como hicimos esta fantástica página web.</p>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Primero</h2>
                        <p className="lead" style={{fontSize: "20px"}}>Coordinación de Trabajo
                            <img src={Conversacion} alt="conversacion" width="50" height="50" style={{marginLeft: "10px"}}></img>
                        </p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto foto-d" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                        <div className="container" style={{height: "300px", borderRadius: "21px 21px 0 0"}}>
                            <img className="bd-placeholder-img rounded-circle" alt="Adrian Alva" width="100" height="100" src={Foto1} style={{float:"left", marginTop:"50px", marginLeft: "6%"}} focusable="false"></img>
                            <div>
                                <div className="message-content bg-dark" style={{ fontSize: "15px",width: "40%", borderRadius:"21px 21px 21px 0", marginLeft: "130px", height:"auto", marginTop:"70px"}}>
                                    
                                        <div className="bd-dark">
                                            <div>Yo haré el Diseño Web.</div>
                                            <div className="mt-1">
                                                <small className="opacity-65">8 mins ago</small>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                            <img className="bd-placeholder-img rounded-circle" alt="Jose Cueva Celis" width="100" height="100" src={Foto2} style={{float:"right", marginTop:"70px", marginRight: "20px"}} focusable="false"></img>
                            <div>
                                <div className="message-content bg-dark" style={{ fontSize: "15px", borderRadius:"21px 21px 0 21px", marginTop:"34px", height:"auto", width:"30%", float:"right", marginRight:"10px"}}>
                                    
                                        <div className="bd-dark">
                                            <div>Yo hare el FrontEnd.</div>
                                            <div className="mt-1">
                                                <small className="opacity-65">right now.</small>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{color: 'black'}}>
                    <div className="my-3 p-3">
                        <h2 className="display-5">Segundo</h2>
                        <p className="lead">Herramientas Que Usamos
                            <img src={Herramienta} alt="Herramientas de Desarrollo" width="40" height="40" style={{marginLeft: "10px"}}></img> 
                        </p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius:"21px 21px 0 0"}}>
                        <div className="container bg-dark" style={{height: "300px", borderRadius: "21px 21px 0 0", padding: '5px'}}>
                            <img className="bd-placeholder-img rounded-circle" alt="Anderson Perales" width="100" height="100" src={Foto3} style={{float:"left", marginTop:"40px", marginLeft: "6%"}} focusable="false"></img>
                            <div style={{margin:"0 auto"}}>
                                <div className="message-content bg-light" style={{ fontSize: "15px", borderRadius:"21px 21px 21px 0", marginLeft: "130px", height:"auto", marginTop:"55px"}}>
                                    
                                    <div className="bd-light">
                                        <div>Herramientas que usamos.</div>
                                        <div className="mt-1">
                                            <small className="opacity-65">5 mins ago</small>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"60px", justifyContent:"center", minWidth: "100%"}}>
                                <div className="col-xs-6" style={{marginRight:"10px"}}>
                                    <img className="bd-placeholder-img" alt="JS" width="60" height="60" src={JavaScript} focusable="false"></img>
                                </div> 
                                <div className="col-xs-6" style={{marginRight:"10px"}}>
                                    <img className="bd-placeholder-img" alt="React" width="60" height="60" src={LogoReact} focusable="false"></img>
                                </div>                           
                                <div className="col-xs-6">
                                    <img className="bd-placeholder-img" alt="CSS" width="60" height="60" src={Css} focusable="false"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}