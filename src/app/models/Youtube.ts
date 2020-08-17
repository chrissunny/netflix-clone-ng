export interface Youtube {
  etag: string;
  kind: string;
  id: YoutubeVideo;
}

export interface YoutubeVideo {
  kind: string;
  videoId: string;
}
