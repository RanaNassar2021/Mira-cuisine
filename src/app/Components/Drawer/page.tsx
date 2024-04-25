import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';

type Anchor =  'right' ;

export default function SideBar() {
  const [state, setState] = React.useState({
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
    <Box className="pt-10 bg-brown min-h-screen"
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem className='text-white font-serif text-lg font-semibold'><Link href="/Components/Menu">Menu</Link> </ListItem>
          <Divider className='bg-white '/>
          <ListItem className='text-white font-serif text-lg font-semibold mt-4'><Link href="/Components/OrderOnline">Order Online</Link></ListItem>
          <Divider className='bg-white mt-4'/>
          <ListItem className='text-white font-serif text-lg font-semibold mt-4'><Link href="/Components/Reservation"> Contact & Reservations</Link></ListItem>
          <Divider className='bg-white mt-4'/>
          <ListItem className='text-white font-serif text-lg font-semibold mt-4'><Link href="/Components/OurStory">Our story</Link></ListItem>
          <Divider className='bg-white mt-4'/>
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className='text-black' onClick={toggleDrawer(anchor, true)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg></Button>
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