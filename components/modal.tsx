import { useEffect } from "react";
import { Modal, Box, Typography, Fade } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface SuccessModalProps {
  status: { success: boolean; message: string } | null;
  onClose: () => void;
}

export default function SuccessModal({ status, onClose }: SuccessModalProps) {
  // Auto-close after 3 seconds when modal is open
  useEffect(() => {
    if (status?.success) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status, onClose]);

  return (
    <Modal
      open={status?.success === true}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description">
      <Fade in={status?.success === true}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "400px" }, // Responsive width
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: 2, sm: 4 }, // Responsive padding
            borderRadius: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}>
          <CheckCircleIcon sx={{ color: "success.main", fontSize: 80 }} />
          <Typography
            id="success-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", color: "text.primary" }}>
            Success
          </Typography>
          <Typography
            id="success-modal-description"
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.5 }}>
            {status?.message}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
