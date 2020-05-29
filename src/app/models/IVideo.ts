import {ICategory} from './ICategory';
import {IYouTubeVideo} from './youtube/IYouTubeVideo';

export interface IVideo {
  id: string;
  tag: ICategory;
}

export interface IVideoCreation {
  id: string;
  tag: string;
}

export interface IVideoEdit {
  categories: ICategory[];
  video: IVideo;
  youtube: IYouTubeVideo;
}

export interface IVideoPair {
  video: IVideo;
  youtube: IYouTubeVideo;
}

export interface IVideoHome {
  first: IVideoPair[];
  second: IVideoPair[];
  third: IVideoPair[];
}
