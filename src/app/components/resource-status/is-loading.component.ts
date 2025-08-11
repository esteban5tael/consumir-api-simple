/**
 * Archivo: is-loading.component.ts
 * Descripción: Componente que muestra indicador de carga con spinner animado
 * Propósito: Proporcionar feedback visual durante operaciones asíncronas
 */

// Importa estrategia de detección de cambios y decorador Component
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Decorador que define este como un componente Angular standalone
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  // Selector personalizado sin prefijo para uso genérico como <is-loading />
  selector: 'is-loading',

  // Array vacío - este componente no importa otros componentes
  imports: [],

  // Template inline que define la estructura del componente de carga
  template: `
    <!-- Contenedor principal con estilos centrados -->
    <div class="loading-container">
      <!-- Spinner CSS puro con animación de rotación -->
      <div class="spinner"></div>
      <!-- Texto informativo para el usuario -->
      <span class="loading-text">Cargando Datos ...</span>
    </div>
  `,

  // Array de estilos CSS inline para el componente
  styles: [
    `
      /* Contenedor principal que centra todo el contenido */
      .loading-container {
        display: flex; /* Activa flexbox para centrado */
        flex-direction: column; /* Apila elementos verticalmente */
        align-items: center; /* Centra horizontalmente */
        justify-content: center; /* Centra verticalmente */
        padding: 2.5rem; /* Espaciado interno de 40px */
        margin: 2.5rem; /* Margen externo de 40px */
        background-color: #e1f5fe; /* Fondo azul claro */
        border: 1px solid #4fc3f7; /* Borde azul medio */
        border-radius: 8px; /* Esquinas redondeadas */
        text-align: center; /* Centra el texto */
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          sans-serif; /* Stack de fuentes del sistema */
      }

      /* Spinner animado de carga */
      .spinner {
        width: 3rem; /* Ancho de 48px */
        height: 3rem; /* Alto de 48px */
        border: 4px solid #e3f2fd; /* Borde base azul muy claro */
        border-top: 4px solid #1976d2; /* Borde superior azul oscuro */
        border-radius: 50%; /* Forma circular perfecta */
        animation: spin 1s linear infinite; /* Animación de rotación continua */
        margin-bottom: 1rem; /* Espacio inferior de 16px */
      }

      /* Texto informativo debajo del spinner */
      .loading-text {
        color: #1565c0; /* Color azul oscuro para contraste */
        font-size: 1rem; /* Tamaño de fuente de 16px */
        font-weight: 500; /* Peso de fuente medio-bold */
      }

      /* Definición de la animación de rotación */
      @keyframes spin {
        0% {
          transform: rotate(0deg); /* Inicia sin rotación */
        }
        100% {
          transform: rotate(360deg); /* Termina con rotación completa */
        }
      }

      /* Soporte para tema oscuro automático */
      @media (prefers-color-scheme: dark) {
        .loading-container {
          background-color: #263238; /* Fondo gris oscuro */
          border-color: #546e7a; /* Borde gris medio */
        }

        .spinner {
          border-color: #37474f; /* Borde base gris oscuro */
          border-top-color: #64b5f6; /* Borde superior azul claro */
        }

        .loading-text {
          color: #90caf9; /* Texto azul claro para contraste */
        }
      }
    `,
  ],

  // Optimización: solo ejecuta detección de cambios cuando es necesario
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Clase del componente vacía - no necesita lógica adicional
export class IsLoadingComponent { }
