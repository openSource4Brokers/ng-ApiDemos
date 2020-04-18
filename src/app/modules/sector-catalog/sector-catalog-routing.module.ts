import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectorCatalogComponent } from './sector-catalog.component';

const routes: Routes = [
  { path: '', component: SectorCatalogComponent },
  { path: 'details', component: CatalogDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorCatalogRoutingModule {}
