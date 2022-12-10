import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimationVaultComponent } from './animation-vault/animation-vault.component';

@NgModule({
  declarations: [
    AppComponent,
    GridContainerComponent,
    GridCardComponent,
    AnimationVaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }