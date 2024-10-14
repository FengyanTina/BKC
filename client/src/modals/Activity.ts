import { Schedule } from "./Schedule";


export interface Activity {
    id: string;
    title: string;
    subTitle?: string;
    time?: Date;
   description:string;
    category: ActivityCategory;
    image: string | string[]|undefined;
    extraDetail?: string;//only member can see
    scheduleList?:Schedule | Schedule[]  
  }
  export enum ActivityCategory {
    SundayService = 'SundayService',
    PrayerService = 'PrayerService',
    baptismService='Baptisim',
    YouthService = 'YouthGroup',
    BibleStudy = 'BibleStudy',
    WorshipService = 'WorshipService',
    HomeGroup='HomeGroup',
    PrayerMeeting ='PrayerMeeting',
    Event ='Event',
    News='News',
    MemeberMeeting ='MemberMeeting'
  }