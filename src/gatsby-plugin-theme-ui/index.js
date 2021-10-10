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
        fontFamily: 'monospace',
      },
      a: {
        color: 'text',
        '&.active': { color: 'primary' },
      },
    },
  },
})

export default theme
