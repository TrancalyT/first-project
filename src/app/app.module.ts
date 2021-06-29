import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { DetailVoitureComponent } from './detail-voiture/detailVoiture.component';
import { VoitureComponent } from './garage/voiture/voiture.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { VoitureService } from 'src/Service/VoitureService';
import { GarageComponent } from './garage/garage.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { PatientsService } from 'src/Service/PatientsService';

const ROUTES: Routes = [
  { path: '', component: GarageComponent},
  { path: 'detail/:marque/:modele', component: DetailVoitureComponent },
  { path: 'patients', component: PatientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GestionnaireComponent,
    DetailVoitureComponent,
    VoitureComponent,
    GarageComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    VoitureService,
    PatientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }