import * as React from 'react';
import Link from "next/link";
import { css } from "@emotion/react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const classes = {
  box:css`
    color: #555;
  `,
  listItem:css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 1.5rem;
  `,
  footer: css`
    position: absolute;
    z-index: 1;
    bottom: 3%;
    left: 18%;
  `,
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '80vw' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      css={classes.box}
    >
      <List>

        <ListItem css={classes.listItem}>
          <PersonIcon /><Link href="./MyPage"> MYPAGE</Link>
        </ListItem>
        
        <Divider />
        <ListItem css={classes.listItem}>
          <LoginIcon /><Link href={"/Auth/Login"}>ログイン</Link>
        </ListItem>
        
        <Divider />
        <ListItem css={classes.listItem}>
          <LogoutIcon /><Link href={"/Auth/Login"}>ログアウト</Link>
        </ListItem>
        
      </List>
      
      <footer css={classes.footer}>
        <p>&copy; 2022 Dr.Brown All Rights Reserved.</p>
      </footer>

    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize='large' sx={{ color: '#fff'}}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

