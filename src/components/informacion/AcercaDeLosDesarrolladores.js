import React from 'react'
import '../../assets/styles/css/AcercaDeLosDesarrolladores.css'
import '../../assets/styles/css/social.css'
import '../../assets/styles/css/style.css'
import Foto1 from  '../../assets/img/Un_wapo.jpg'
import Foto2 from '../../assets/img/jose-cueva-celis.jpg'
import Foto3 from '../../assets/img/ElPapiChurro.jpg'

export default function AcercaDeLosDesarrolladores() {
    return (
        <div className="container marketing">
            <div className="row">
                <div className="col-lg-4">
                    <img alt="Adrian Alva" className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto1} preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 140x140"></img>
                    <h2>Adrian Alva Tiznado</h2>
                    <p>Diseñador Front-End y Desarrollador De Software.</p> 
                    <p>Comencé principalmente este proyecto para brindar información a las personas sobre este virus.
                       Me caracterizo principalmente por ayudar a mi equipo en completar las metas propuestas. También he liderado proyectos de este tipo, así como, proyectos de Software Libre.
                       Me gusta mucho la programación, así como, el diseño de interfaces de Páginas Web.
                    </p>
                    <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/adrianalvatiznado/" target="_blank" rel="noopener noreferrer" role="button">Ver más detalles »</a></p>
                </div>
                <div className="col-lg-4">
                <img alt="Jose Cueva Celis" className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto2} preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 140x140"></img>
                    <h2>José Cueva Celis</h2>
                    <p>Programador Back-End, Front-End y Fundador.</p>
                    <p>Comencé este proyecto para brindar información a las personas. 
                       Me caracterizo por liderar proyectos, compartir mis conocimientos, y ayudar a mi equipo para completar las metas propuestas. 
                       Soy apasionado por Javascript.</p>
                    <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/cuevacelis/" target="_blank" rel="noopener noreferrer" role="button">Ver más detalles »</a></p>
                </div>
                <div className="col-lg-4">
                    <img alt="Anderson Perales" className="bd-placeholder-img rounded-circle" width="140" height="140" src={Foto3} preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 140x140"></img>
                        <h2>Anderson Perales</h2>
                        <p>Programador Front-End, Base de Datos en SQLServer y Documentación de Proyectos.</p> 
                        <p>Comencé principalmente este proyecto para brindar información a las personas sobre este virus llamado COVID-19.
                            Me gusta mucho diseño de interfaces de Paginas Web.</p>
                        <p><a className="btn btn-secondary" href="https://pe.linkedin.com/in/anderson-nolberto-perales-l%C3%B3pez-8655b5193?trk=people-guest_people_search-card" target="_" rel="noopener noreferrer" role="button">Ver más detalles »</a></p>
                </div>
            </div>
        </div>
    )
}