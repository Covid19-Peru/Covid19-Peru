import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";

const Navbar = lazy(() => import('./components/Navbar'));
const DatosMundiales = lazy(() => import('./components/DatosMundiales'));
const DatosCountry = lazy(() => import('./components/DatosCountry'));
const DatosRegionesPeru = lazy(() => import('./components/DatosRegionesPeru'));

function App (){
  
  return (
    <HashRouter>

      <Suspense fallback={<div>Pantalla de Carga...</div>}>

        <Navbar />

        <Switch>

          <Route exact path="/f">
            <Redirect to="/Covid19-Peru" />
          </Route>

          <Route exact path="/">
            <DatosMundiales />
            <DatosCountry />
            <DatosRegionesPeru />
          </Route>

          <Route exact path="/DatosMundiales" component={DatosMundiales}/>
          <Route exact path="/DatosCountry" component={DatosCountry}/>
          <Route exact path="/DatosRegionesPeru" component={DatosRegionesPeru}/>

        </Switch>

      </Suspense>

    </HashRouter>
  );
}

export default App;