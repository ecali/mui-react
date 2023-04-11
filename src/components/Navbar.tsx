import {AppBar, CssBaseline, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {DrawerComponent} from "./DrawerComponent";


const useStyles = makeStyles(() => ({
    navlinks: {
        marginLeft: useTheme().spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: useTheme().spacing(10),
        "&:hover": {
            color: "burlywood",
            borderBottom: "1px solid white",
        },
    },
}));
export const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
                <AppBar position={'static'}>
                    <CssBaseline />
                    <Toolbar>
                        <Typography variant={'h4'} className={classes.logo}>
                            MUI - React
                        </Typography>
                        {isMobile ? (
                            <DrawerComponent />
                            ) : (
                            <div className={classes.navlinks}>
                                <Link to={'/'} className={classes.link}>
                                    Home
                                </Link>
                                <Link to={'/about'} className={classes.link}>
                                    About
                                </Link>
                                <Link to={'/'} className={classes.link}>
                                    Contact
                                </Link>
                                <Link to={'/'} className={classes.link}>
                                    FAQ
                                </Link>
                            </div>
                        ) }

                    </Toolbar>
                </AppBar>
    );
}