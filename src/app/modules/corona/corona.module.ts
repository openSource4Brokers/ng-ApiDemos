import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { CoronaService } from './corona.service';
import { CoronaRoutingModule } from './corona-routing.module';
import { CoronaComponent } from './corona.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [CoronaComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CoronaRoutingModule
  ],
  providers: [CoronaService]
})
export class CoronaModule {}
