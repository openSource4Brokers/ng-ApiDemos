import { Component, OnInit } from '@angular/core';

import { World } from './_models/world';
import { Country } from './_models/country';
import { CountryHistorical } from './_models/countryHistorical';
import { CoronaService } from './corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit {
  coronaGlobalNumbers: World;
  coronaCountries: Country[];
  coronaCountry: Country;

  countryHistorical: CountryHistorical;

  globalLastUpdate: any;
  countryLastUpdate: any;
  busyGlobal = false;
  busyCountry = false;

  constructor(private cs: CoronaService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    const countries = this.cs.getAllCountries();
    countries.subscribe(
      (data: Country[]) => {
        this.coronaCountries = data;
        this.getCountryDetails(0);
        this.getGlobalNumbers();
        // console.log(this.coronaCountries);
      },
      err => console.log(err)
    );
  }

  getGlobalNumbers() {
    this.busyGlobal = true;
    const corona = this.cs.getGlobal();
    corona.subscribe(
      (data: World) => {
        this.coronaGlobalNumbers = data;
        // console.log(this.coronaGlobalNumbers);
        this.globalLastUpdate = new Date(this.coronaGlobalNumbers.updated);
        this.busyGlobal = false;
      },
      err => {
        console.log(err);
        this.busyGlobal = true;
      }
    );
  }

  getCountryDetails(indexInList: number) {
    this.countryHistorical = null;
    if (this.coronaCountries) {
      this.busyGlobal = false;
      this.coronaCountry = this.coronaCountries[indexInList];
      this.countryLastUpdate = new Date(this.coronaCountry.updated);
      // console.log(this.coronaCountry);
    } else {
      this.busyGlobal = true;
    }
  }

  getHistory() {
    this.busyCountry = true;
    const historical = this.cs.getCountryHistorical(this.coronaCountry.country);
    historical.subscribe(
      (data: CountryHistorical) => {
        this.countryHistorical = data;
        console.log(this.countryHistorical);
        this.busyCountry = false;
      },
      err => {
        console.log(err);
        this.busyCountry = false;
      }
    );
  }
}
