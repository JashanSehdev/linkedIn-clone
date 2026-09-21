import { Box } from "@mui/material";
import FeedCard from "./feed-card/feed-card";
import styles from "./feed.styles.module.css";
import ProfileCard from "../ui/feed/left-section/profile-card/profile-card";
import OptionsCard from "../ui/feed/left-section/options-card/options-card";
import AnalyticsCard from "../ui/feed/left-section/analytics-card/analytics-card";
import LinkedinNews from "../ui/feed/right-section/linkedin-news";
import { feedData } from "@/data/feed";
import CreatePost from "./create-card/create-card";

export default function Feed() {
  return (
    <Box className={styles.container}>
      <Box className={styles.sub_container}>
        <Box className={styles.left_section}>
          <ProfileCard />
          <AnalyticsCard />
          <OptionsCard />
        </Box>
        <Box className={styles.mid_section}>
          <CreatePost/>
          {
            feedData.map((item) => (
              <FeedCard key={item.id} post={item}/>
            ))
          }
            
        </Box>
        <Box className={styles.right_section}>
          <LinkedinNews/>
        </Box>
      </Box>
    </Box>
  );
}
