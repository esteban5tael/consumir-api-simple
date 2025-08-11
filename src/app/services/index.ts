/**
 * Archivo: index.ts (services)
 * Descripción: Archivo barril que centraliza todas las exportaciones de servicios
 * Propósito: Facilitar las importaciones de servicios desde un punto único de acceso
 */

// Re-exporta todas las exportaciones del servicio de gestión de contactos
// Permite importar ContactManagementService desde '@app/services' en lugar de ruta completa
export * from './contact-management';
