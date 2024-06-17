import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SecureRedirect = ({ url, children }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRedirect = () => {
        window.location.href = url;
    };

    return (
        <>
            <Button onClick={handleOpen}>
                {children}
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 24 }}>
                    <Typography variant="h6" component="h2">
                        Redireccionamiento
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Estas a punto de salir de este sitio, desea continuar?
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleRedirect}>
                            Si
                        </Button>
                        <Button sx={{ ml: 1 }} variant="outlined" onClick={handleClose}>
                            No
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SecureRedirect;
