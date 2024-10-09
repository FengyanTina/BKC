import {
    Avatar,
    Box,
    Container,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
    Checkbox,
    Button,
  
    Link,
  } from "@mui/material";
  import 
   
    Grid
   
 from "@mui/material/Grid2";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { User, UserCategory } from "../../modals/User";
import RegisterModal from "../register/RegisterModal";
  interface LoginPageProp{
    onClose: () => void;
  }
  const LoginPage = ({onClose}:LoginPageProp) => {
    const [username, setUsername] = useState<string>(""); // State for user username
    const [password, setPassword] = useState<string>(""); // State for user password
    const [error, setError] = useState<string>(""); // State for error messages
    const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false); // State to control modal visibility
    const { login } = useAuth();
    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields are required");
            return;
        }

        const storedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
        const user = storedUsers.find(
            (user) => user.userName === username && user.password === password
        );

        if (user) {
            // Use the login function from AuthContext
            login(user.id, user.userName, user.name, user.category, "fake_jwt_token"); // You can replace the token with a real one if needed
            setError(""); // Clear any previous error message
            onClose();
        } else {
            setError("Login failed. Please check your credentials.");
        }


    };
    const handleRegisterOpen = () => {
      setIsRegisterOpen(true);
    };
  
    const handleRegisterClose = () => {
      setIsRegisterOpen(false);
    };
  
  
  
    // Check if user is already logged in
   

    return (
      <Container maxWidth="xs">
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          <Avatar
            sx={{
              mx: "auto",
              bgcolor: "secondary.main",
              textAlign: "center",
              mb: 1,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          {error && <Typography color="error">{error}</Typography>}
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              placeholder="Enter username"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
             
              autoFocus
              sx={{ mb: 2 }}
            />
            <TextField
              placeholder="Enter password"
              fullWidth
              required
              value={password}
            onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
              Sign In
            </Button>
          </Box>
          <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
            <Grid>
              <Link component={RouterLink} to="/forgot">
                Forgot password?
              </Link>
            </Grid>
            <Grid >
              <Link component="button"   onClick={handleRegisterOpen}>
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Paper>
        <RegisterModal open={isRegisterOpen} handleClose={handleRegisterClose} />
      </Container>
    );
  };
  
  export default LoginPage;
  async function fakeLoginApi(username: string, password: string): Promise<LoginResponse> {
    console.log("Logging in user:", { username, password });
  
    // Simulating a successful login with mock user data
    if (username === "John" && password === "12345") {
      return {
        success: true,
        data: {
          id: "1", // Mock ID
          name: "John Doe", // Mock name
          username: "John", // Mock username
          role: UserCategory.Admin, // Mock user role
          token: "fake_jwt_token", // Mock token
        },
      };
    } else {
      return { success: false };
    }
  }
  
 
  
  interface LoginResponse {
    success: boolean;
    data?: {
        id:string;
      name: string;
      username: string;
      token: string; // This will be returned on successful login
      role:  UserCategory;
    };
  }