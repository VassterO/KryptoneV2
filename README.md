## Contenido

- Instalación
- Uso
- Características
- Licencia
- Atribución

## License

This project is licensed under the GNU General Public License v3.0 (GPLv3) - see the [LICENSE](LICENSE) file for details.

**Note:** While this project is open source, using it in a commercial product or service, particularly for similar server purposes, is strongly discouraged unless heavily modified. 

## Attribution

If you use or modify this project, please provide appropriate credit, including a link to the original repository.

# Ultima Version: Kryptone Stable 2.0.0

# Kryptone Facilities

Kryptone Facilities es un proyecto desarrollado con React y Node.js para gestionar y mostrar información sobre un servidor de SCP: Secret Laboratory. Aunque el proyecto ya no está activo, el código se ha hecho público para que cualquiera pueda verlo y utilizarlo.


## Instalación

Clona el repositorio e instala las dependencias:

```shell
git clone https://github.com/tuusuario/kryptone-facilities.git
cd kryptone-facilities
npm install
```

Uso
Para ver las opciones disponibles, utiliza:

```shell
npm run
```

Comandos Recomendados

Para iniciar el servidor:
```shell
node server.js
```

o

```shell
npm run server
```

Para desplegar en GitHub Pages:
```shell
npm run deploy
```

Asegúrate de tener GitHub Pages configurado.

# Características
- Página de inicio con fondo animado y efectos de estrellas.
- Redirecciones seguras con una ventana modal de confirmación.
- Limitación de tasa y protección contra clickjacking en el backend.
- Diseño adaptable a cualquier tamaño de pantalla.
- Seguridad

> Esta versión pública incluye algunas medidas de seguridad básicas como CSP y protección contra clickjacking. Sin embargo, se recomienda revisarlas antes de usar en producción.
> Esta versión puede tener vulnerabilidades de bajo a medio riesgo (según pruebas realizadas con Burp Suite Professional). Se recomienda arreglarlas antes de usar en producción para su proyecto.

Licencia
Este proyecto está bajo la Licencia Pública General de GNU v3.0 (GPLv3). Consulta el archivo LICENSE para más detalles.

Nota: No se recomienda usar este código en un producto o servicio comercial sin modificaciones significativas.

Atribución
Si utilizas o modificas este proyecto, proporciona el crédito adecuado y enlaza al repositorio original.
