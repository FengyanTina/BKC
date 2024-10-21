import React, { createContext, useEffect, useState } from 'react'
import { User } from '../models/User';
import { useLocalStorage } from '../hooks/UseLocalStorage';
import initialUsers from '../data';

export const UserContext = createContext({
    users: [] as User[],
    setUsers: (users: User[]) => {},
    addUser: (newUser: User) => {},
    removeUser: (id: string) => {},
    removeUsers: (id: string[]) => {},
  });
  
export function UserProvider({ children }: { children: React.ReactNode }) {
    // const { setIsSnackbarOpen, setSnackbarActionType } =
    //   useContext(SnackbarContext);
  
    const [users, setUsers] = useLocalStorage<User[]>("users", initialUsers);

    //when using real db, only need this one useEffect
    // useEffect(() => {
    //     const loadUsers = async () => {
    //       const usersFromDB = await fetchUsersFromDB();
    //       setUsers(usersFromDB);
    //     };
        
    //     loadUsers();
    //   }, []);
    
    const addUser = (newUser: User) => {
        const updatedData = [...users, newUser];
        setUsers(updatedData);
      };
    
      const removeUser = (id: string) => {
        const updatedUsersData = users.filter((user) => user.id !== id);
        setUsers(updatedUsersData);
      };
    const removeUsers = (ids: string[]) => {
        const updatedUsersData = users.filter((user) => !ids.includes(user.id));
        setUsers(updatedUsersData);
      };
    return (
      <UserContext.Provider
        value={{ users, setUsers, addUser, removeUsers,removeUser }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  