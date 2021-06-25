import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { DetailVoitureComponent } from './detail-voiture/detailVoiture.component';
import { VoitureComponent } from './voiture/voiture.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GestionnaireComponent,
    DetailVoitureComponent,
    VoitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
