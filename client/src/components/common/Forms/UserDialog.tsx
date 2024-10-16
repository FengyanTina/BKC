import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import Grid from "@mui/material/Grid2";
import { FormControl, FormHelperText, FormHelperTextProps, InputLabel, MenuItem, Select } from "@mui/material";

import { defaultUser, User, UserCategory, UserDialogMode } from "../../../models/User";
import { UserContext } from "../../../context/UserContext";
import { generateUniqueId } from "../../../utils/generateUniqueId";

type UserDialogProps = {
  mode: UserDialogMode;
};

function UserDialog({ mode }: UserDialogProps) {
  const navigate = useNavigate();
  const { users, setUsers, addUser } = useContext(UserContext);
  const { id } = useParams();
  const initialUser =
    mode === UserDialogMode.Edit
      ? users.find((i) => i.id === id)
      : defaultUser();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    shouldUseNativeValidation: false,
    values: initialUser,
  });

  // Should be used with data from the product dialog
  const createOrEditUser = (userFromDialog: User) => {
    console.log("mode", mode);
    if (mode === UserDialogMode.Edit) {
      const updatedUsers = users.map((user) =>
        user.id === userFromDialog.id ? userFromDialog : user
      );
      setUsers(updatedUsers);
    } else {
      addUser({ ...userFromDialog, id: generateUniqueId() });
    }
  };

  const onSubmit = async (user: User) => {
    if (Object.keys(errors).length > 0) {
      return;
    }
    createOrEditUser(user);
    reset();
    navigate("/aboutUs");
  };

  //   const [imagePreview, setImagePreview] = useState<string | null>(null);

  //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0]; // Get the first file if available
  //     if (file) {
  //       const url = URL.createObjectURL(file);
  //       setImagePreview(url); // Set the preview URL
  //       setValue("image", url); // Set the file directly in the form state
  //     } else {
  //       setImagePreview(null); // Reset the preview if no file is selected
  //       setValue("image", undefined); // Reset the image field
  //     }
  //   };

  return (
    <Dialog open={true} onClose={() => navigate("/aboutUs")}>
      {mode === UserDialogMode.Edit ? (
        <DialogTitle >Edit User: {id} </DialogTitle>
      ) : (
        <DialogTitle>Add User</DialogTitle>
      )}
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
            label="Firstname"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            margin="normal"
            {...register("firstName", { required: "Name is required." })}
          />
          <TextField
            label="Lastname"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            margin="normal"
            {...register("lastName", { required: "Last name is required." })}
          />
          <TextField
            label="UserName"
            fullWidth
            error={!!errors.userName}
            helperText={errors.userName?.message}
            margin="normal"
            {...register("userName", {
              required: "userName is required.",
            })}
          />

          <TextField
            label="UserId"
            type="string"
            margin="normal"
            error={!!errors.userId}
            helperText={errors.userId?.message}
            fullWidth
            {...register("userId", {
              required: "UserId is required.",
            })}
          />
        
          <TextField
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            fullWidth
            label="Phone"
            type="string"
            margin="normal"
            {...register("phoneNumber", {
              required: "This input is required.",
              pattern: {
                value: /^[0-9]+$/i,
                message: "This input must be a numbers",
              },
              minLength: {
                value: 10,
                message: "This input must exceed 5 characters",
              },
              maxLength: {
                value: 14,
                message: "This input must be less than 5 characters",
              },
            })}
          />

          <TextField
            error={!!errors.email}
            helperText={errors.email?.message}
           type="string"
            margin="normal"
            label="Email"
            fullWidth
            {...register("email", {
              required: "This input is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "This input must be a email",
              },

              minLength: {
                value: 8,
                message: "This input must exceed 8 characters",
              },
              maxLength: {
                value: 35,
                message: "This input must be less than 35 characters",
              },
            })}
          />

          {/*   
         <Box marginTop={2}>
        <input
          type="file"
          accept="image/*"
          {...register("image")} // Register the file input with react-hook-form
          onChange={handleFileChange} // Call handleFileChange on file selection
        />
        {errors.image && (
          <span style={{ color: 'red' }}>{errors.image.message}</span>
        )}
      </Box>

      {imagePreview && (
        <Box marginTop={2}>
          <img src={imagePreview} alt="Uploaded preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </Box>
      )} */}
     <FormControl fullWidth margin="normal" error={!!errors.category}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            {...register("category", { required: "Category is required." })} // Register the category field
          >
            {Object.values(UserCategory).map((category) => (
              <MenuItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalizing category names */}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.category?.message}</FormHelperText>
        </FormControl>

         
          <Grid size={{ xs: 12, sm: 4 }} paddingLeft={3} py={1}>
            <TextField
              error={!!errors.address}
              helperText={errors.address?.message}
              type="text"
              fullWidth
              autoComplete="street-address"
              label="Address"
              variant="standard"
              {...register("address", {
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "This input must be less than 20 characters",
                },
              })}
            />
          </Grid>

          <Grid size={{ xs: 12,  md:12}} paddingLeft={3} py={1}>
            <TextField
              error={!!errors.zipcode}
              helperText={errors.zipcode?.message}
              type="text"
              autoComplete="postal-code"
             
              label="Zipcode"
              variant="standard"
              {...register("zipcode", {
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "This input must be a numbers",
                },
                minLength: {
                  value: 4,
                  message: "This input must exceed 4 numbers",
                },
                maxLength: {
                  value: 5,
                  message: "This input must be less than 8 numbers",
                },
              })}
            />
          </Grid>
          

          <Box display={"flex"} justifyContent={"flex-end"} marginTop={"16px"}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: "8px" }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/aboutUs")}
            >
              Cancel
            </Button>
          </Box>

        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UserDialog;
