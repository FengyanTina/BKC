import { BaseModel } from "./BaseModel";

export interface ImageTextCardModal extends BaseModel {
    category?: string;
    subtitle?: string;
    linkSubtitle?: string;
    buttonText?: string;
    time?: Date;
    location?: string;  
    images: string | string[];
    imageLeft?:boolean
  }


 
