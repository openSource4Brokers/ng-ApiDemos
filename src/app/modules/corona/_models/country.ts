import { CountryInfo } from './countryInfo';

export interface Country {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion?: number;
  deathsPerOneMillion?: number;
  updated: number;
}
// https://corona.lmao.ninja/countries/Belgium
// use jsontots.com to set up the models with ease!
