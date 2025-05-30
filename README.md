# SIAMHPS (SISTEMA DE INVENTARIOS MÉDICOS DEL HOSPITAL PEDIÁTRICO DE SINALOA)

Este proyecto es un sistema de inventario diseñado para gestionar activos, usuarios y configuraciones de manera eficiente. A continuación, se describen las funcionalidades principales y el propósito de cada archivo en la estructura del proyecto.

---

## Funcionalidades Principales

1. **Inicio de Sesión y Registro**: Permite a los usuarios iniciar sesión o registrarse en el sistema.
2. **Gestión de Inventario**: Visualización, filtrado y gestión de activos en el inventario.
3. **Configuración del Sistema**: Personalización de roles, alertas, unidades de medida, categorías, estados, idioma, respaldos y más.
4. **Registros de Actividad**: Visualización de logs de movimientos y cambios en el sistema, con exportación e impresión.
5. **Selección de Usuario**: Interfaz para elegir el usuario que usará el sistema, mostrando si es administrador.
6. **Modal de Entrada de Activos**: Formulario modal para añadir nuevos activos al inventario desde la página principal.
7. **Navegación Dinámica**: Barra lateral de navegación cargada dinámicamente y resaltado de la página activa.

---

## Cambios Recientes

- Se mejoró la validación de formularios en el registro y login, mostrando animaciones y mensajes de error.
- Se implementó la carga dinámica de la barra de navegación en todas las páginas principales.
- Se agregó la funcionalidad de guardar temporalmente los datos del formulario de nuevo activo usando `sessionStorage`.
- Se añadió la opción de alternar la disposición de las tablas de logs entre vertical y horizontal.
- Se mejoró la visualización de usuarios en la selección, mostrando el rol de administrador con un icono.
- Se agregaron nuevas secciones de configuración: alertas automáticas, umbrales, respaldos, idioma, formato de fecha y registro de cambios.
- Se optimizó la carga de datos de usuario y activos desde archivos JSON.
- Se mejoró el diseño responsivo y la experiencia de usuario en formularios y tablas.

---

## Descripción de Archivos

### **HTML**
- **`index.html`**: Página principal para el inicio de sesión.
- **`register.html`**: Página de registro de nuevos usuarios, con validación de campos y correo.
- **`main_Inventory.html`**: Página principal del inventario, con tabla de activos y filtrado.
- **`config_Inventory.html`**: Página de configuración avanzada del sistema (usuarios, roles, unidades, categorías, alertas, respaldos, etc.).
- **`logs_Inventory.html`**: Página de registros, muestra historial de movimientos, detalles y permite exportar o imprimir.
- **`profile_Inventory.html`**: Página del perfil del usuario activo.
- **`user_Selection.html`**: Página para seleccionar el usuario activo, mostrando si es administrador.
- **`new_Input_Modal.html`**: Modal para añadir nuevos activos al inventario.

### **CSS**
- **`css/styleMainInventoryLight.css`**: Estilo específico para las páginas relacionadas con el inventario en tema claro, incluyendo estilos para formularios, tablas, navbar, modales y selección de usuario.

### **JavaScript**
- **`js/login.js`**: Valida el formulario de inicio de sesión y redirige a la selección de usuario.
- **`js/register.js`**: Valida los campos del formulario de registro, incluyendo correo electrónico y animaciones de error.
- **`js/navbar.js`**: Carga dinámicamente la barra de navegación desde [`navbar.html`](sistemaInventarioHPS/navbar.html) y resalta la página activa.
- **`js/tables.js`**: Añade funcionalidades a las tablas: resaltado de celdas vacías, animación de texto desbordado y filtrado de datos.
- **`js/new_Input_Modal.js`**: Controla la apertura, cierre y funcionalidad del modal para añadir nuevos activos, guardando datos temporalmente en `sessionStorage`.
- **`js/users.js`**: Genera dinámicamente la lista de usuarios en la selección de usuario, mostrando si son administradores con un icono.
- **`js/config.js`**: Controla la navegación entre secciones de la página de configuración.
- **`js/measure_Units.js`**: Carga las unidades de medida disponibles en la sección de configuración.
- **`js/logs.js`**: Permite alternar la disposición de las tablas de logs entre vertical y horizontal.

### **Otros**
- **`navbar.html`**: Contiene la estructura de la barra de navegación utilizada en todas las páginas.
- **`.hintrc`**: Archivo de configuración para herramientas de desarrollo.

---

## Cómo Usar

1. **Inicio de Sesión**: Accede a `index.html` para iniciar sesión. Si no tienes una cuenta, regístrate en `register.html`.
2. **Selección de Usuario**: Tras iniciar sesión, elige el usuario activo en `user_Selection.html`.
3. **Gestión de Inventario**: Navega a `main_Inventory.html` para gestionar los activos.
4. **Configuración**: Personaliza el sistema desde `config_Inventory.html`.
5. **Registros**: Consulta los movimientos y cambios en `logs_Inventory.html`, con opción de exportar o imprimir.
6. **Añadir Activos**: Usa el botón en `main_Inventory.html` para abrir el modal y añadir nuevos activos.

---

Este sistema está diseñado para ser intuitivo y fácil de usar, permitiendo una gestión eficiente de inventarios y usuarios.