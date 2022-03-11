import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import { Divider, ListItem } from '@mui/material'

type Anchor = 'menu'
const primaryMenuItem = [
  { item: 'About', href: '/About' },
  { item: 'Services', href: '/services' },
  { item: 'Contact', href: '/contact' },
]
const secondaryMenuItem = [
  { item: 'Sign Up', href: '/signup' },
  { item: 'Register', href: '/register' },
]

export default function MobileMenu() {
  const [state, setState] = React.useState({
    menu: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      className=" item-center h-full"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{ height: '100%' }}
        className="flex flex-col items-center justify-evenly"
      >
        {primaryMenuItem.map((items, index) => (
          <Link
            key={index}
            href={items.href}
            className="text-lg font-semibold text-[#1D2B4F]"
            underline="none"
          >
            <ListItem>{items.item}</ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List
        sx={{ height: '100%' }}
        className="flex flex-col items-center justify-evenly"
      >
        {secondaryMenuItem.map((items, index) => (
          <Link
            key={index}
            href={items.href}
            className="text-lg font-semibold text-[#1D2B4F]"
            underline="none"
          >
            <ListItem>{items.item}</ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      {(['menu'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className="text-3xl text-[#1D2B4F]" />
          </Button>
          <Drawer
            anchor={'top'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
