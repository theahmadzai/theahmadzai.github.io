import { merge } from 'theme-ui'
import { system } from '@theme-ui/presets'

const theme = merge(system, {
  config: {
    initialColorModeName: 'light',
  },
  styles: {
    root: {
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
      },
    },
  },
})

export default theme
