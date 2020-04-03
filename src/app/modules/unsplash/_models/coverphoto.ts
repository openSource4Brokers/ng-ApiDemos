import { Urls } from './urls';
import { Links } from './links';
import { User2 } from './user2';

export interface Coverphoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: null | string | string;
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
  user: User2;
}
