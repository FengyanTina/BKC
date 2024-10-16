// src/components/LoginModal.tsx
import React from "react";
import { Dialog, DialogContent, DialogActions, Button } from "@mui/material";




interface RegisterModalProps {
  open: boolean;
  handleClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent>
        {/* <RegisterPage /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterModal;
