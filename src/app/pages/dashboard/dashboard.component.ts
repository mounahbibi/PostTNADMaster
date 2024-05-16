import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSidebarHidden = false;

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const map = L.map('mapContainer').setView([34.0, 9.0], 7); // Centrer sur la Tunisie avec un zoom de 7

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const postesTunisiennes = [
      { nom: 'Poste Tunisienne A', coordonnees: [36.8065, 10.1815] },
      { nom: 'Poste Tunisienne B', coordonnees: [35.6892, 10.1446] },
      // Ajoutez les coordonnées pour les autres postes tunisiens ici
    ];

    // Créer une icône de localisation personnalisée
    const locationIcon = L.icon({
      iconUrl: 'assets/loca.png', // Chemin vers l'icône de localisation
      iconSize: [32, 32], // Taille de l'icône
      iconAnchor: [16, 32] // Point d'ancrage de l'icône
    });

    postesTunisiennes.forEach(poste => {
      const coordonnees = L.latLng(poste.coordonnees[0], poste.coordonnees[1]);
      L.marker(coordonnees, { icon: locationIcon }).addTo(map).bindPopup(poste.nom);
    });
  }
}
