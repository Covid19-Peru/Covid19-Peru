import React from 'react';
import '../../assets/styles/css/ComoHicimosLaPagina.css'

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
        <React.Fragment>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Hola!</h1>
                    <p className="lead font-weight-normal">Soy Adrián Alva.</p>
                    <p className="lead font-weight-normal">Aquí te mostraremos como hicimos esta fantástica página web.</p>
                </div>
            </div>
            

            
        </React.Fragment>
    )
}