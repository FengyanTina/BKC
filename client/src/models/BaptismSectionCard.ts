import { BaseModel } from "./BaseModel";
import { Step } from "./Step";

export interface BaptismSectionModel extends BaseModel {
  subTitle?: string; 
  image: string | string[]; // Accept either a single string or an array of strings for images
  steps?: Step[]; // New field for steps
  };
