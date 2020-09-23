import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TabDirective } from 'ngx-bootstrap/tabs/ngx-bootstrap-tabs';
import { faSpinner, faThumbtack } from '@fortawesome/free-solid-svg-icons';

import { CoronaService } from './corona.service';
import { ICountry } from './_models/country';
import { ICountryHistorical } from './_models/countryHistorical';
import { IDayData } from './_models/dayData';
import { ITimeline } from './_models/timeline';
import { IWorld } from './_models/world';

function setSelectedIndex(s, v: string) {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < s.options.length; i++) {
    if (s.options[i].text === v) {
      s.options[i].selected = true;
      console.log('found: ' + s.options[i].text);
      return;
    }
  }
}

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss'],
})
export class CoronaComponent implements OnInit {
  faSpinner = faSpinner;
  faPin = faThumbtack;

  apiWaiting = true;
  apiError = false;
  evalAvailable = false;

  preferdCountry: string;
  preferdIsRefreshed = false;
  selectedCountryName: string;
  selectedCountryIndex: number;

  public coronaChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  coronaChartData: any;
  coronaEvalChartData: any;

  coronaGlobalNumbers: IWorld;
  coronaCountries: ICountry[];
  coronaCountry: ICountry;
  countryHistorical: ICountryHistorical;


  countryTimeline: ITimeline;

  public coronaChartLabels: string[];
  public coronaChartType = 'line';
  public coronaChartLegend = true;

  countryCases: IDayData[];
  countryDeaths: IDayData[];
  countryRecovered: IDayData[];

  countryCasesOnDay: number[] = [];
  countryDeathsOnDay: number[] = [];
  countryRecoveredOnDay: number[] = [];

  globalLastUpdate: any;
  countryLastUpdate: any;

  graphLabel1: string;
  graphLabel2: string;
  graphLabel3: string;

  constructor(private cs: CoronaService, private ts: TranslateService) { }

  ngOnInit(): void {
    this.getGlobalNumbers();
  }

  onSelect(data: TabDirective): void {
    this.evalAvailable = false;
    if (data.id === 'status') {
      if (this.preferdCountry !== '') {
        if (!this.preferdIsRefreshed) {
          setSelectedIndex(
            document.getElementById('thisCountry'),
            this.preferdCountry
          );
          this.preferdIsRefreshed = true;
        }
      }
    } else {
      if (data.id === 'graph') {
        this.prepareEvalGraph();
      }
    }
  }

  setDefaultCountry() {
    // Add to local storage
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
      (data: ICountry[]) => {
        this.coronaCountries = data;
        this.preferdCountry = localStorage.getItem(
          'coronaApi_DefaultCountryName'
        );
        const tmpCountryIndex = +localStorage.getItem(
          'coronaApi_DefaultCountryIndex'
        );

        if (this.preferdCountry) {
          this.selectedCountryName = this.preferdCountry;
          this.getCountryDetails(tmpCountryIndex);
          this.getHistory(this.preferdCountry);
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
      (data: IWorld) => {
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
    const historical = this.cs.getCountryHistorical(country, 210);
    historical.subscribe(
      (data: ICountryHistorical) => {
        this.countryHistorical = data;
        this.prepareGraph();
      },
      (err) => {
        // console.log(err);
        this.coronaGlobalNumbers = null;
        this.apiError = true;
      }
    );
  }

  prepareGraph() {
    this.countryCases = Object.
      values(this.countryHistorical.timeline.cases);
    this.countryRecovered = Object.
      values(this.countryHistorical.timeline.recovered);
    this.countryDeaths = Object
      .values(this.countryHistorical.timeline.deaths);

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

    console.log(this.countryDeaths[this.countryDeaths.length - 1]);
    // console.log('Deathssum last 150 days till yesterday: ', this.countryDeaths);
  }

  prepareEvalGraph() {
    let casesCounter = 0;
    while (casesCounter < this.countryCases.length - 2) {
      const valueCases1 = Number(this.countryCases[casesCounter]);
      const valueCases2 = Number(this.countryCases[casesCounter + 1]);
      const valueCases3 = valueCases2 - valueCases1;
      this.countryCasesOnDay.push(valueCases3)
      casesCounter++;
    }

    let deathCounter = 0;
    while (deathCounter < this.countryDeaths.length - 2) {
      const valueDeaths1 = Number(this.countryDeaths[deathCounter]);
      const valueDeaths2 = Number(this.countryDeaths[deathCounter + 1]);
      const valueDeaths3 = valueDeaths2 - valueDeaths1;
      this.countryDeathsOnDay.push(valueDeaths3)
      deathCounter++;
    }

    let recoveredCounter = 0;
    while (recoveredCounter < this.countryRecovered.length - 2) {
      const valueRecovered1 = Number(this.countryRecovered[recoveredCounter]);
      const valueRecovered2 = Number(this.countryRecovered[recoveredCounter + 1]);
      const valueRecovered3 = valueRecovered2 - valueRecovered1;
      this.countryRecoveredOnDay.push(valueRecovered3)
      recoveredCounter++;
    }

    this.coronaEvalChartData = [
      { data: this.countryCasesOnDay, label: this.graphLabel1 },
      { data: this.countryDeathsOnDay, label: this.graphLabel2 },
      { data: this.countryRecoveredOnDay, label: this.graphLabel3 }
    ];
    this.coronaChartLabels = Object.keys(this.countryHistorical.timeline.cases);
    this.evalAvailable = true;
  }
}
