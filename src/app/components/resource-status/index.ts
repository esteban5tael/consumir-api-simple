/**
 * Archivo: index.ts (resource-status components)
 * Descripción: Archivo barril que centraliza exportaciones de componentes de estado
 * Propósito: Facilitar importaciones múltiples de componentes de estado desde un punto único
 */

// Re-exporta el componente de estado vacío para cuando no hay datos
export * from './is-empty.component';

// Re-exporta el componente de estado de error para manejo de fallos
export * from './is-error.component';

// Re-exporta el componente de estado de carga para operaciones asíncronas
export * from './is-loading.component';
