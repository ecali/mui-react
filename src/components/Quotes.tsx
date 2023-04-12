import {Quote} from "./Quote";
import {UseAxios} from "../hooks/useAxios";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {useTheme} from "@mui/material";

const useStyles = makeStyles(() => ({
    icon: {
        width: '50px !important',
        height: '50px !important',
        margin: 'auto 1rem',
        color: 'black',
        cursor: 'pointer'
    },
    greyIcon: {
        width: '50px !important',
        height: '50px !important',
        margin: 'auto 1rem',
        color: 'grey',
    }
}));
export const Quotes = () => {
    const [quoteId, setQuoteId] = useState(0);
    const classes = useStyles();
    const { response, loading, error, sendData } = UseAxios({
        method: "get",
    });

    useEffect(() => {
        sendData();
    })

    return(
        <>
            {loading && (<p>Loading...</p>)}
            {error && (<p>{error.message}</p>)}
            {
                !loading && !error && (
                    <>
                        {quoteId > 0 ? (
                            <KeyboardArrowLeftIcon className={classes.icon} onClick={() => setQuoteId(quoteId - 1)}/>
                        ): (
                            <KeyboardArrowLeftIcon className={classes.greyIcon}/>
                        )}
                        <Quote quote={response?.data[quoteId]} />
                        {quoteId !== response?.data.length - 1 ? (
                            <KeyboardArrowRightIcon className={classes.icon} onClick={() => setQuoteId(quoteId + 1)}/>
                        ): (
                            <KeyboardArrowRightIcon className={classes.greyIcon} />
                        )}
                    </>
                )
            }
        </>
    );
}