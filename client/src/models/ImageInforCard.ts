import { ActivityCategory } from "./ActivityCategory";
import { BaseModel } from "./BaseModel";
import { ImageGallaryItemData } from "./ImgGallary";

export interface ImageInforCardModel extends BaseModel {
   
    subtitle?: string;
    category?:ActivityCategory;
    images?: string | string[]; // Accept either a single string or an array of strings for images
    links?: string|string[];
    time?: Date;
    imageLeft?:boolean;
  }

 
  