import React from 'react';

const TOS = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <div className="p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl w-10/12 md:w-8/12 lg:w-6/12">
                <h1 className="text-4xl font-bold mb-4">Términos de Servicio</h1>
                <p className="text-xl mb-4">Última actualización: 22 de mayo de 2024</p>

                <h2 className="text-2xl font-bold mb-2">1. Aceptación de los Términos</h2>
                <p className="text-lg mb-4">
                    Al acceder y utilizar el servidor de Kryptone Facilities, aceptas cumplir y estar sujeto a los siguientes Términos de Servicio. Si no estás de acuerdo con estos términos, no debes utilizar nuestro servidor.
                </p>

                <h2 className="text-2xl font-bold mb-2">2. Uso del Servicio</h2>
                <p className="text-lg mb-4">
                    El uso de nuestro servidor está destinado únicamente para entretenimiento personal y no comercial. Está prohibido:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Utilizar trampas, hacks, exploits o cualquier software de terceros que interfiera con el juego.</li>
                    <li>Participar en comportamientos abusivos, acosadores, amenazantes o cualquier forma de discriminación.</li>
                    <li>Distribuir contenido ilegal, inapropiado o que infrinja los derechos de terceros.</li>
                    <li>Intentar obtener acceso no autorizado a nuestra infraestructura o a las cuentas de otros usuarios.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-2">3. Registro y Seguridad de la Cuenta</h2>
                <p className="text-lg mb-4">
                    Para utilizar ciertas funciones del servidor, es posible que debas registrarte y crear una cuenta. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de todas las actividades que ocurran bajo tu cuenta. Debes notificar de inmediato a los administradores sobre cualquier uso no autorizado de tu cuenta.
                </p>

                <h2 className="text-2xl font-bold mb-2">4. Contenido Generado por el Usuario</h2>
                <p className="text-lg mb-4">
                    Puedes subir, publicar o de otro modo poner a disposición ciertos contenidos en el servidor. Eres responsable de ese contenido y garantizas que tienes los derechos necesarios para subirlo y compartirlo. No podemos y no seremos responsables por el contenido generado por los usuarios.
                </p>

                <h2 className="text-2xl font-bold mb-2">5. Terminación</h2>
                <p className="text-lg mb-4">
                    Nos reservamos el derecho de suspender o terminar tu acceso al servidor en cualquier momento, con o sin previo aviso, si violas estos Términos de Servicio o por cualquier otra razón.
                </p>

                <h2 className="text-2xl font-bold mb-2">6. Cambios a los Términos</h2>
                <p className="text-lg mb-4">
                    Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Te notificaremos sobre cualquier cambio significativo mediante un aviso en el servidor o por otros medios apropiados. Es tu responsabilidad revisar estos términos periódicamente.
                </p>

                <h2 className="text-2xl font-bold mb-2">7. Limitación de Responsabilidad</h2>
                <p className="text-lg mb-4">
                    En la máxima medida permitida por la ley aplicable, Kryptone Facilities no será responsable por ningún daño indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida de beneficios o ingresos, incurridos directa o indirectamente, o cualquier pérdida de datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de tu acceso o uso del servidor.
                </p>

                <h2 className="text-2xl font-bold mb-2">8. Ley Aplicable</h2>
                <p className="text-lg mb-4">
                    Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes del país en el que operamos, sin tener en cuenta sus principios de conflicto de leyes.
                </p>
            </div>
        </div>
    );
};

export default TOS;
