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
        main: "#7776BC"
      }
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          position: "relative",
          "& $notchedOutline": {
            borderColor: "#FFFFFF"
          },
          "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: "#FFFFFF",
            "@media (hover: none)": {
              borderColor: "#FFFFFF"
            }
          },
          "&$focused $notchedOutline": {
            borderColor: "#FFFFFF",
            borderWidth: 1
          }
        }
       }
      }
  });

export { Theme }