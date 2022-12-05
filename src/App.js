//Componentes de 3eros


//Componentes propios
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header titleHeader = "Galería de imágenes con React" />
      <div>
        
        <Card imageCard = "#" titleCard = "#" textCard = "#" altImage = "Imágen de " />

        <Card imageCard = "#" titleCard = "#" textCard = "#" altImage = "Imágen de " />

        <Card imageCard = "#" titleCard = "#" textCard = "#" altImage = "Imágen de " />

      </div>
      <Footer textFooter = "Creado por Cristóbal Paredes" />
    </div>
  );
}

export default App;