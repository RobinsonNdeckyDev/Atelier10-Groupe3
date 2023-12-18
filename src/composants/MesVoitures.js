import React, { Component } from 'react';
import Voiture from './Voiture';
import '../styles/mesVoitures.css';


class MesVoitures extends Component {
    // Notre constructeur
    constructor() {
        super();
        this.state = {
            // Notre objet voitures
            voitures: [
                {
                    image: "https://img.freepik.com/premium-photo/blue-electric-sports-wagon-urban-rural-areas-3d-rendering_101266-19034.jpg?w=1060",
                    marque: "Toyota",
                    couleur: "Bleu",
                    annee: 2020,
                },
                {
                    image: "https://img.freepik.com/premium-photo/compact-sports-car-family-sedan-3d-illustration_101266-13840.jpg?w=1060",
                    marque: "Honda",
                    couleur: "Rouge",
                    annee: 2019,
                },
                {
                    image: "https://img.freepik.com/premium-photo/compact-urban-premium-car-green-hatchback-white-isolated-background-3d-illustration_101266-24580.jpg?w=1060",
                    marque: "Ford",
                    couleur: "Vert",
                    annee: 2022,
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h2>Liste des Voitures</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Marque</th>
                            <th>Couleur</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.voitures.map((voiture, index) => (
                            <Voiture key={index} voiture={voiture} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MesVoitures;