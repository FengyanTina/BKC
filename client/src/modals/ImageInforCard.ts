import { ActivityCategory } from "./ActivityCategory";
import { BaseModal } from "./BaseModal";
import { ImageGallaryItemData } from "./ImgGallary";

export interface ImageInforCardModal extends BaseModal {
   
    subtitle?: string;
    category?:ActivityCategory;
    images?: string | string[]; // Accept either a single string or an array of strings for images
    links?: string|string[];
    time?: Date;
    imageLeft?:boolean;
  }

 
  