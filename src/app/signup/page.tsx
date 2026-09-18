import { Box } from "@mui/material";
import SignupCard from "./signup-card/signup-card";
import styles from './signup.module.css'

export default function SignUp () {
    return(
        <Box className={styles.container}>
            <SignupCard />
        </Box>
    )
}