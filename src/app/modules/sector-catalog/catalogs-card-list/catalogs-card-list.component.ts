import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ICatalog } from '../_models/catalog';

@Component({
  selector: 'app-catalogs-card-list',
  templateUrl: './catalogs-card-list.component.html',
})
export class CatalogsCardListComponent implements OnInit {
  @Input()
  catalogs: ICatalog[];

  constructor(
    // private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  catalogDetails(catalog: ICatalog) {
    console.log(catalog);

    /* const myJSON = JSON.stringify(catalog);
    localStorage.setItem('catalog', myJSON);
    this.router.navigate(['/details']); */
  }
}
