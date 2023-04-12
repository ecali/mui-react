import {Drawer, IconButton, List, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import {makeStyles} from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    white:{
        color: "white"
    },
    container: {
        margin: '2rem'
    },
    item:{
        marginBottom: '1.5rem !important'
    }
}));

export const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    return (
        <>
            <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)}  >
                <div className={classes.container}>
                    <List className={classes.container}>
                        <ListItemText  onClick={() => setOpenDrawer(false)} className={classes.item}>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                        <ListItemText onClick={() => setOpenDrawer(false)} className={classes.item}>
                            <Link className={classes.link} to="/about">About</Link>
                        </ListItemText>
                        <ListItemText onClick={() => setOpenDrawer(false)} className={classes.item}>
                            <Link className={classes.link} to="/">Contact</Link>
                        </ListItemText>
                        <ListItemText onClick={() => setOpenDrawer(false)} className={classes.item}>
                            <Link className={classes.link} to="/faq">FAQ</Link>
                        </ListItemText>
                    </List>
                </div>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.white} />
            </IconButton>
        </>

    );

}