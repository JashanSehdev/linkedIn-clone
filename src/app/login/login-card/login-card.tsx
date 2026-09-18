import { Box, Button, Checkbox, Divider, FormHelperText, Paper, TextField, Typography } from "@mui/material";
import googleLogo from '@/../public/google.png'
import appleLogo from '@/../public/apple-logo.png'
import Image from "next/image";
import styles from './login-card.module.css'

export default function LoginCard() {
  return (
    <Paper className={styles.container} elevation={2}>
      <h3 className={styles.title}>Sign In</h3>
      <Box className={styles.subtitle}>
        <Typography variant="h6" sx={{fontSize:'1.2rem'}}>New to LinkedIn?</Typography> <Typography  variant="h6" sx={{fontSize:'1.2rem', fontWeight:'700', color:'#0a66c2'}}>Join Now</Typography>
      </Box>
      <Box className={styles.authButton}>
        <button className={styles.button1}>
        <Image
          style={{ backgroundColor: "white", borderRadius: "100%" }}
          width={40}
          height={40}
          src={googleLogo}
          alt="google logo"
        />
        Continue with Google
      </button>
      <button className={styles.button2}>
        <Image
          style={{ backgroundColor: "white", borderRadius: "100%" }}
          width={25}
          height={25}
          src={appleLogo}
          alt="google logo"
        />
        Sign in with Apple</button>

      </Box>
      

      <Typography sx={{color:'#a1978e'}}>
        By continuing, you agree to LinkedIn’s <span style={{color:'#0a66c2', fontWeight:'540'}}>User Agreement, Privacy Policy,</span> and  <span style={{color:'#0a66c2', fontWeight:'540'}}> Cookie Policy.</span> 
      </Typography>
        <Box className={styles.divider}>
            <Divider sx={{display:'inline'}}/> or <Divider sx={{display:'inline'}}/>
        </Box>

        <Box className={styles.input}>
            <Typography className={styles.label}>Email or Phone</Typography>
            <TextField fullWidth   variant="outlined" />
        </Box>
         <Box className={styles.input}>
            <Typography className={styles.label}>Password</Typography>
            <TextField fullWidth  variant="outlined" />
        </Box>
        <Typography className={`${styles.blue}`}>Forget password?</Typography>
        <Box className={styles.checkbox}>
        <Checkbox className={styles.check_button} size="large" color="success"/>
        <Typography className={styles.Checkbox_text}>Keep me signed in</Typography>

        </Box>
        <button className={styles.submit}>Sign In</button>
    </Paper>
  );
}
