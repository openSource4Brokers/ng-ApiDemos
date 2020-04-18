import { ICatalog } from './_models/catalog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createHttpObservable } from './_common/util';
import { tap, map, shareReplay } from 'rxjs/operators';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sector-catalog',
  templateUrl: './sector-catalog.component.html',
  styleUrls: ['./sector-catalog.component.scss'],
})
export class SectorCatalogComponent implements OnInit {
  faSpinner = faSpinner;
  apiWaiting = true;
  apiError = false;

  catalogs33$: Observable<ICatalog[]>;
  catalogs39$: Observable<ICatalog[]>;
  catalogs79$: Observable<ICatalog[]>;
  catalogs96$: Observable<ICatalog[]>;
  catalogs97$: Observable<ICatalog[]>;
  catalogs145$: Observable<ICatalog[]>;
  catalogs2393$: Observable<ICatalog[]>;
  catalogs445$: Observable<ICatalog[]>;
  catalogs463$: Observable<ICatalog[]>;
  catalogs687$: Observable<ICatalog[]>;
  catalogs4000$: Observable<ICatalog[]>;
  catalogs9900$: Observable<ICatalog[]>;
  catalogs40001$: Observable<ICatalog[]>;
  catalogs47696$: Observable<ICatalog[]>;

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    // http://app.sectorcatalog.be/SectorCatalog/feed/digestedcatalogItems?SecureGuid=D4114B06-2492-433B-A4E1-9F89017F6D89&Language%5B%5D=NL&CompanyCode%5B%5D=79&CompanyCode%5B%5D=97&CompanyCode%5B%5D=145&CompanyCode%5B%5D=487&CompanyCode%5B%5D=39&CompanyCode%5B%5D=96&CompanyCode%5B%5D=9900&CompanyCode%5B%5D=687&CompanyCode%5B%5D=0739&CompanyCode%5B%5D=463&CompanyCode%5B%5D=1401&CompanyCode%5B%5D=40001&CompanyCode%5B%5D=359&CompanyCode%5B%5D=58

    const sectorCatalogUrl =
      'https://app.sectorcatalog.be/SectorCatalog/feed/digestedcatalogItems?SecureGuid=D4114B06-2492-433B-A4E1-9F89017F6D89';

    const http$ = createHttpObservable(sectorCatalogUrl);
    // only for checking model selected by broker
    http$.subscribe(
      (catalogs: ICatalog[]) => console.log(catalogs),
      () => {},
      () => {
        // console.log('completed');
      }
    );

    const allcatalogs$: Observable<ICatalog[]> = http$.pipe(
      tap(() => {
        // console.log('HTTP request executed');
        this.apiWaiting = false;
      }),
      map((res) => Object.values(res[`Items`])),
      shareReplay()
    );

    this.catalogs33$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '33')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs39$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '39')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs79$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '79')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs96$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '96')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs97$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '97')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs145$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '145')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs445$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '445')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs463$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '463')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs687$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '687')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs2393$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '2393')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs4000$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '4000')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs9900$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '9900')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs40001$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (not to confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '40001')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );

    this.catalogs47696$ = allcatalogs$.pipe(
      map((catalogs) =>
        // array filter (not to confuse with RxJs 'filter' )
        catalogs
          .filter((catalog) => catalog.CompanyCode === '47696')
          .filter((catalog) => catalog.Language === 'NL')
      )
    );
  }
}
