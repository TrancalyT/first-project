import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { DetailVoitureComponent } from './detail-voiture/detailVoiture.component';
import { VoitureComponent } from './voiture/voiture.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { VoitureService } from 'src/Service/VoitureService';

const ROUTES: Routes = [
  { path: '', component: VoitureComponent},
  { path: 'detail/:marque', component: DetailVoitureComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GestionnaireComponent,
    DetailVoitureComponent,
    VoitureComponent
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