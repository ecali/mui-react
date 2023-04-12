import {makeStyles} from "@mui/styles";
import {Quotes} from "../components/Quotes";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    quotesContainer: {
       display: "flex",
        width: '100%',
        margin: '1rem auto'
    }
}));

export const Home = () => {
    const classes = useStyles();
    return (
        <div style={{width: '100%'}}>
            <Typography variant={'h4'}>Home component</Typography>
            <div className={classes.quotesContainer}>
                {/*<Quotes />*/}
            </div>
        </div>
    );
}