// jsontots.com is great to set up the models!
import { Type } from './type';

export interface Ancestry {
  type: Type;
  category: Type;
  subcategory?: Type;
}
