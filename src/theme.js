import { createTheme } from "@material-ui/core/styles"
import { grey, yellow } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: grey[600],
        },
        warning: {
            main: yellow[700],            
        }
    }
})