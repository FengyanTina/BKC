import { ActivityCategory } from "./ActivityCategory";
import { BaseModal } from "./BaseModal";
import { Schedule } from "./Schedule";


export interface Activity extends BaseModal{
   
    subTitle?: string;
    time?: Date;
    location?: string;
    category: ActivityCategory;
    image?: string | string[];
    extraDetails?: string;//only member can see
    scheduleList?:Schedule | Schedule[]  
  }

export { ActivityCategory };
 