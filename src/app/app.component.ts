import { Component } from '@angular/core';
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "Corsa")];
  selectedVoitureToPush:Voiture;

  addVoitureToList(event:Voiture){
    this.voitures.push(event);
  }

  getSelectedVoiture(event:Voiture){
    this.selectedVoitureToPush = event;
  }
}
