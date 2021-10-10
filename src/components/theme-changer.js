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
            background: values.background,
            border: `1px solid ${theme.colors.text}`,
            borderRadius: '100%',
            width: '2rem',
            height: '2rem',
            marginLeft: '0.4rem',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  )
}

export default ThemeChanger
