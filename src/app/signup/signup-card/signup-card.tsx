import {
  Box,
  Button,
  Checkbox,
  Divider,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./signup-card.module.css";
import Image from "next/image";
import googleLogo from '@/../public/google.png'
import microsoftLogo from '@/../public/microsoft.png'
import { GoogleAuthButton, MicrosoftAuthButton } from "@/app/ui/auth/auth-buttons";

export default function SignupCard() {
  return (
    <Paper className={styles.container}>
      <Box>
        <p  className={styles.label}>
          Email or Phone number
        </p>
        <Box className={styles.inputField}>
          <input type="text" />
        </Box>
      </Box>
      <Box>
        <p className={styles.label}>Password</p>
        <Box className={styles.inputField}>
          <input type="password" />
        </Box>
      </Box>
      <Box className={styles.checkBoxDiv}>
        <Checkbox color="success" size="large" className={styles.checkbox} />
        <Typography>Remember me</Typography>
      </Box>

      <Box className={styles.subtitle}>
        <span >
          By clicking Agree & Join or Continue, you agree to the LinkedIn </span>  <span className={styles.blue}> User Agreement, Privacy
          Policy, and Cookie Policy.</span>
        
      </Box>

      <button className={styles.submit}> Agree & Join </button>
      <Box className={styles.divider}>
        <Divider /> or <Divider />
      </Box>
      <GoogleAuthButton/>
      <MicrosoftAuthButton/>
      <Box className={styles.footer}>

        <p>Already on LinkedIn?</p><p className={styles.blue}>Sign In</p>
      </Box>
      
    </Paper>
  );
}
