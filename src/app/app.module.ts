import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { TastieraNumericaComponent } from './tastiera-numerica/tastiera-numerica.component';
import { TastieraOperazioniComponent } from './tastiera-operazioni/tastiera-operazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    TastieraNumericaComponent,
    TastieraOperazioniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
