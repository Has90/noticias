import React from 'react';
import PropTypes from 'prop-types';


const Noticia = ({noticia}) => {
    
    //extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
        <img src={urlToImage} alt="title" />
    : null;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                    <span className="card-title">{source.name}</span>
                </div>

                <div className="card-content">
                    <h5>{title}</h5>
                    
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves=light btn"
                    >Ver noticia completa</a>
                </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;