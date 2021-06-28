import { Component, EventEmitter, Output } from "@angular/core";
import { Voiture } from "src/Model/Voiture";
import { VoitureService } from "src/Service/VoitureService";

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent {
  newMarque: string;
  newModele: string;
  action: string = " ";

  // INJECTION VIA PRIVATE
  constructor(private voitureService:VoitureService){}

  // PLUS BESOIN DANS LE CAS DES ROUTES
  // @Output()
  // addedVoiture: EventEmitter<Voiture> = new EventEmitter();

  ajouterVoiture(){
    let voiture = new Voiture(this.newMarque, this.newModele);
    
    this.voitureService.addVoitureToList(voiture);
    // PLUS BESOIN DE RENVOYER VERS SON COMPONENT PERE AVEC ROUTE
    // if(this.newMarque == null || this.newModele == null){
    //   this.action = 'Veuillez saisir un véhicule.';
    // } else {
    //   this.addedVoiture.emit(voiture);
    //   this.action = "Voiture ajoutée : " + this.newMarque + " " + this.newModele + "."
    // }
  };
}
