/**
 * Archivo: index.ts (components de index-page)
 * Descripción: Archivo barril para exportaciones de componentes de la página index
 * Propósito: Centralizar exportaciones de componentes hijos de IndexPage para imports limpios
 */

// Re-exporta el componente ContactCard para facilitar importaciones
// Permite importar desde './components' en lugar de './components/contact-card/contact-card'
export * from './contact-card/contact-card';
