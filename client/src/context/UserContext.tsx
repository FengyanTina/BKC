import React, { createContext, useEffect, useState } from 'react'
import { User } from '../modals/User';
import { useLocalStorage } from '../hooks/UseLocalStorage';

export const UserContext = createContext({
    users: [] as User[],
    setUsers: (users: User[]) => {},
    registerUser: (newUser: User) => {},
    removeUser: (id: string) => {},
  });
  
export function UserProvider({ children }: { children: React.ReactNode }) {
    // const { setIsSnackbarOpen, setSnackbarActionType } =
    //   useContext(SnackbarContext);
  
    const [users, setUsers] = useLocalStorage<User[]>("users", []);

    //when using real db, only need this one useEffect
    // useEffect(() => {
    //     const loadUsers = async () => {
    //       const usersFromDB = await fetchUsersFromDB();
    //       setUsers(usersFromDB);
    //     };
        
    //     loadUsers();
    //   }, []);
    const registerUser = (newUser: User) => {
        const updatedData = [...users, newUser];
        setUsers(updatedData);
      };
    
      const removeUser = (id: string) => {
        const updatedUsersData = users.filter((user) => user.id !== id);
        setUsers(updatedUsersData);
      };
  
    return (
      <UserContext.Provider
        value={{ users, setUsers, registerUser: registerUser, removeUser }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  