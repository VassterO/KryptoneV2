import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SecureRedirect = ({ url, children }) => {
    const [open, setOpen] = useState(false); // State to manage modal open/close

    const handleOpen = () => setOpen(true); // Function to open modal
    const handleClose = () => setOpen(false); // Function to close modal

    const handleRedirect = () => {
        window.location.href = url; // Redirect to the specified URL
    };

    // Retrieve nonce from the meta tag for CSP compliance
    const nonce = document.querySelector('meta[name="csp-nonce"]').getAttribute('content');

    return (
        <>
            <Button onClick={handleOpen} sx={{ nonce }}>
                {children}
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 24, nonce }}>
                    <Typography variant="h6" component="h2">
                        Redireccionamiento
                    </Typography>
                    <Typography sx={{ mt: 2, nonce }}>
                        Estás a punto de salir de este sitio, ¿desea continuar?
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', nonce }}>
                        <Button variant="contained" color="primary" onClick={handleRedirect} sx={{ nonce }}>
                            Sí
                        </Button>
                        <Button sx={{ ml: 1, nonce }} variant="outlined" onClick={handleClose}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SecureRedirect;
