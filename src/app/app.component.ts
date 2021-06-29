import { Component, OnInit } from '@angular/core';
import { Voiture } from "src/Model/Voiture";
import { VoitureService } from 'src/Service/VoitureService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  voitures: Array<Voiture> = [];

  constructor(private voitureService:VoitureService){}

  ngOnInit(){
    this.voitures = this.voitureService.voitures;
  }

  // APP GERE LA LISTE DES VOITURES SANS ROUTE
  // voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "Corsa")];
  // selectedVoitureToPush:Voiture;

  // APP GERE LA LISTE DES VOITURES SANS ROUTE
  // addVoitureToList(event:Voiture){
  //   this.voitures.push(event);
  // }

  // getSelectedVoiture(event:Voiture){
  //   this.selectedVoitureToPush = event;
  // }
}
