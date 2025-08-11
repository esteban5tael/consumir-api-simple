/**
 * Archivo: environment.ts
 * Descripción: Configuración de entorno para desarrollo
 * Propósito: Define variables de configuración específicas para el entorno de desarrollo
 */

// Exporta objeto con configuración de entorno de desarrollo
export const environment = {
    // Flag que indica si la aplicación está en modo producción (false para desarrollo)
    production: false,

    // URL base de la API backend para peticiones HTTP en desarrollo
    // Apunta a servidor local en puerto 3000 para testing con json-server o similar
    apiUrl: 'http://localhost:3000'

};
