import { Box, Checkbox, Divider, Input, Paper, Typography } from "@mui/material";
import styles from './signup-card.module.css'

export default function SignupCard () {
    return(
        <Paper className={styles.container}>
            <Box>
                <Typography variant='h6' className={styles.label}>Email or Phone number</Typography>
                <Box className={styles.inputField}>
                    <input type="text" />
                </Box>

            </Box>
            <Box>
                <Typography className={styles.label}>Password</Typography>
                <Box className={styles.inputField}>
                    <input type="password" />
                </Box>
            </Box>
            <Box className={styles.checkBoxDiv}>
                <Checkbox color="success" size ="large" className={styles.checkbox} />
                <Typography>Remember me</Typography>
            </Box>

            <Box>
                <Typography>By clicking Next, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</Typography>
            </Box>

            <button> Next </button>
            <Box>
                <Divider/> or <Divider/>
            </Box>
            <Boc></Boc>
        </Paper>
    )
}