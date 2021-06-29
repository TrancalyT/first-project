import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/Model/Patient';
import { PatientsService } from 'src/Service/PatientsService';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  listePatients:Array<Patient>;
  
  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patientsService.getAllPatients().subscribe((response)=>{
      this.listePatients = response;
    });
  }

}
