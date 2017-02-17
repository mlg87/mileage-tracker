import React from 'react'
import { Link } from 'react-router'
import { theme } from '../theme_config'
import AppBar from 'material-ui/AppBar'
// dropdown menu
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Menu from 'material-ui/svg-icons/navigation/menu'

const renderLinks = () => {
  const links = [
    {
      path: '/add-log',
      display: 'Add Log'
    },
    {
      path: '/settings',
      display: 'Settings'
    },
    {
      isDivider: true
    },
    {
      path: '/log-out',
      display: 'Log Out'
    }
  ]

  return links.map((link, i) => {
    if (link.isDivider) {
      return <Divider key={`divider${i}`} />
    } else {
      return (
        <Link key={ link.path } to={ link.path }>
          <MenuItem primaryText={ link.display } />
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
