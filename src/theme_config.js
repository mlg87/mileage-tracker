import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { lightBlue500, lightBlue800 } from 'material-ui/styles/colors'

// override the primary colors on the base theme obj
darkBaseTheme.palette.primary1Color = lightBlue500
darkBaseTheme.palette.primary2Color = lightBlue800

const theme = getMuiTheme(darkBaseTheme)

export {
  theme
}
