
import { ActivityCategory } from "./Event";
import { Job } from "./Job";

export interface ServingPositionSchedule {
    id:string;
    startTime: string;
    endTime: string;
    activityCategory: ActivityCategory;
    team: string;
    memberNeeded?: number;
    scheduleStatus: "open" | "closed"; // Union for specific values
    job: Job[]; // Array of categories, each with its own jobs
  }