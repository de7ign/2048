import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationVaultComponent } from './animation-vault/animation-vault.component';
import { GridContainerComponent } from './grid-container/grid-container.component'

const routes: Routes = [
  { path: 'animation', component: AnimationVaultComponent },
  { path: '', component: GridContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }