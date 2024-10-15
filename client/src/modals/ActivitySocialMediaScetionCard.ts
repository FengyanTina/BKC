import { ActivityCategory } from "./ActivityCategory";
import { BaseModal } from "./BaseModal";
import { ImageGallaryItemData } from "./ImgGallary";

export interface ActivitySocialMediaScetionCardModal extends BaseModal {
    subTitle?: string;
    category?:ActivityCategory;
    images?: ImageGallaryItemData[]; // Accept either a single string or an array of strings for images   
  }