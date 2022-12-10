import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { GridCardComponent } from './grid-card/grid-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    GridCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }