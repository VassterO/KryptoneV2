import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Modal, Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarBackground from './StarBackground';
import Footer from './Footer';
import useScreenAdapter from '../utils/ScreenAdapter';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import '../styles/ItemsWiki.css';

// Create Emotion cache with nonce for security
const nonce = document.querySelector('meta[name="csp-nonce"]').getAttribute('content');
const cache = createCache({ key: 'css', nonce, prepend: true });

// List of items to display in the wiki
const items = [
    {
        name: 'Pistola Tranquilizadora',
        description: 'Pistola de 2 balas que spawnea en la mesa de la antigua sala del SCP-939.',
        effect: 'Al disparar a un humano que no es de tu mismo equipo lo dejarás dormido por 6 segundos.',
        model: 'COM-15',
        obtain: 'Se obtiene en la mesa de la antigua sala del SCP-939',
    },
    {
        name: 'Explosivo C4 (Exclusivo CustomRole)',
        description: 'Es una granada que al tirarla, se pegará a la superficie que la hayas tirado.',
        effect: 'Si un enemigo pasa por encima o hablas por la radio con ella en la mano, explotará.',
        model: 'Granada Explosiva | Modelo al tirar: Custom',
        obtain: 'Modelo Principal: Granada Explosiva | Modelo al tirar: Custom',
    },
    {
        name: 'Granada EMP (Exclusivo CustomRole)',
        description: 'Es una granada normal pero en vez de flashear, tendrá efectos propios:',
        effect: 'Al explotar, dejará la sala a oscuras, si explota en la sala de tesla, el tesla dejará de funcionar por 15 segundos, si explota en una sala usada por la cámara, esta perderá la señal.',
        model: 'Granada Flash',
        obtain: '',
    },
    {
        name: 'Granada de Humo (Exclusivo CustomRole)',
        description: 'Al explotar, en vez de hacer daño, creará el humo congelador del SCP-244, sin hacer daño al jugador mientras está dentro de él.',
        model: 'Granada Explosiva',
        obtain: '',
    },
    {
        name: 'SCP-427',
        description: 'Mientras el jugador tenga la moneda en la mano, tendrá vida que se autoregenera hasta su máximo, una alta exposición a él (50 segundos) transformará al jugador en SCP-427-1 (Zombie con 800 HP).',
        model: 'Moneda',
        obtain: 'Spawnea en la sala del 049 | Se puede obtener en 914',
    },
    {
        name: 'SCP-714',
        description: 'Mientras el jugador tenga la moneda en la mano, le protegerá de un hit del 049, cancelando el arresto cardiaco y el daño, una vez hecho el hit, la moneda se destruirá.',
        model: 'Moneda',
        obtain: 'Spawnea en la sala del 106 | Se puede obtener en 914',
    },
    {
        name: 'Caja de los deseos',
        description: 'Permite pedir ciertos deseos al jugador que la tiene usando .deseo en la Ñ (~).',
        effect: 'A veces los deseos pueden no cumplirse y matar o dar lo invertido del deseo al jugador.',
        model: 'Gramofono',
        obtain: 'Se puede obtener en 914',
    },
    {
        name: 'Flamingo Tape Player',
        description: 'Permite reemplazar a los espectadores con flamencos',
        effect: 'Reemplaza a los espectadores con flamencos.',
        model: 'Gramofono',
        obtain: 'Se puede obtener en 914 y spawnea',
    },
];

const ItemsWiki = () => {
    const [selectedItem, setSelectedItem] = useState(null); // State to manage selected item
    const [isClosing, setIsClosing] = useState(false); // State to manage modal closing animation

    useScreenAdapter(); // Custom hook for screen adaptation

    // Add and remove a class to hide the scrollbar when this component is mounted and unmounted
    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => document.body.classList.remove('hide-scrollbar');
    }, []);

    // Handle closing of the modal with animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedItem(null);
            setIsClosing(false);
        }, 300);
    };

    // Handle clicking on the backdrop to close the modal
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) handleClose();
    };

    return (
        <CacheProvider value={cache}>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
                <Helmet>
                    <title>Wiki | Kryptone Facilities</title>
                    <meta name="description" content="Explora nuestra wiki completa para aprender sobre los diversos objetos disponibles en el juego." />
                    <meta name="keywords" content="Kryptone Facilities, SCP, objetos, wiki, SCP Secret Laboratory" />
                </Helmet>
                <StarBackground />
                <motion.div
                    className="relative z-10 text-center mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                >
                    <h1 className="text-4xl font-bold mb-2">Wiki de Objetos</h1>
                    <p className="text-xl mb-2">
                        Explora nuestra wiki completa para aprender sobre los diversos objetos disponibles en el juego.
                    </p>
                </motion.div>
                <motion.div
                    className="relative z-10 w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow-lg overflow-x-auto"
                    initial="hidden"
                    animate="visible"
                >
                    <div className="centered-table">
                        <table className="min-w-full table-auto border-collapse border border-gray-700">
                            <thead>
                            <tr className="bg-gray-700">
                                <th className="px-4 py-2 border border-gray-600">Item</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-600 transition duration-200 cursor-pointer" onClick={() => setSelectedItem(item)}>
                                    <td className="border px-4 py-2">{item.name}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {selectedItem && (
                        <Modal
                            open={!!selectedItem}
                            onClose={handleClose}
                            className="modal-overlay"
                        >
                            <Box className={`modal-content ${isClosing ? 'modal-fade-out' : 'modal-fade-in'}`} onClick={handleBackdropClick}>
                                <div className="modal-header">
                                    <Typography variant="h6" component="h2">{selectedItem.name}</Typography>
                                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" className="close-btn">
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                                <div className="modal-body">
                                    <Typography component="p" className="no-border"><strong className="text-red-500">Descripción:</strong> {selectedItem.description}</Typography>
                                    <Typography component="p" className="no-border"><strong className="text-blue-500">Modelo:</strong> {selectedItem.model}</Typography>
                                    {selectedItem.effect && (
                                        <Typography component="p" className="no-border"><strong className="text-yellow-500">Efecto:</strong> {selectedItem.effect}</Typography>
                                    )}
                                    {selectedItem.obtain && (
                                        <Typography component="p" className="no-border"><strong className="text-green-500">Obtención:</strong> {selectedItem.obtain}</Typography>
                                    )}
                                </div>
                                <div className="modal-footer no-border">
                                    <button className="action-btn" onClick={handleClose}>
                                        Cerrar
                                    </button>
                                </div>
                            </Box>
                        </Modal>
                    )}
                </AnimatePresence>
                <Footer />
            </div>
        </CacheProvider>
    );
};

export default ItemsWiki;
