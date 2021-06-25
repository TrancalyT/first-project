import { Component, EventEmitter, Output } from "@angular/core";
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent {
  newMarque: string;
  newModele: string;
  action: string = " ";

  @Output()
  addedVoiture: EventEmitter<Voiture> = new EventEmitter();

  ajouterVoiture(){
    let voiture = new Voiture(this.newMarque, this.newModele);
    if(this.newMarque == null || this.newModele == null){
      this.action = 'Veuillez saisir un véhicule.';
    } else {
      this.addedVoiture.emit(voiture);
      this.action = "Voiture ajoutée : " + this.newMarque + " " + this.newModele + "."
    }
  };
}
