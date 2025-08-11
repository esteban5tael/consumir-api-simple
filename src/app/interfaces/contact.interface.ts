/**
 * Archivo: contact.interface.ts
 * Descripción: Interface TypeScript que define la estructura de un contacto
 * Propósito: Proporcionar tipado fuerte para objetos Contact en toda la aplicación
 */

// Exporta la interface para que pueda ser importada en otros archivos
export interface Contact {
    // Identificador único del contacto - tipo número para IDs incrementales
    id?: string;

    // Nombre completo del contacto - tipo string para texto
    name: string;

    // Dirección de correo electrónico - tipo string para validación
    email: string;

    // Número de teléfono - tipo string para permitir formatos internacionales
    phone: string;
}
