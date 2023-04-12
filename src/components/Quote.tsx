import {QuotesModel} from "../models/Quotes.model";
import {Paper, Typography} from "@mui/material";

export const Quote = (props: {quote : QuotesModel}) => {
    return (
        <Paper elevation={16} style={{padding: 'auto 0.5rem', backgroundColor: 'black', color: 'white', width: '100%'}} >
            <div style={{margin: "1rem 0.5rem"}}>
                <Typography variant="h4" gutterBottom >{props.quote.text}</Typography>
                <Typography variant="subtitle1" gutterBottom sx={{display: 'flex', justifyContent: 'flex-end'}} >
                    - {props.quote.author ? props.quote.author : 'unknown'}
                </Typography>
            </div>
        </Paper>
    );
}