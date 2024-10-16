import { ActivityCategory } from "./ActivityCategory";
import { BaseModel } from "./BaseModel";
import { Schedule } from "./Schedule";


export interface Activity extends BaseModel{
   
    subTitle?: string;
    time?: Date;
    location?: string;
    category: ActivityCategory;
    image?: string | string[];
    extraDetails?: string;//only member can see
    scheduleList?:Schedule | Schedule[]  
  }

export { ActivityCategory };
 