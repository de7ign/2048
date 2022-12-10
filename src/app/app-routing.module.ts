import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationVaultComponent } from './animation-vault/animation-vault.component';
import { BoardComponent } from './board/board.component'

const routes: Routes = [
  { path: 'animation', component: AnimationVaultComponent },
  { path: '', component: BoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }