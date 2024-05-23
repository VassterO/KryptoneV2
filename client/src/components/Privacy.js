import React from 'react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <div className="p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl w-10/12 md:w-8/12 lg:w-6/12">
                <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
                <p className="text-xl mb-4">Última actualización: 22 de mayo de 2024</p>

                <h2 className="text-2xl font-bold mb-2">1. Información que Recopilamos</h2>
                <p className="text-lg mb-4">
                    Recopilamos varios tipos de información para proporcionar y mejorar nuestro servicio para ti:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li><strong>Información Personal:</strong> Nombre de usuario, dirección de correo electrónico y cualquier otra información que nos proporciones voluntariamente.</li>
                    <li><strong>Datos de Uso:</strong> Información sobre cómo accedes y utilizas el servidor, incluyendo tu dirección IP, tipo de navegador, páginas visitadas y otros datos de diagnóstico.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-2">2. Uso de la Información</h2>
                <p className="text-lg mb-4">
                    Utilizamos la información recopilada para diversos fines:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Proporcionar y mantener nuestro servidor.</li>
                    <li>Notificarte sobre cambios en nuestro servidor.</li>
                    <li>Permitir tu participación en funciones interactivas de nuestro servidor cuando decidas hacerlo.</li>
                    <li>Proporcionar atención al cliente y soporte.</li>
                    <li>Monitorear el uso del servidor.</li>
                    <li>Detectar, prevenir y abordar problemas técnicos.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-2">3. Retención de Datos</h2>
                <p className="text-lg mb-4">
                    Conservaremos tu información personal solo durante el tiempo que sea necesario para los fines establecidos en esta Política de Privacidad. Retendremos y utilizaremos tu información en la medida necesaria para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestras políticas.
                </p>

                <h2 className="text-2xl font-bold mb-2">4. Transferencia de Datos</h2>
                <p className="text-lg mb-4">
                    Tu información, incluidos los datos personales, puede transferirse a — y mantenerse en — computadoras ubicadas fuera de tu estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de tu jurisdicción.
                </p>

                <h2 className="text-2xl font-bold mb-2">5. Divulgación de Datos</h2>
                <p className="text-lg mb-4">
                    Podemos divulgar tu información personal de buena fe cuando creamos que dicha acción es necesaria para:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Cumplir con una obligación legal.</li>
                    <li>Proteger y defender los derechos o la propiedad de Kryptone Facilities.</li>
                    <li>Prevenir o investigar posibles infracciones en relación con el servidor.</li>
                    <li>Proteger la seguridad personal de los usuarios del servidor o del público.</li>
                    <li>Protegerse contra la responsabilidad legal.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-2">6. Seguridad de los Datos</h2>
                <p className="text-lg mb-4">
                    La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger tu información personal, no podemos garantizar su seguridad absoluta.
                </p>

                <h2 className="text-2xl font-bold mb-2">7. Tus Derechos de Protección de Datos</h2>
                <p className="text-lg mb-4">
                    Dependiendo de tu ubicación, puedes tener ciertos derechos de protección de datos en virtud de la ley aplicable. Estos pueden incluir el derecho a acceder, actualizar o eliminar tu información personal. Para ejercer estos derechos, por favor contáctanos.
                </p>

                <h2 className="text-2xl font-bold mb-2">8. Cambios a esta Política de Privacidad</h2>
                <p className="text-lg mb-4">
                    Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página. Se recomienda revisar esta Política de Privacidad periódicamente para cualquier cambio.
                </p>

                <h2 className="text-2xl font-bold mb-2">9. Contacto</h2>
                <p className="text-lg mb-4">
                    Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos:
                </p>
                <p className="text-lg">
                    <strong>Email:</strong> tu-email@kryptonefacilities.com
                </p>
            </div>
        </div>
    );
};

export default Privacy;
