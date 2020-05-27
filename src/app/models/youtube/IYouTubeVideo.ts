export interface IYouTubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
}


export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IVideoThumbnails;
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalization;
}

export interface IVideoThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standard: IThumbnail;
  maxres: IThumbnail;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ILocalization {
  title: string;
  description: string;
}
