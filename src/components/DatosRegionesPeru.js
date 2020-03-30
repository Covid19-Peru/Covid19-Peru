import React from 'react';
import '../assets/styles/css/social.css'
import '../assets/styles/css/style.css'


function DatosRegionesPeru() {
    return (
        <div className="container">
            
            <hr></hr>
            <section className="DatosRegionesPeru jumbotron text-center">
                <div className=" text-center">

                    <h2 className="display-4">Twitter Minsa</h2>
                    <div className="container">
                        <a className="twitter-timeline" href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw">Tweets by Minsa_Peru</a>
                    </div>
                    
                    <h2 className="display-4">Youtube Minsa</h2>
                    <div className="container">
                        <a className="youtube-timeline" href="https://www.youtube.com/channel/UCpR7spJxkXzqAI9aBr7Xacw">Youtube by Minsa_Peru</a>
                    </div>

                    <h2 className="display-4">¿Cómo prevenir el Coronavirus (COVID-19)? </h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uvOWHLab7Gg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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