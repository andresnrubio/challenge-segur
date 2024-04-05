# Gestor de Usuarios - Aplicación Web

## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/andresnrubio/challenge-segur.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd challenge-segur
    ```

3. Instala las dependencias utilizando npm:

    ```bash
    npm install
    ```

## Ejecución

Una vez instaladas las dependencias, puedes ejecutar el proyecto utilizando el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en tu navegador predeterminado.

# Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con React y construida con Vite. Utiliza la biblioteca Zustand para la gestión del estado, React Hook Form para el manejo de formularios y Tailwind CSS para los estilos y diseño.

Además, está configurado con Prettier y ESLint para mantener una estructura y estilo de código constante y uniforme.

La aplicación es un sitio que requiere que los usuarios se registren para iniciar sesión. El usuario por defecto solo tendrá la posibilidad de consultar la información de los usuarios, pero no podrá modificarla. Sin embargo, al iniciar sesión con perfiles que tengan diferentes roles, se cambiarán las opciones de modificación y visualización disponibles en el sitio.

## Dependencias Principales

- React
- Vite
- Zustand
- React Hook Form
- Tailwind CSS
