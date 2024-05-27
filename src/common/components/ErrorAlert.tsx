import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

type IProps = {
  onClose: () => void
  isVisible: boolean
  errorMessage: string
};
export const ErrorAlert = ({ isVisible, onClose, errorMessage }: IProps) => (
  <Snackbar
    open={isVisible}
    autoHideDuration={5000}
    onClose={onClose}
  >
    <Alert severity="error">
      {errorMessage}
    </Alert>
  </Snackbar>
);