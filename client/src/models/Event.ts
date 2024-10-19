import { EventCategory } from "./EventCategory";
import { BaseModel } from "./BaseModel";
import { Schedule } from "./Schedule";


export interface Event extends BaseModel{
   
    subTitle?: string;
    endTime?:Date;
    startTime?: Date;
    location?: string;
    category: EventCategory;
    image?: string | string[];
    extraDetails?: string;//only member can see
    scheduleList?:Schedule | Schedule[]  
  }


 