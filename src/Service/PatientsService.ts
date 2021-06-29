import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Patient } from "src/Model/Patient";

@Injectable()
export class PatientsService{

    constructor(private http: HttpClient){}

    getAllPatients(){
        const OBS = this.http.get<Patient[]>("http://localhost:8000/patients");
        return OBS;
    }
}