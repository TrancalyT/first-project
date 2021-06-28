import { Voiture } from "src/Model/Voiture";

export class VoitureService {

    voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "Corsa")];

    addVoitureToList(event:Voiture){
        this.voitures.push(event);
      }
}