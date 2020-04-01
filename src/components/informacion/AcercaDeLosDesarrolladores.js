import React from 'react'
import '../../assets/styles/css/AcercaDeLosDesarrolladores.css'
import Foto1 from  '../../assets/img/Un_wapo.jpg'
import Foto2 from '../../assets/img/jose-cueva-celis.jpg'

export default function AcercaDeLosDesarrolladores() {
    return (
        <div className="container marketing">
            <div className="row">
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto1} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                    <h2>Adrian Alva</h2>
                    <p>Diseñador Front-End.</p> 
                    <p>Comencé principalmente este proyecto para brindar información a las personas sobre este virus.
                       Me gusta mucho la programación, así como el diseño de interfaces de Paginas Web.
                    </p>
                    <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/adrian-rodrigo-alva-tiznado-0322a21a6/" role="button">Mas Detalles »</a></p>
                </div>
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto2} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                    <h2>José Cueva Celis</h2>
                    <p>Programador Back-End, Front-End y Fundador.</p>
                    <p>Comenzó, yo que sé que lo escriba él.</p>
                    <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/cuevacelis/" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"></img>
                    <h2>Anderson Perales</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
            </div>
        </div>
    )
}