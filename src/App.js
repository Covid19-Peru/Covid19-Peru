import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
const PantallaDeCarga = lazy(() => import('./components/PantallaDeCarga'));
const Navbar = lazy(() => import('./components/Navbar'));
const DatosMundiales = lazy(() => import('./components/DatosMundiales'));
const DatosCountry = lazy(() => import('./components/DatosCountry'));
const DatosRegionesPeru = lazy(() => import('./components/DatosRegionesPeru'));
const Footer = lazy(() => import('./components/Footer'));
const AcercaDeLosDesarrolladores = lazy(() => import('./components/informacion/AcercaDeLosDesarrolladores'));
const ComoHicimosLaPagina = lazy(() => import('./components/informacion/ComoHicimosLaPagina'));
const PrevenirElCovid19 = lazy(() => import('./components/informacion/PrevenirElCovid19'));

function App (){
  
  return (
    <HashRouter>

      <Suspense delayMs={500} fallback={<div>Cargando....</div>}>
        
        <Navbar />

        <Switch>

          <Route exact path="/">
            <DatosMundiales />
            <DatosCountry />
            <DatosRegionesPeru />
            <Footer />
          </Route>

          <Route exact path="/about" component={AcercaDeLosDesarrolladores}/>
          <Route exact path="/coide-source" component={ComoHicimosLaPagina}/>
          <Route exact path="/prevencion" component={PrevenirElCovid19}/>

        </Switch>

      </Suspense>

    </HashRouter>
  );
}

export default App;