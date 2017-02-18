import React from 'react'
import { Link } from 'react-router'
import { theme } from '../theme_config'
import AppBar from 'material-ui/AppBar'
// dropdown menu
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/svg-icons/navigation/menu'
// icons for menu links
import Home from 'material-ui/svg-icons/action/home'
import Add from 'material-ui/svg-icons/content/add'
import Storage from 'material-ui/svg-icons/device/storage'
import Settings from 'material-ui/svg-icons/action/settings'
import Clear from 'material-ui/svg-icons/content/clear'

const renderLinks = () => {
  const linkColor = theme.palette.textColor

  const links = [
    {
      path: '/',
      display: 'Home',
      icon: <Home color={ linkColor } />
    },
    {
      path: '/add-log',
      display: 'Add Log',
      icon: <Add color={ linkColor } />
    },
    {
      path: '/logs',
      display: 'Logs',
      icon: <Storage color={ linkColor } />
    },
    {
      path: '/settings',
      display: 'Settings',
      icon: <Settings color={ linkColor } />
    },
    {
      isDivider: true
    },
    {
      path: '/log-out',
      display: 'Log Out',
      icon: <Clear color={ linkColor } />
    }
  ]

  return links.map((link, i) => {
    if (link.isDivider) {
      return <Divider key={`divider${i}`} />
    } else {
      return (
        <Link key={ link.path } to={ link.path }>
          <MenuItem primaryText={ link.display } rightIcon={ link.icon} />
        </Link>
      )
    }
  })
}

const DropdownMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><Menu color={ theme.palette.canvasColor } /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    { renderLinks() }
  </IconMenu>
)

export default () => {
  return (
    <AppBar
      title='MileageTracker'
      iconStyleLeft={{display: 'none'}}
      iconElementRight={ <DropdownMenu />}
      />
  )
}
