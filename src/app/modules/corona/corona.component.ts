import { TranslateService } from '@ngx-translate/core';
import { Timeline } from './_models/timeline';
import { DayData } from './_models/dayData';
import { Component, OnInit } from '@angular/core';

import { faSpinner, faThumbtack } from '@fortawesome/free-solid-svg-icons';

import { World } from './_models/world';
import { Country } from './_models/country';
import { CountryHistorical } from './_models/countryHistorical';
import { CoronaService } from './corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss'],
})
export class CoronaComponent implements OnInit {
  faSpinner = faSpinner;
  faPin = faThumbtack;

  apiWaiting = false;
  apiError = false;
  selectedCountryName: string;
  selectedCountryIndex: number;

  public coronaChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  coronaChartData: any;
  coronaGlobalNumbers: World;
  coronaCountries: Country[];
  coronaCountry: Country;
  countryHistorical: CountryHistorical;
  countryTimeline: Timeline;

  public coronaChartLabels: string[];
  public coronaChartType = 'line';
  public coronaChartLegend = true;

  countryCases: DayData[];
  countryDeaths: DayData[];
  countryRecovered: DayData[];

  globalLastUpdate: any;
  countryLastUpdate: any;

  graphLabel1: string;
  graphLabel2: string;
  graphLabel3: string;

  constructor(private cs: CoronaService, private ts: TranslateService) {}

  ngOnInit(): void {
    this.getGlobalNumbers();
  }

  setDefaultCountry() {
    // Add to local storage
    console.log(this.selectedCountryName);
    localStorage.setItem(
      'coronaApi_DefaultCountryName',
      this.selectedCountryName
    );
    localStorage.setItem(
      'coronaApi_DefaultCountryIndex',
      this.selectedCountryIndex.toString()
    );
  }

  getAllCountries() {
    this.apiWaiting = true;
    const countries = this.cs.getAllCountries();
    countries.subscribe(
      (data: Country[]) => {
        this.coronaCountries = data;
        // this.domEntries = JSON.parse(localStorage.getItem('cddEntries_Template'));
        const tmpCountryName = localStorage.getItem(
          'coronaApi_DefaultCountryName'
        );
        const tmpCountryIndex = +localStorage.getItem(
          'coronaApi_DefaultCountryIndex'
        );

        if (tmpCountryName) {
          this.getCountryDetails(tmpCountryIndex);
          this.getHistory(tmpCountryName);
        } else {
          this.getCountryDetails(0);
        }
        this.apiWaiting = false;
        // console.log(this.coronaCountries);
      },
      (err) => {
        // console.log(err);
        this.apiWaiting = false;
        this.apiError = true;
      }
    );
  }

  getGlobalNumbers() {
    this.apiWaiting = true;
    const corona = this.cs.getGlobal();
    corona.subscribe(
      (data: World) => {
        this.coronaGlobalNumbers = data;
        // console.log(this.coronaGlobalNumbers);
        this.globalLastUpdate = new Date(this.coronaGlobalNumbers.updated);
        this.getAllCountries();
        this.apiWaiting = false;
      },
      (err) => {
        // console.log(err);
        this.apiWaiting = false;
        this.apiError = true;
      }
    );
  }

  getCountryDetails(indexInList: number) {
    this.countryHistorical = null;
    if (this.coronaCountries) {
      this.coronaCountry = this.coronaCountries[indexInList];
      this.selectedCountryName = this.coronaCountry.country;
      this.selectedCountryIndex = indexInList;
      this.countryLastUpdate = new Date(this.coronaCountry.updated);
    } else {
    }
  }

  getHistory(country: string) {
    const historical = this.cs.getCountryHistorical(country, 60);
    historical.subscribe(
      (data: CountryHistorical) => {
        this.countryHistorical = data;
        this.prepareChart();
      },
      (err) => {
        // console.log(err);
        this.coronaGlobalNumbers = null;
        this.apiError = true;
      }
    );
  }

  prepareChart() {
    this.countryCases = Object.values(this.countryHistorical.timeline.cases);
    this.countryDeaths = Object.values(this.countryHistorical.timeline.deaths);
    this.countryRecovered = Object.values(
      this.countryHistorical.timeline.recovered
    );

    this.ts.get('CORONA.GraphLabel1').subscribe((res: string) => {
      this.graphLabel1 = res;
    });
    this.ts.get('CORONA.GraphLabel2').subscribe((res: string) => {
      this.graphLabel2 = res;
    });
    this.ts.get('CORONA.GraphLabel3').subscribe((res: string) => {
      this.graphLabel3 = res;
    });

    this.coronaChartData = [
      { data: this.countryCases, label: this.graphLabel1 },
      { data: this.countryDeaths, label: this.graphLabel2 },
      { data: this.countryRecovered, label: this.graphLabel3 },
    ];

    this.coronaChartLabels = Object.keys(this.countryHistorical.timeline.cases);
  }
}
