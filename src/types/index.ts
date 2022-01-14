export interface ImageData {
  id: string;
  alt_description: string;
  urls: { small: string };
  links: { html: string };
}

export interface NormalizedImageData {
  id: string;
  altDescription: string;
  url: string;
  unsplashLink: string;
}

export type DataImages = NormalizedImageData[] | null | [];
export type Status = 'idle' | 'pending' | 'resolved' | 'rejected';
export interface DataImagesState {
  status: Status;
  dataImages: DataImages;
  error: unknown;
}
