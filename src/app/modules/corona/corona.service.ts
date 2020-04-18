import { ICountryHistorical } from './_models/countryHistorical';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICountry } from './_models/country';
import { IWorld } from './_models/world';

@Injectable()
export class CoronaService {
  baseUrl = 'https://corona.lmao.ninja/v2/';

  constructor(private csHttp: HttpClient) {}

  getGlobal(): Observable<IWorld> {
    return this.csHttp.get<IWorld>(this.baseUrl + 'all');
  }

  getAllCountries(): Observable<ICountry[]> {
    return this.csHttp.get<ICountry[]>(this.baseUrl + 'countries');
  }

  getSingleCountry(country: string): Observable<ICountry> {
    return this.csHttp.get<ICountry>(this.baseUrl + 'countries/' + country);
  }

  getCountryHistorical(
    country: string,
    lastDays: number
  ): Observable<ICountryHistorical> {
    return this.csHttp.get<ICountryHistorical>(
      this.baseUrl + 'historical/' + country + '?lastdays=' + lastDays
    );
  }
}
