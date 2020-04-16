import { TranslateService } from '@ngx-translate/core';
import { Timeline } from './_models/timeline';
import { DayData } from './_models/dayData';
import { Component, OnInit } from '@angular/core';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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
      (err) => console.log(err)
    );
  }

  getGlobalNumbers() {
    const corona = this.cs.getGlobal();
    corona.subscribe(
      (data: World) => {
        this.coronaGlobalNumbers = data;
        // console.log(this.coronaGlobalNumbers);
        this.globalLastUpdate = new Date(this.coronaGlobalNumbers.updated);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCountryDetails(indexInList: number) {
    this.countryHistorical = null;
    if (this.coronaCountries) {
      this.coronaCountry = this.coronaCountries[indexInList];
      this.countryLastUpdate = new Date(this.coronaCountry.updated);
      // console.log(this.coronaCountry.country);
    } else {
    }
  }

  getHistory() {
    const historical = this.cs.getCountryHistorical(this.coronaCountry.country);
    historical.subscribe(
      (data: CountryHistorical) => {
        this.countryHistorical = data;
        this.prepareChart();
      },
      (err) => {
        console.log(err);
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
    // console.log(this.coronaChartLabels);
    // console.log(this.coronaChartData);
  }
}
