import { EventCategory } from "./EventCategory";
import { BaseModel } from "./BaseModel";
import { ImageGallaryItemData } from "./ImgGallary";

export interface ImageInforCardModel extends BaseModel {
   
    subtitle?: string;
    category?:EventCategory;
    images?: string | string[]; // Accept either a single string or an array of strings for images
    
    time?: Date;
    imageLeft?:boolean;
  }

 
  