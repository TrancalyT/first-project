import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Voiture } from "src/Model/Voiture";
import { ActivatedRoute } from '@angular/router'

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
