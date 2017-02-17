import React from 'react'
import AppBar from 'material-ui/AppBar'
import { theme } from '../theme_config'
// dropdown menu
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Menu from 'material-ui/svg-icons/navigation/menu'

const DropdownMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><Menu color={ theme.palette.canvasColor } /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
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
