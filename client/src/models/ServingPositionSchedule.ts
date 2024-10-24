

import { EventCategory } from "./EventCategory";
import { Job } from "./Job";

export interface ServingPositionSchedule {
    id:string;
    startTime: string;
    endTime: string;
    activityCategory: EventCategory;
    team: string;
    memberNeeded?: number;
    scheduleStatus: "open" | "closed"; // Union for specific values
    job: Job[]; // Array of categories, each with its own jobs
  }