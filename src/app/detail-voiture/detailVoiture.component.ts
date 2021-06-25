import { Component, Input, OnInit} from "@angular/core";
import { Voiture } from "src/Model/Voiture";

@Component({
  selector: 'app-detailVoiture',
  templateUrl: './detailVoiture.component.html',
  styleUrls: ['./detailVoiture.component.css']
})
export class DetailVoitureComponent implements OnInit{
  @Input()
  selectedVoiture:Voiture;
  
  status: boolean = Math.random() > 0.5 ? true : false;
  nameStatus: string = this.status ? 'ON' : 'OFF';
  buttonName:string = this.status ? 'Eteindre le véhicule' : 'Allumer le véhicule';
  textColor: string = this.status ? 'green' : 'crimson';
  kilometre:number = Math.floor(Math.random() * 2500);
  essence:string = this.kilometre > 700 ? 'OK' : 'FAIBLE';
  huile:string = this.kilometre > 2000 ? 'To check' : 'OK';
  essenceColor:string = this.kilometre > 700 ? 'green' : 'crimson';
  huileColor:string = this.kilometre > 2000 ? 'orange' : 'green';

  ngOnInit(){
    
  }

  ngOnChanges(){
    if(this.selectedVoiture){
      this.status = this.selectedVoiture.status;
      this.nameStatus = this.status ? 'ON' : 'OFF';
      this.buttonName = this.status ? 'Eteindre le véhicule' : 'Allumer le véhicule';
      this.textColor = this.status ? 'green' : 'crimson';
      this.kilometre = Math.floor(Math.random() * 2500);
      this.essence = this.kilometre > 700 ? 'OK' : 'FAIBLE';
      this.huile = this.kilometre > 2000 ? 'To check' : 'OK';
      this.essenceColor = this.kilometre > 700 ? 'green' : 'crimson';
      this.huileColor = this.kilometre > 2000 ? 'orange' : 'green';
    }
  }

  isEmptyObject(selectedVoiture) {
    let name;
    for (name in selectedVoiture) {
        if (selectedVoiture.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
  }

  statusVehicule(){
    if(this.status){
      this.status = false;
      this.selectedVoiture.status = this.status;
      this.nameStatus = 'OFF';
      this.buttonName = 'Allumer le véhicule';
      this.textColor = 'crimson';
    } else {
      this.status = true;
      this.selectedVoiture.status = this.status;
      this.nameStatus = 'ON';
      this.buttonName = 'Eteindre le véhicule';
      this.textColor = 'green';
    }
  }

}
