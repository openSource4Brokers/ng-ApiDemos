import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsplashComponent } from './unsplash.component';

const routes: Routes = [{ path: '', component: UnsplashComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsplashRoutingModule { }
