import { createTheme } from '@material-ui/core/styles'

const Theme = createTheme({
    palette: {
      primary: {
        main: '#3185FC',
      },
      secondary: {
        main: '#7776BC',
      },
      background: {
        main: "#313638"
      },
      white: {
        main: "#E8E9EB",
      },
      error: {
        main: "#D05353"
      }
    },
  });

export { Theme }