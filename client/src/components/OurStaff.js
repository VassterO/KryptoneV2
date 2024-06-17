import React from 'react';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import '../styles/OurStaff.css';
import questionIcon from '../assets/question.webp';

const teamMembers = [
    {
        name: 'xNexusACS',
        role: 'Fundador',
        description: 'Fundador de Kryptone Facilities, se encarga de desarrollar el servidor de SCP.',
        imageUrl: 'https://cdn.discordapp.com/avatars/723291064248827996/8f22094095a6bf1924ee7ae292e18f06.webp?size=4096',
    },
    {
        name: 'Veins',
        role: 'Administrador',
        description: 'Desarrollador de la página. Encargado del staff de SCP.',
        imageUrl: 'https://cdn.discordapp.com/avatars/954011960784080908/a_d2d0d68143d6dbc0182c2ea4f5306825.gif?size=4096',
    },
    {
        name: 'Vacante Libre',
        role: 'Manager',
        description: 'Encargado del Staff de SCP y parcialmente del Discord, toma la palabra decisiva.',
        imageUrl: questionIcon,
    },
];

const OurStaff = () => {
    return (
        <div className="ourstaff-container relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            <StarBackground />
            <Helmet>
                <title>Kryptone Facilities</title>
            </Helmet>
            <div className="ourstaff-content relative z-10 p-8 text-center flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Equipo Directivo</h1>
                <p className="text-xl mb-4">Conoce al equipo directivo de Kryptone Faciltiies.</p>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member flex flex-col items-center mb-8">
                            <img src={member.imageUrl} alt={member.name} className="member-image" />
                            <h2 className="text-2xl font-bold">{member.name}</h2>
                            <h3 className="text-xl">{member.role}</h3>
                            <p className="text-lg">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurStaff;
