import { Youtube } from './youtube';

export interface YoutubeApiResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  items: Youtube[];
}
