import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import styles from './options.module.css'

export default function OptionsCard() {
    return(
        <Paper className={styles.container}>
            <Box className={styles.header}>
                <p>Manage my network</p>
            </Box>
            <Divider/>
            <List>
        {['Connections', 'Following & Followers', 'Groups', 'Events', 'Pages', 'Newsletter'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PeopleIcon /> : <GroupsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Paper>
    )
}