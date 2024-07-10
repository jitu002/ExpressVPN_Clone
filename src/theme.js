// theme.js

// 1. import `extendTheme` function
import { extendTheme, transition } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  transitionDuration:"200ms"
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme