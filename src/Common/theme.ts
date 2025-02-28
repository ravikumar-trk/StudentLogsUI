import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        subtitle1 : { //defaultTypography
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "system-ui",
        },
        subtitle2 : { //columnTitle
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            fontFamily: "system-ui !important",
        },
        body1 : { //columnValue
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "system-ui !important",
            marginTop: "8px",
        },
        body2 : { //SegmentTitle
            fontSize: "18px",
            fontWeight: 600,
            marginBottom: "12px",
        },
    }
});

export default theme;
