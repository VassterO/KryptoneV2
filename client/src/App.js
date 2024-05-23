import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Ranks from './components/Ranks';
import TOS from './components/TOS';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
    return (
        <Router>
            <div className="bg-gray-900 min-h-screen overflow-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ranks" element={<Ranks />} />
                    <Route path="/tos" element={<TOS />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
