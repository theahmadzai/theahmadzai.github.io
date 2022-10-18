const { merge } = require('theme-ui')
const {
  base,
  system,
  funk,
  tosh,
  bulma,
  bootstrap,
  tailwind,
  roboto,
  polaris,
  sketchy,
  future,
  swiss,
  deep,
  dark,
} = require('@theme-ui/presets')

module.exports = merge(base, {
  config: {
    initialColorModeName: 'light',
  },
  colors: {
    modes: {
      tosh: tosh.colors,
      bootstrap: bootstrap.colors,
      bulma: bulma.colors,
      funk: funk.colors,
      tailwind: tailwind.colors,
      roboto: roboto.colors,
      polaris: polaris.colors,
      sketchy: sketchy.colors,
      future: future.colors,
      swiss: swiss.colors,
      deep: deep.colors,
      dark: dark.colors,
      ...system.colors.modes,
    },
  },
  fonts: {
    body: `'Open Sans'`,
    heading: `'Open Sans'`,
  },
  styles: {
    root: {
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
      },
      a: {
        color: 'text',
        '&.active': { color: 'primary' },
      },
    },
  },
})
