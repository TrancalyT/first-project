import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  @Input()
  theVoiture:Voiture;

  @Output()
  selectedCar: EventEmitter<Voiture> = new EventEmitter();

  voitureToSelect(){
    this.selectedCar.emit(this.theVoiture);
  }
}
