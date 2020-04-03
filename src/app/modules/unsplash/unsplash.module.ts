import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsplashRoutingModule } from './unsplash-routing.module';
import { UnsplashComponent } from './unsplash.component';


@NgModule({
  declarations: [UnsplashComponent],
  imports: [
    CommonModule,
    UnsplashRoutingModule
  ]
})
export class UnsplashModule { }
