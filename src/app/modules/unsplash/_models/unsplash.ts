// jsontots.com is great to set up the models!
import { Result } from './result';

export interface Unsplash {
  total: number;
  total_pages: number;
  results: Result[];
}
