/**
 * Archivo: user.interface.ts
 * Descripción: Interface TypeScript que define la estructura compleja de un usuario
 * Propósito: Proporcionar tipado fuerte para objetos User con información detallada
 */

// Exporta la interface para uso en servicios y componentes relacionados con usuarios
export interface User {
    // Identificador único del usuario - número para IDs incrementales
    id: number;

    // Nombre completo del usuario - string para información personal
    name: string;

    // Nombre de usuario único para login - string para autenticación
    username: string;

    // Dirección de correo electrónico - string para comunicación
    email: string;

    // Objeto anidado que contiene información completa de dirección
    address: {
        // Nombre de la calle y número - string para dirección física
        street: string;

        // Apartamento, suite o unidad - string para especificación adicional
        suite: string;

        // Ciudad de residencia - string para ubicación geográfica
        city: string;

        // Código postal - string para permitir formatos internacionales
        zipcode: string;

        // Objeto anidado con coordenadas geográficas
        geo: {
            // Latitud geográfica - string para coordenadas GPS precisas
            lat: string;

            // Longitud geográfica - string para coordenadas GPS precisas
            lng: string;
        };
    };

    // Número de teléfono - string para formatos internacionales
    phone: string;

    // Sitio web personal - string para URL completa
    website: string;

    // Objeto anidado que contiene información de la empresa del usuario
    company: {
        // Nombre de la empresa - string para información corporativa
        name: string;

        // Eslogan o frase característica - string para marketing
        catchPhrase: string;

        // Descripción del negocio - string para actividad comercial
        bs: string;
    };
}