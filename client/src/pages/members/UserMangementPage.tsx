import React from 'react'
import { User } from '../../modals/User';

type Props = {}

const UserMangementPage = (props: Props) => {
    const deleteUser = (userName: string) => {
        let storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
        // Remove the user from the array
        storedUsers = storedUsers.filter((user: User) => user.userName !== userName);
      
        // Save the updated array back to localStorage
        localStorage.setItem("users", JSON.stringify(storedUsers));
      };
      
  return (
    <div>MemberMangement</div>
  )
}

export default UserMangementPage