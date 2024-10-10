import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Avatar, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { User, UserCategory } from '../../modals/User';
const createId = () => {
    return Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric string
  };
  
interface RegisterPageProps {
    handleClose: () => void; // Add handleClose prop
  }
const RegisterPage: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState<UserCategory | "">(UserCategory.Admin); // Default to Admin for the first user
    const [error, setError] = useState<string>(''); // State for error messages
  
    const handleRegister = async () => {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
  
    //   // Create the first admin user
    //   if (storedUsers.length === 0) {
    //     const adminUser: User = {
    //       id: createId(), // Generate a unique ID for the admin user
    //       name,
    //       password,
    //       userName,
    //       email,
    //       phoneNumber,
    //       address: address || undefined,
    //       role: UserCategory.Admin, // Automatically assign admin role
    //       permissions: {
    //         canEditPages: true,
    //         canViewPages: true,
    //         canEditSchedules: true,
    //         canViewSchedules: true,
    //       },
    //     };
  
    //     storedUsers.push(adminUser);
    //     localStorage.setItem("users", JSON.stringify(storedUsers));
  
    //     alert("Admin user registered successfully.");
    //   } else {
    //     // Only allow admin to register other users
    //     // Check if currentUser is available; otherwise, remove this check or pass currentUser as prop
    //     const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    //     if (currentUser?.category !== UserCategory.Admin) {
    //       alert("Only admins can register new users.");
    //       return;
    //     }
  
        // Create new user data
        const newUser: User = {
          id: createId(), // Generate a unique ID for the new user
          name,
          password,
          userName,
          email,
          phoneNumber,
          
          address: address || undefined,
          category: role as UserCategory,
          permissions: {
            canEditPages: role === UserCategory.Admin,
            canViewPages: true,
            canEditSchedules: role === UserCategory.Admin || role === UserCategory.TeamLeader, // Allow editing schedules for Admin and TeamLeader
            canViewSchedules: true, // Assume all users can view schedules
          },
        };
  
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
  
        alert("User registered successfully.");
    //   }
  
     // Close modal on successful registration
    };
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{ mx: 'auto', bgcolor: 'secondary.main', textAlign: 'center', mb: 1 }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
          Register
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} noValidate>
        <TextField
            placeholder="Enter username"
            fullWidth
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter password"
            fullWidth
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter email"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter phone number"
            fullWidth
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter address (optional)"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="role-select-label">Select Role</InputLabel>
            <Select
              labelId="role-select-label"
              value={role}
              onChange={(e) => setRole(e.target.value as UserCategory)}
              required
            >
              <MenuItem value={UserCategory.Admin}>Admin</MenuItem>
              <MenuItem value={UserCategory.Member}>Member</MenuItem>
              <MenuItem value={UserCategory.TeamLeader}>Team Leader</MenuItem>
              <MenuItem value={UserCategory.TeamMember}>Team Member</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Paper>
     
    </Container>
  );
};

export default RegisterPage;
