import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SectorCatalogRoutingModule } from './sector-catalog-routing.module';
import { SectorCatalogComponent } from './sector-catalog.component';

import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { CatalogsCardListComponent } from './catalogs-card-list/catalogs-card-list.component';

@NgModule({
  declarations: [
    SectorCatalogComponent,
    CatalogsCardListComponent,
    CatalogDetailsComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ModalModule.forRoot(),
    FontAwesomeModule,
    SectorCatalogRoutingModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
  ],
  providers: [BsModalRef],
})
export class SectorCatalogModule {}
