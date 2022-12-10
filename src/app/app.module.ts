import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimationVaultComponent } from './animation-vault/animation-vault.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TileComponent,
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