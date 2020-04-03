import { Source } from './source';

export interface Tag {
  type: string;
  title: string;
  source?: Source;
}
