import React from 'react'
import '../../assets/styles/css/social.css'
import '../../assets/styles/css/Prevencion.css'
import Foto5 from  '../../assets/img/lavar las manos.jpg'
import Foto6 from  '../../assets/img/cubrete.jpg'
import Foto7 from  '../../assets/img/pañuelo.jpg'
import Foto8 from  '../../assets/img/llamar.jpg'

export default function PrevenirElCovid19() {
    return (
        <div className="container marketing">
            <div className="row">
                <div className="col-lg5">
                    <h2>Realice estas cuatro recomendaciones:</h2>
                    <p> Por el MINSA</p> 
                    <p> </p> 
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto5}  focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                    <p> </p>
                    <h2>1. LO MÁS IMPORTANTE LÁVATE LAS MANOS CON FRECUENCIA CON AGUA Y JABÓN</h2>
                </div>

                <div className="col-lg-4">
                <p> </p>
                <img className="bd-placeholder-img rounded-circle" width="140" height="140"  src={Foto6} focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                <p> </p>
                <h2>2. CÚBRETE LA BOCA CON EL ANTEBRAZO O CON UN PAÑUELO AL TOSER O ESTORNUDAR</h2>
                </div>
                
                <div className="col-lg-4">
                <p> </p>
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto7}  focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                <p> </p>
                    <h2>3. UTILIZA PAÑUELOS DESECHABLES TÍRALOS A LA PAPELERA</h2>
                </div>

                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto8}  focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                <p> </p>
                    <h2>4. SI PRESENTAS SÍNTOMAS RESPIRATORIOS Y HAS VIAJADO A UNA ZONA DE RIESGO, PERMANECE EN CASA Y LLAMA AL 911</h2>
                </div>
            
            </div>

            

            
            
            <hr></hr>
            <section className="DatosRegionesPeru jumbotron text-center">
                <div className=" text-center">
                    <h2 className="display-4" ><b>¿Cómo prevenir el Coronavirus (COVID-19)?</b> </h2>
                    <div className="contenedor">
                        <iframe width="580" height="350" src="https://www.youtube.com/embed/uvOWHLab7Gg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    
                    <h2 className="display-4">Twitter Minsa</h2>
                    <div className="container">
                        <a className="twitter-timeline" href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw">Tweets by Minsa_Peru</a>
                    </div>
                    
                    <h2 className="display-4"><em>Visitanos en nuestra pagina Oficial</em></h2>
                    <div className="container">
                        <a className="youtube-timeline" href="https://www.gob.pe/minsa/">MINSA</a>
                    </div>

                    <div className="social">
                        <ul>
                            <li><a href="https://www.facebook.com/minsaperu/" target="_blank" className="icon-facebook"></a></li>
                            <li><a href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw" target="_blank" className="icon-twitter"></a></li>

                        </ul>
	                </div>

                </div>
            </section>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <hr></hr>
                <p className="mb-1">© 2020 <a href="https://www.linkedin.com/in/cuevacelis/">@Cueva Celis</a></p>
            </footer>
        </div>
    )
}