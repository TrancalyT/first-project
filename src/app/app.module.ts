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

const ROUTES: Routes = [
  { path: '', component: GarageComponent},
  { path: 'detail/:marque/:modele', component: DetailVoitureComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GestionnaireComponent,
    DetailVoitureComponent,
    VoitureComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }