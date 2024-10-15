import { BaseModal } from "./BaseModal";

export interface ImageTextCardModal extends BaseModal {
    category?: string;
    subtitle?: string;
    linkSubtitle?: string;
    buttonText?: string;
    time?: Date;
    location?: string;  
    images: string | string[];
    imageLeft?:boolean
  }


 
