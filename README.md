# SIAMHPS

Este proyecto es un sistema de inventario diseñado para gestionar activos, usuarios y configuraciones de manera eficiente. A continuación, se describen las funcionalidades principales y el propósito de cada archivo en la estructura del proyecto.

---

## Funcionalidades Principales

1. **Inicio de Sesión y Registro**: Permite a los usuarios iniciar sesión o registrarse en el sistema.
2. **Gestión de Inventario**: Visualización, filtrado y gestión de activos en el inventario.
3. **Configuración del Sistema**: Personalización de roles, alertas, unidades de medida, y más.
4. **Registros de Actividad**: Visualización de logs de movimientos y cambios en el sistema.
5. **Selección de Usuario**: Interfaz para elegir el usuario que usará el sistema.
6. **Modal de Entrada de Activos**: Formulario para añadir nuevos activos al inventario desde la página principal de inventario.

---

## Descripción de Archivos

### **HTML**
- **`index.html`**: Página principal para el inicio de sesión. Contiene un formulario para ingresar usuario y contraseña.  
- **`register.html`**: Página de registro de nuevos usuarios. Incluye validación de campos y un enlace para volver al inicio de sesión.  
- **`main_Inventory.html`**: Página principal del inventario. Muestra una tabla con los activos y permite filtrarlos por diferentes criterios.  
- **`config_Inventory.html`**: Página de configuración del sistema. Permite gestionar usuarios, roles, alertas, unidades de medida, y más.  
- **`logs_Inventory.html`**: Página de registros. Muestra un historial de movimientos y cambios realizados en el sistema.  
- **`profile_Inventory.html`**: Página del perfil del usuario. Muestra información del usuario activo.  
- **`user_Selection.html`**: Página para seleccionar el usuario activo.  
- **`new_Input_Modal.html`**: Modal para añadir nuevos activos al inventario desde la página principal de inventario.  

### **CSS**
- **`styleMainInventoryLight.css`**: Estilo específico para las páginas relacionadas con el inventario en tema claro.  

### **JavaScript**
- **`login.js`**: Maneja la validación del formulario de inicio de sesión y redirige al usuario a la página de selección de usuario.  
- **`register.js`**: Valida los campos del formulario de registro, incluyendo la validación del correo electrónico.  
- **`navbar.js`**: Carga dinámicamente la barra de navegación desde un archivo externo y resalta la página activa.  
- **`tables.js`**: Añade funcionalidades a las tablas, como resaltado de celdas vacías, animación de texto desbordado y filtrado de datos.  
- **`new_Input_Modal.js`**: Controla la apertura, cierre y funcionalidad del modal para añadir nuevos activos desde la página principal de inventario.  

### **Otros**
- **`navbar.html`**: Contiene la estructura de la barra de navegación utilizada en todas las páginas.  
- **`.hintrc`**: Archivo de configuración para herramientas de desarrollo.  

---

## Cómo Usar

1. **Inicio de Sesión**: Accede a `index.html` para iniciar sesión. Si no tienes una cuenta, regístrate en `register.html`.  
2. **Gestión de Inventario**: Una vez dentro, navega a `main_Inventory.html` para gestionar los activos.  
3. **Configuración**: Personaliza el sistema desde `config_Inventory.html`.  
4. **Registros**: Consulta los movimientos y cambios en `logs_Inventory.html`.  
5. **Añadir Activos**: Usa el botón en `main_Inventory.html` para abrir el modal y añadir nuevos activos desde la página principal de inventario.  

---

Este sistema está diseñado para ser intuitivo y fácil de usar, permitiendo una gestión eficiente de inventarios y usuarios.