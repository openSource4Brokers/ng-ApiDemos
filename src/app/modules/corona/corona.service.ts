import { CountryHistorical } from './_models/countryHistorical';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from './_models/country';
import { World } from './_models/world';

@Injectable()
export class CoronaService {
  baseUrl = 'https://corona.lmao.ninja/v2/';

  constructor(private csHttp: HttpClient) {}

  getGlobal(): Observable<World> {
    return this.csHttp.get<World>(this.baseUrl + 'all');
  }

  getAllCountries(): Observable<Country[]> {
    return this.csHttp.get<Country[]>(this.baseUrl + 'countries');
  }

  getSingleCountry(country: string): Observable<Country> {
    return this.csHttp.get<Country>(this.baseUrl + 'countries/' + country);
  }

  getCountryHistorical(
    country: string,
    lastDays: number
  ): Observable<CountryHistorical> {
    return this.csHttp.get<CountryHistorical>(
      this.baseUrl + 'historical/' + country + '?lastdays=' + lastDays
    );
  }
}
