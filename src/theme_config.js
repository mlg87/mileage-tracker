import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { lightBlue500, lightBlue800, orange300, orange500, orange800 } from 'material-ui/styles/colors'

// override the primary colors on the base theme obj
darkBaseTheme.palette.primary1Color = lightBlue500
darkBaseTheme.palette.primary2Color = lightBlue800
darkBaseTheme.palette.accent1Color = orange500
darkBaseTheme.palette.accent2Color = orange800
darkBaseTheme.palette.accent3Color = orange300

const theme = getMuiTheme(darkBaseTheme)

export {
  theme
}
