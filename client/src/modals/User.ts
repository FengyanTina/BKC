export enum UserCategory {
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
  name: string;
  password: string;
  userName: string;
  email: string;
  phoneNumber: string;
  address: string | undefined;
  category: UserCategory;
  permissions: Permission;
}
// export const mockTeamLeader: User = {
//   name: "David",
//   userId: "12345",
//   category: UserCategory.TeamLeader,
//   permissions: {
//     canEditPages: false,
//     canViewPages: true,
//     canEditSchedules: true,
//     canViewSchedules: true,
//   },
// };
// export const mockAdmin: User = {
//   name: "Johana",
//   userId: "12346",
//   category: UserCategory.Admin,
//   permissions: {
//     canEditPages: true,
//     canViewPages: true,
//     canEditSchedules: true,
//     canViewSchedules: true,
//   },
// };

// export const mockTeamMember: User = {
//   name: "Johana",
//   userId: "12346",
//   category: UserCategory.TeamMember,
//   permissions: {
//     canEditPages: false,
//     canViewPages: true,
//     canEditSchedules: false,
//     canViewSchedules: true,
//   },
// };
