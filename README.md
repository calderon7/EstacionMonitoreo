# Sistema de Monitoreo de Temperatura en Bogotá 🌡️

Este proyecto implementa un sistema de monitoreo de temperatura con estaciones distribuidas en Bogotá. Incluye un sitio web que permite gestionar y visualizar en tiempo real los datos reportados por las estaciones.

---

## Características principales

- **CRUD de Puntos de Monitoreo**: Crear, Leer, Actualizar y Eliminar puntos de monitoreo.
- **Visualización Gráfica**: 
  - Tabla interactiva para listar los puntos de monitoreo.
  - Mapa interactivo para mostrar ubicaciones y valores de temperatura.
- **Interfaz de Usuario Intuitiva**: Diseño moderno y responsivo.

---

## Tecnologías Utilizadas

### **Frontend**
- **React + Vite**: Desarrollo rápido y dinámico.
- **Formik + Yup**: Manejo y validación de formularios.
- **Leaflet + React-Leaflet**: Mapas interactivos.
- **PrimeReact**: Componentes de interfaz de usuario.
- **Zustand**: Gestión eficiente del estado.
- **Axios**: Conexión con el backend.

### **Backend**
- **Express.js**: Framework modular para manejar rutas y APIs.
- **MySQL + TypeORM**: Persistencia de datos robusta y escalable.
- **dotenv, cors, morgan**: Configuración y manejo de solicitudes.
- **TypeScript**: Código tipado para mayor mantenibilidad.

---

## Estructura de Rutas (Backend)

- `GET /points` - Obtiene todos los puntos de monitoreo.
- `POST /points` - Crea un nuevo punto con coordenadas y valor inicial.
- `PUT /points/:id` - Actualiza un punto existente.
- `DELETE /points/:id` - Elimina un punto de monitoreo.

---

## Base de Datos (MySQL)

**Modelo de tabla:**

| Campo        | Tipo           | Descripción                      |
|--------------|----------------|----------------------------------|
| id           | int            | Identificador único             |
| name         | text           | Nombre del punto de monitoreo   |
| latitude     | text           | Coordenada de latitud           |
| longitude    | text           | Coordenada de longitud          |
| temperature  | decimal(10,0)  | Temperatura registrada          |
| date_register| date           | Fecha de creación               |
| date_updated | datetime       | Última fecha de actualización   |
| status       | int            | Estado del punto                |

---

## Configuración del Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=5003
DB_TYPE=mysql
DB_HOST=localhost
DB_USERNAME=root
DB_DATABASE=test
DB_PASSWORD=
DB_SYNCHRONIZE=false
DB_ENTITIES_ROUTE=
CHARACTERS=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
EMAIL_SERVICE_URL=http://localhost:5002/api/v1/email
URL_PORTAL_WEB=http://localhost:5174
NODE_DEV_URL=/^http:\/\/localhost:\d+$/
```

---

## Ejecución del Proyecto

Clona el repositorio:

```env
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

Instala las dependencias:

```env
npm install
```

Configura la base de dato:
- Importa la estructura de la tabla desde el archivo SQL proporcionado.
```env
CREATE TABLE `punto_monitoreo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `ubication` text NOT NULL,
  `length` text NOT NULL,
  `latitude` text NOT NULL,
  `temperature` decimal(10,0) NOT NULL,
  `date_register` date DEFAULT curdate(),
  `date_updated` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```
- Actualiza las variables en .env.

Inicia el servidor backend:

```env
cd server
npm run dev
```

Inicia el cliente frontend:

```env
cd client
npm run dev
```
