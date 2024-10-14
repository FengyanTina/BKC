export enum UserCategory {
  Pastor = "pastor",
  Admin = "admin",
  Member = "member",
  TeamLeader = "teamLeader",
  TeamMember = "teamMember",
}

export interface Permission {
  canEditPages: boolean;
  canViewPages: boolean;
  canEditSchedules: boolean;
  canViewSchedules: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName:string;
  userId: string;
  userName: string;
  email: string;
  phoneNumber: string;
  address?: string | undefined;
  category: UserCategory;
  permissions: Permission;
}
