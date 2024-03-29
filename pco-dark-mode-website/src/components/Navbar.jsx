import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#1f2124" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PCO Dark Mode
                    </Typography>
                    <Button
                        color="inherit"
                        href="https://chrome.google.com/webstore/detail/pco-dark-mode/nppgjechfhmnepbjigflblopgcpecifm"
                        target="_blank"
                    >
                        Download (Chrome Web Store)
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
