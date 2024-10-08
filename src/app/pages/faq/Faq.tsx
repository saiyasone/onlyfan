import he from "he";
import * as MUI from "./styles/Faq.style";

// material ui icons and component
import { useTheme } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import useFetchFaq from "hooks/faq/useFetchFaq";
import _ from "lodash";
import { decodeHtmlEntities } from "utils/string.util";

function Faq() {
  const theme: any = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const fetchFaq: any = useFetchFaq();

  return (
    <MUI.ContainerFAQ maxWidth={isMobile ? "xl" : undefined}>
      <Typography variant="h3">Frequently asked question / FAQ</Typography>
      <MUI.PaperGlobal>
        <Typography variant="h1">FAQ's</Typography>
        <Typography variant="h4">
          Let us help ansewer the most common questions.
        </Typography>
        <MUI.BoxShowAccordian>
          {fetchFaq.data &&
            fetchFaq.data.map((data, index) => {
              return (
                <Accordion key={index} defaultExpanded={index === 0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="faq-content"
                    id="faq-header"
                  >
                    <Typography variant="h6">
                      {he.decode(_.capitalize(data.question))}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 400,
                        textAlign: "justify",
                        textJustify: "distribute",
                        hyphens: "auto",
                        textAlignLast: "left",
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "0.8rem",
                          fontWeight: 400,
                          textAlign: "justify",
                          textJustify: "distribute",
                          hyphens: "auto",
                          textAlignLast: "left",
                        },
                      }}
                    >
                      <Typography>
                        {he.decode(
                          _.capitalize(
                            decodeHtmlEntities(data.answer) || undefined,
                          ),
                        )}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </MUI.BoxShowAccordian>
      </MUI.PaperGlobal>
    </MUI.ContainerFAQ>
  );
}

export default Faq;
