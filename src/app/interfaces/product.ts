/**
 * Archivo: product.ts
 * Descripción: Interface TypeScript que define la estructura de un producto
 * Propósito: Proporcionar tipado fuerte para objetos Product (posiblemente para futuras funcionalidades)
 */

// Exporta la interface para uso en otros componentes y servicios
export interface Product {
  // Identificador único del producto - número para IDs secuenciales
  id: number;

  // Título o nombre del producto - string para descripción textual
  title: string;

  // Precio del producto - número para cálculos matemáticos
  price: number;

  // Descripción detallada del producto - string para contenido largo
  description: string;

  // Categoría a la que pertenece el producto - string para clasificación
  category: string;

  // URL de la imagen del producto - string para enlaces web
  image: string;

  // Objeto anidado que contiene información de valoración del producto
  rating: {
    // Puntuación promedio del producto - número decimal para precisión
    rate: number;

    // Cantidad total de valoraciones - número entero para conteo
    count: number;
  };
}