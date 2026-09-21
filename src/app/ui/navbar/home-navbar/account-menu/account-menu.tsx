import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

import styles from "./account-menu.module.css";
import { redirect } from "next/navigation";

const profilePic =
  "https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {

      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (!res.ok) throw new Error("Failed to logout");

      redirect("/login")
    } catch (error: any) {
      console.error("Error occur while logout", error)
    } finally {
    }
  };

  return (
    <React.Fragment>
      <Box className={styles.button} onClick={handleClick}>
        <Avatar src={profilePic} className={styles.avatar} alt="profile pic" />
        <Box className={styles.caption}>
          <p>Me</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="caret-small"
            fill="currentColor"
            aria-hidden="true"
            data-supported-dps="16x16"
            viewBox="0 0 16 16"
            data-token-id="379"
            width={16}
            height={16}
            style={{
              width: "16px",
              minWidth: "16px",
              height: "16px",
              minHeight: "16px",
            }}
          >
            <path d="M8 11 3 6h10Z" />
          </svg>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 1,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              padding: "1rem 0.2rem",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <p onClick={handleLogout}>logout</p>
      </Menu>
    </React.Fragment>
  );
}
