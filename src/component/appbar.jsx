
import * as React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import { Followers } from './followers';  
import { Following } from './following';  
import { Repositories } from './repositories';
import { Dashboard } from './dashboard';

export function Exdrawer() {
  const [dropdown, setDropdown] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDropdown({ ...dropdown, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon />, route: '/dashboard' },
          { text: 'Followers', icon: <PeopleIcon />, route: '/followers' },
          { text: 'Following', icon: <GroupIcon />, route: '/following' },
          { text: 'Repositories', icon: <FolderIcon />, route: '/repositories' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.route}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Router>
      <div className="bg-dark p-2">
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor="left"
          open={dropdown['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>

        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} /> {/* Add Dashboard route */}
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
          <Route path="/repositories" element={<Repositories />} />
        </Routes>
      </div>
    </Router>
  );
}
