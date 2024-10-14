import { ImageGallary } from "./ImgGallary";

export interface PageSection {
    id:string;
    title: string;
    subTitle?: string;
   
    category?:string;
    description: string;
    image?: string | string[]|ImageGallary[]; // Accept either a single string or an array of strings for images
    time?: Date;
    linkSubtitle?: string;
    links?: string|string[];
    location?: string;
  }