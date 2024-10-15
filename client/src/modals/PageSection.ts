import { ImageGallaryItemData } from "./ImgGallary";

export interface PageSection {
    id:string;
    title: string;
    subtitle?: string;
   
    category?:string;
    description: string;
    images?: string | string[]|ImageGallaryItemData[]; // Accept either a single string or an array of strings for images
    time?: Date;
    linkSubtitle?: string;
    links?: string|string[];
    location?: string;
  }