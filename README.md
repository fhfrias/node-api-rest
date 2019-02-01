# API-REST Node.js, MongoDB, Express, Mogoose y JWT

## Descripción 

Pequeño servidor realizado con node, sobre una base de datos mongodb implementando autentificación JWT (simple).

PARA ARRANCAR EL SERVICIO, HAY QUE EJECUTAR **npm start** EN EL DIRECTORIO RAÍZ

## Arquitectura

| **TIPO** | **RUTA** | **DESCRIPCIÓN** |
| ----- | -----| ------ |
| GET | '/olivares' | Obtiene todos los olivares |
| GET | '/olivares/idOlivares' | Obtiene el olivar a partir de un id (idOlivares) |
| POST | '/olivares' | Añade un olivar |
| PUT | '/olivares/idOlivares' | Actualiza un olivar a partir de un id (idOlivares) |
| DELETE | '/olivares/idOlivares' | Elimina el olivar a partir de un id (idOlivares) |
| POST | 'users/register' | Registra a un usuario con los parámetros (name, email, password) |
| POST | 'users/authenticate' | Autenticar y obtener el token para realizar peticiones. |

## Modelo
#Usuario
Tres campos : name, email y password (tipo String)

#Olivares
Tres campos :
- name (String, requerido)
- variedad (Enum String, requerido)
. num_olivas (Number, requerido, min=1 max=999999)

##GitHub

https://github.com/fhfrias/node-api-rest.git


