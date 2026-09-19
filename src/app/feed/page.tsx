import { Box } from "@mui/material";
import FeedCard from "./feed-card/feed-card";
import styles from './feed.styles.module.css'
import ProfileCard from "../ui/feed/left-section/profile-card/profile-card";

export default function Feed() {
    return (
        <Box className={styles.container}>
            <ProfileCard/>
        </Box>
    )
}