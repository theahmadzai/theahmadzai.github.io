/** @jsx jsx */
import { jsx, useThemeUI, Flex, IconButton } from 'theme-ui'

const ThemeChanger = () => {
  const { theme, setColorMode } = useThemeUI()

  return (
    <Flex>
      {Object.entries(theme.rawColors?.modes).map(([mode, values]) => (
        <IconButton key={mode} onClick={() => setColorMode(mode)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentcolor"
            cursor="pointer"
          >
            <circle
              r={11}
              cx={12}
              cy={12}
              fill={values.primary}
              stroke="currentcolor"
              strokeWidth={2}
            />
          </svg>
        </IconButton>
      ))}
    </Flex>
  )
}

export default ThemeChanger
