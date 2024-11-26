# Sistema de Gestión de Productos - Frontend

Este proyecto consiste en el desarrollo de un **frontend en React** para un sistema de gestión de productos. El objetivo principal es crear una interfaz visualmente atractiva y funcional que permita a los usuarios navegar por un catálogo de productos, visualizar detalles de productos específicos, y explorar la información relacionada con fabricantes y componentes asociados.

## Características del Proyecto

### Páginas Principales

1. **Página Principal (Inicio)**:
   - Presentación de la empresa: historia y filosofía.
   - Menú de navegación accesible.
   - Imágenes representativas con texto alternativo y enlaces a videos de YouTube (abren en nuevas pestañas).
   - Video embebido de YouTube (iframe).
   - Información de contacto: dirección, teléfono y horario de apertura.
   - Mapa interactivo (Google Maps).
   - Pie de página con los datos de los integrantes del grupo.

2. **Página de Catálogo de Productos**:
   - Lista de productos con nombre, descripción, precio e imagen en tarjetas.
   - Posibilidad de hacer clic en un producto para ver más detalles.
   - Consumo de datos desde la API utilizando `fetch`.
   - (Opcional) Selección de productos y cálculo del precio total de los seleccionados.

3. **Página de Detalle de Producto**:
   - Detalles completos de un producto: descripción, precio y componentes asociados.
   - Listado de fabricantes y componentes con enlaces a sus respectivas páginas de detalle.

4. **Página de Fabricantes y Componentes**:
   - Listado completo de fabricantes y componentes accesible desde la página principal.


# Endpoints Disponibles
- GET /productos: Obtener todos los productos.
- GET /productos/:id: Obtener un producto específico.
- GET /productos/:id/fabricantes: Obtener fabricantes de un producto.
- GET /productos/:id/componentes: Obtener componentes de un producto.
- GET /fabricantes: Obtener todos los fabricantes.
- GET /componentes: Obtener todos los componentes.

# Configuración del Frontend
### Requisitos Previos
- Tener Node.js instalado.

### Instalación y Ejecución
1. Clonar este repositorio:
git clone https://github.com/martinbruno1975/UNATECH.git

2. Acceder al directorio del proyecto:
cd UNATECH

3. Instalar dependencias:
npm install

4. Iniciar la aplicación:
npm run dev

Esto abrirá la aplicación en http://localhost:3000

## Integrantes:
- Aymara Dileo
- Martín Bruno
- Leonel Audino
- Alan Amaya