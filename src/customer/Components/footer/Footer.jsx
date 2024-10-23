import React from 'react';
import { Grid } from '@mui/material'; // Ensure you import Grid correctly
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'; // Correct import for MUI Link

const footerLinks = [
    { title: 'Company', links: ['About', 'Blog', 'Press', 'Jobs', 'Partners'] },
    { title: 'Services', links: ['Consulting', 'Support', 'Training', 'Sales', 'Marketing'] },
    { title: 'Resources', links: ['Documentation', 'API Reference', 'Community', 'Tutorials', 'FAQs'] },
    { title: 'Contact', links: ['Email', 'Phone', 'Social Media', 'Locations'] },
];

const Footer = () => {
    return (
        <div className="bg-black text-white mt-10">
            <Grid
                container
                spacing={2} // Adjust this spacing to control the space between items
                justifyContent="center" // Center items horizontally
                sx={{ py: 3 }} // Padding on Y-axis
            >
                {footerLinks.map((section, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Typography className='pb-2' variant='h6'>{section.title}</Typography>
                        {section.links.map((link, linkIndex) => (
                            <div key={linkIndex}>
                                <Button className='pb-1' variant='text'>{link}</Button>
                            </div>
                        ))}
                    </Grid>
                ))}

                {/* Centered Grid Item */}
                <Grid item xs={12} sx={{ textAlign: 'center', pt: 5 }}>
                    <Typography variant="body2" component="p" className='pb-1'>
                        &copy; 2024 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" className='pb-1'>
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>{' '}
                        from{' '}
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
