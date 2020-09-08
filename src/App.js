import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticas] = useState([]);


  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=76d1359a2e7d4ea2bb98109366959722`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticas(noticias.articles);
    }
    
    consultarAPI();

  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />
      <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias 
            noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;
