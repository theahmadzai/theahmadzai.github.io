/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'

const ThemeChanger = () => {
  const { theme, setColorMode } = useThemeUI()

  return (
    <div sx={{ display: 'flex' }}>
      {Object.entries(theme.rawColors?.modes).map(([mode, values]) => (
        <div
          key={mode}
          role="button"
          tabIndex={0}
          onClick={() => setColorMode(mode)}
          onKeyPress={() => setColorMode(mode)}
          sx={{
            bg: values.background,
            border: `1px solid ${values.text}`,
            width: '2rem',
            height: '2rem',
          }}
        />
      ))}
    </div>
  )
}

export default ThemeChanger
