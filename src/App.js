import React, { Suspense, lazy } from 'react';
import PantallaDeCarga from './components/PantallaDeCarga'
import {BrowserRouter,Switch,Route,Redirect,HashRouter} from "react-router-dom";
import { ThemeProvider } from 'theme-ui'
import tema from './assets/styles/temas/theme'
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const DatosMundiales = lazy(() => import('./components/DatosMundiales'));
const DatosCountry = lazy(() => import('./components/DatosCountry'));
const DatosRegionesPeru = lazy(() => import('./components/DatosRegionesPeru'));
const AcercaDeLosDesarrolladores = lazy(() => import('./components/informacion/AcercaDeLosDesarrolladores'));
const ComoHicimosLaPagina = lazy(() => import('./components/informacion/ComoHicimosLaPagina'));
const PrevenirElCovid19 = lazy(() => import('./components/informacion/PrevenirElCovid19'));

function App (){
  
  return (
    <HashRouter>
      <ThemeProvider theme={tema}>
        <Suspense fallback={<PantallaDeCarga />}>
          <Header />
          <Switch>
            <Suspense fallback={<div>cargando..</div>}>
              <Route exact path="/">
                <DatosMundiales />
                <DatosCountry />
                <DatosRegionesPeru />
              </Route>
              <Route path="/about" component={AcercaDeLosDesarrolladores}/>
              <Route path="/coide-source" component={ComoHicimosLaPagina}/>
              <Route path="/prevencion" component={PrevenirElCovid19}/>
            </Suspense>
          </Switch>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;