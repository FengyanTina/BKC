import { EventCategory } from "./EventCategory";
import { BaseModel } from "./BaseModel";
import { ImageGallaryItemData } from "./ImgGallary";

export interface ActivitySocialMediaScetionCardModel extends BaseModel {
    inforSectionId:string;
    subtitle?: string;
    category?:EventCategory;
    images?: ImageGallaryItemData[]; // Accept either a single string or an array of strings for images   
  }