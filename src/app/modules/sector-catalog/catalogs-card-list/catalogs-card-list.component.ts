import { Component, Input, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ICatalog } from '../_models/catalog';
import { CatalogDetailsComponent } from './../catalog-details/catalog-details.component';

@Component({
  selector: 'app-catalogs-card-list',
  templateUrl: './catalogs-card-list.component.html',
})
export class CatalogsCardListComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Input()
  catalogs: ICatalog[];

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  catalogDetailsModal(catalog: ICatalog) {
    // console.log(catalog);
    const lblTitle = 'Details';
    const initialState = {
      title: lblTitle,
      cat: catalog,
    };
    this.bsModalRef = this.modalService.show(CatalogDetailsComponent, {
      initialState,
    });
  }
}
