"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Blog = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
<div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How does Next.js differ from a traditional React application?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Next.js is a React framework that improves typical React apps by incorporating server-side rendering (SSR) and static site generation (SSG) out of the box. While a standard React app uses client-side rendering (CSR), which generates the complete UI in the browser, Next.js enables pages to be pre-rendered on the server, which improves performance, SEO, and load times. Furthermore, Next.js provides file-based routing, which automatically constructs routes based on the file structure, making navigation setup easier than React's custom routing with React Router. It also has support for API routes, allowing for backend functionality within the same framework. These changes make Next.js better suited to developing performant, production-ready online applications with improved SEO and scalability.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What are the advantages of using Next.js for server-side rendering?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Next.js has various advantages for server-side rendering (SSR), hence it's a popular choice for current web apps. First, SSR increases performance by sending fully rendered HTML pages directly from the server, which leads to shorter initial load times and a better user experience, particularly on slower networks or devices. It also improves SEO by allowing search engines to quickly index fully rendered content. Furthermore, Next.js simplifies SSR by offering a built-in framework with minimal configuration, allowing developers to easily handle both static and dynamic content. Next.js improves scalability and developer productivity by providing features like as automatic code splitting, optimized image processing, and built-in API routes. Overall, it provides a strong combination of performance, SEO advantages, and developer-friendly features.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What is prefetching in Next.js?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Prefetching in Next.js is a speed enhancement tool that loads resources for linked pages in the background before the user navigates to them. By default, the Next.js component enables prefetching for pages on the same site. When a user interacts with a website, Next.js gets the content of connected sites, storing the relevant data and components.

This procedure allows for practically quick browsing between sites because the next page is already loaded in the background when the user hits the link. Prefetching enhances the user experience by lowering wait times, particularly on large sites, and allowing for faster page transitions. It operates automatically during idle time, making it an effective solution to improve app responsiveness without requiring manual intervention.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    );
};

export default Blog;