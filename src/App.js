import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DatosMundiales from './DatosMundiales'
import DatosCountry from './DatosCountry'
import DatosRegionesPeru from './DatosRegionesPeru'

function App (){
  
  return (
    <div>
      <Navbar />
      <DatosMundiales />
      <DatosCountry />
      <DatosRegionesPeru />
      <Footer />
    </div>
  );
}

export default App;
