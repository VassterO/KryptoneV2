import React from 'react';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import '../styles/OurStaff.css';
import questionIcon from '../assets/question.webp';

// Array of team members with their details
const teamMembers = [
    {
        name: '',
        role: 'Fundador',
        description: 'Fundador de Kryptone Facilities, se encarga de desarrollar el servidor de SCP.',
        imageUrl: questionIcon, // Placeholder image
    },
    {
        name: '_veins',
        role: 'Administrador',
        description: 'Desarrollador de la página.',
        imageUrl: questionIcon, // Placeholder image
    },
    {
        name: '',
        role: 'Manager',
        description: 'Encargado del Staff de SCP y parcialmente del Discord, toma la palabra decisiva.',
        imageUrl: questionIcon, // Placeholder image
    },
];

const OurStaff = () => {
    return (
        <div className="ourstaff-container relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen">
            {/* Adding star background animation */}
            <StarBackground />
            <Helmet>
                <title>Equipo Directivo | Kryptone Facilities</title>
                <meta name="description" content="Conoce al equipo directivo de Kryptone Facilities." />
                <meta name="keywords" content="Kryptone Facilities, equipo directivo, SCP Secret Laboratory" />
            </Helmet>
            <div className="ourstaff-content relative z-10 p-8 text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Equipo Directivo</h1>
                <p className="text-xl mb-4">Conoce al equipo directivo de Kryptone Facilities.</p>
                <div className="team-members flex flex-wrap justify-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member flex flex-col items-center m-4">
                            <img src={member.imageUrl} alt={member.name} className="member-image w-32 h-32 object-cover rounded-full mb-4" />
                            <h2 className="text-2xl font-bold">{member.name}</h2>
                            <h3 className="text-xl">{member.role}</h3>
                            <p className="text-lg text-center">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurStaff;
