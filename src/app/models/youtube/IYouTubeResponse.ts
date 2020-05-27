import {IYouTubeVideo} from './IYouTubeVideo';

export interface IYouTubeResponse {
  kind: string;
  etag: string;
  items: IYouTubeVideo[];
  pageInfo: IYouTubePageInfo;
}

export interface IYouTubePageInfo {
  totalResults: number;
  resultsPerPage: number;
}
