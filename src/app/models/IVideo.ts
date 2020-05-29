import {ICategory} from './ICategory';

export interface IVideo {
  id: string;
  tag: ICategory;
}

export interface IVideoCreation {
  id: string;
  tag: string;
}
