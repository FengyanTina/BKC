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
import Grid from "@mui/material/Grid2";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { User, UserCategory } from "../../models/User";

interface LoginPageProp {
  onClose: () => void;
}
const LoginPage = ({ onClose }: LoginPageProp) => {
  const [username, setUsername] = useState<string>(""); // State for user username
  const [password, setPassword] = useState<string>(""); // State for user password
  const [error, setError] = useState<string>(""); // State for error messages
  const { login } = useAuth();
  // Handle form submission
  const handleLogin = (userName: string, enteredPassword: string) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Find the user by username
    const user = storedUsers.find((user: User) => user.userName === userName);

    if (!user) {
      alert("User not found");
      return;
    }

    // Compare the entered password with the stored password
    const passwordMatch = user.password === enteredPassword;

    if (passwordMatch) {
      const fakeToken = "fake_jwt_token"; // Simulate a token (replace with real token in a real app)
      login(user, fakeToken); // Call the login function from AuthContext with user and token
      alert("Login successful");
    } else {
      alert("Incorrect password");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = storedUsers.find(
      (user: User) => user.userName === username && user.userId === password
    );

    if (user) {
      const token = "fake_jwt_token"; // Generate or mock a token here
      login(user, token); // Use the login function from AuthContext
      setError(""); // Clear any previous error message
      onClose();
    } else {
      setError("Login failed. Please check your credentials.");
      return;
    }
  };



 

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
          <Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginPage;
