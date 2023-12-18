import React from 'react';
import '../styles/voiture.css'


function Voiture({ voiture }) {
    return (
        <tr>
            <td><img src={voiture.image} alt="" /></td>
            <td>{voiture.marque}</td>
            <td>{voiture.couleur}</td>
            <td>{voiture.annee}</td>
        </tr>
    );
}

export default Voiture;