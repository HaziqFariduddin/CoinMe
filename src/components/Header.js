import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import {useState} from "react";
import {
    AppBar,
    Paper,
    Switch,
    CssBaseline,
    Container,
    createTheme,
    createMuiTheme,
    makeStyles,
    MenuItem,
    MuiThemeProvider,
    Select,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {CryptoState} from "../CryptoContext";
import {Crypto} from "../CryptoContext";

const useStyles = makeStyles(() => ({
    title:{

        flex:1,
        color: "gold",
        fontFamily: "Montserrat",
        cursor:"pointer",
        fontSize:"2.4rem",
        fontWeight:"bold"
    }
}))


const Header = () => {

    const classes =useStyles();

    const history = useHistory();

    const {currency, SetCurrency} =CryptoState();

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [darkMode, setDarkMode] = useState(true);

    const darktheme = createMuiTheme({
            palette: {
                primary: {
                    main: darkMode ? "#303134" : '#f5f7fa',
                },
                type: darkMode ? 'dark' : 'light',
            },
        });

    return (
        <ThemeProvider theme={darktheme}>
            <CssBaseline />
            <AppBar color={"primary"} position={"static"}>
                <Container>
                    <Toolbar>

                        { /* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
                        <Typography onClick={() =>history.push("/")} className={classes.title} variant={'h6'}>
                            CoinME
                        </Typography>
                        <Select variant="outlined" style={{
                            width: 100,
                            height: 40,
                            marginRight:15,
                        }}
                                value={currency} onChange={(e) => SetCurrency(e.target.value)}
                        >

                            <MenuItem  value={"USD"}>USD</MenuItem>
                            <MenuItem  value={"MYR"}>MYR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>


    )
}
export default Header;