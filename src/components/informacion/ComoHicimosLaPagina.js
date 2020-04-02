import React from 'react';
import '../../assets/styles/css/ComoHicimosLaPagina.css'
import Foto1 from '../../assets/img/Un_wapo.jpg'
import Foto2 from '../../assets/img/jose-cueva-celis.jpg'
import Conversacion from '../../assets/img/conversacion.svg'
import Herramienta from '../../assets/img/herramienta.svg'

if(localStorage.getItem('theme') === "dark") {
	document.body.classList.toggle(localStorage.getItem('theme'));
}

const themeSwitcher = document.getElementById('theme-switcher');

if(themeSwitcher){
    themeSwitcher.onclick('click', function() {
        document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList);
    })    
}

export default function ComoHicimosLaPagina() {
    return (
        <div>
            
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Hola!</h1>
                    <p className="lead font-weight-normal">Soy Adrián Alva.</p>
                    <p className="lead font-weight-normal">Aquí te mostraremos como hicimos esta fantástica página web.</p>
                </div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Primero</h2>
                        <p className="lead" style={{fontSize: "20px"}}>Coordinación de Trabajo
                            <img src={Conversacion} width="50" height="50" style={{marginLeft: "10px"}}></img>
                        </p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto foto-d" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                        <div className="container" style={{height: "300px", borderRadius: "21px 21px 0 0"}}>
                            <img className="bd-placeholder-img rounded-circle" width="100" height="100" src={Foto1} style={{float:"left", marginTop:"50px", marginLeft: "20px"}} focusable="false" role="img"></img>
                            <p>
                                <div className="message-content bg-dark" style={{ fontSize: "15px",width: "40%", borderRadius:"21px 21px 21px 0", marginLeft: "130px"}}>
                                    <div className="contenedor">
                                        <div className="bd-dark" style={{marginTop:"70px"}}>
                                            <div>Yo haré el Front-End.</div>
                                            <div className="mt-1">
                                                <small className="opacity-65">8 mins ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </p>
                            <img className="bd-placeholder-img rounded-circle" width="100" height="100" src={Foto2} style={{float:"right", marginTop:"20px", marginRight: "20px"}} focusable="false" role="img"></img>
                            <p>
                                <div className="message-content bg-dark" style={{ fontSize: "15px",width: "30%", borderRadius:"21px 21px 0 21px", marginLeft: "170px"}}>
                                    <div className="contenedor">
                                        <div className="bd-dark" style={{marginTop:"45px"}}>
                                            <div>oc.</div>
                                            <div className="mt-1">
                                                <small className="opacity-65">right now.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Segundo</h2>
                        <p className="lead">Herramientas Necesarias
                            <img src={Herramienta} width="50" height="50" style={{marginLeft: "10px"}}></img> 
                        </p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius:"21px 21px 0 0"}}>
                        <div className="bg-dark" style={{height: "300px", borderRadius: "21px 21px 0 0"}}>
                            
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}