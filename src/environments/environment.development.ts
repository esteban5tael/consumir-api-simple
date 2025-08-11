/**
 * Archivo: environment.development.ts
 * Descripción: Configuración específica para entorno de desarrollo
 * Propósito: Define variables de configuración que se usan durante ng serve y desarrollo local
 */

// Exporta objeto con configuración específica de desarrollo
export const environment = {
    // Flag que indica si la aplicación está en modo producción (siempre false en development)
    production: false,

    // URL base de la API para desarrollo local
    // Configurada para trabajar con json-server o backend de desarrollo en puerto 3000
    apiUrl: 'http://localhost:3000'

};
