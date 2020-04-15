import { DayData } from './dayData';

export interface Timeline {
  cases: DayData[];
  deaths: DayData[];
  recovered: DayData[];
}
