import { Voiture } from "src/Model/Voiture";

export class VoitureService {

    voitures: Array<Voiture> = [new Voiture("BMW", "X6"), new Voiture("OPEL", "Corsa")];

    addVoitureToList(event:Voiture){
        this.voitures.push(event);
      }

    getVoiturebyMarque(marque:string){
      const RESULT = this.voitures.filter((voiture) => {
        return voiture.marque == marque;
      });

      return RESULT[0];
      // RESULT sera un tableau à un indice si la fonction filter retourne true.
    }
}