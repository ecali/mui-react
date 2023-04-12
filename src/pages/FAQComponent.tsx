import {FAQ, FAQList} from "../utils/faq";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography, useMediaQuery, useTheme,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQComponent = () => {
    const faqList: FAQ[] = FAQList;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <div>
            {
                isMobile ? (
                    <Typography variant="h4" gutterBottom >Frequently Asked Questions</Typography>
                    ) : (
                    <Typography variant="h2" gutterBottom >Frequently Asked Questions About Something</Typography>
                )
            }
            <Typography variant="subtitle1" gutterBottom sx={{marginBottom: '2rem'}} >
                Find what you're looking for: Frequently asked questions
            </Typography>
            {
                faqList.map((faq, key) => {
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h5" gutterBottom >{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" gutterBottom >{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}