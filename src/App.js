import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header titleHeader = "Galería de imágenes con React" />
      <div>
        <Card imageCard="https://images.pexels.com/photos/2524121/pexels-photo-2524121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titleCard = "Grey" textCard = "Hola, soy Gray, un gatito muy curioso."/>

        <Card imageCard="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg" titleCard = "Stains" textCard = "Hola, soy Stain y me encanta dormir."/>

        <Card imageCard="https://images.pexels.com/photos/13528195/pexels-photo-13528195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titleCard = "Gold" textCard = "Hola, soy Gold y me encanta el pescado."/>

      </div>
      <Footer textFooter = "Creado por Cristóbal Paredes" />
    </div>
  );
}

export default App;