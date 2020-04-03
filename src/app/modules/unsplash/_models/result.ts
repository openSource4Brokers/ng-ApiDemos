// jsontots.com is great to set up the models!
import { Urls } from './urls';
import { Tag } from './tag';
import { Links } from './links';
import { User } from './user';

export interface Result {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  description?: string;
  alt_description?: string;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  user: User;
  tags: Tag[];
}
