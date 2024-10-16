import { ActivityCategory } from "./ActivityCategory";
import { BaseModel } from "./BaseModel";
import { ImageGallaryItemData } from "./ImgGallary";

export interface ActivitySocialMediaScetionCardModel extends BaseModel {
    subtitle?: string;
    category?:ActivityCategory;
    images?: ImageGallaryItemData[]; // Accept either a single string or an array of strings for images   
  }