import React from 'react';
import '../assets/styles/css/social.css'
import '../assets/styles/css/style.css'


function DatosRegionesPeru() {
    return (
        <div className="container">
            
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
        </div>
    )
}
export default DatosRegionesPeru