import { BaseModal } from "./BaseModal";
import { Step } from "./Step";

export interface BaptismSectionModal extends BaseModal {
  subTitle?: string; 
  image: string | string[]; // Accept either a single string or an array of strings for images
  steps?: Step[]; // New field for steps
  };

