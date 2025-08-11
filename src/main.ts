/**
 * Archivo: main.ts
 * Descripción: Punto de entrada principal de la aplicación Angular
 * Propósito: Inicializa y arranca la aplicación usando bootstrapApplication para componentes standalone
 */

// Importa la función para arrancar aplicaciones Angular con componentes standalone
import { bootstrapApplication } from '@angular/platform-browser';

// Importa la configuración de la aplicación (providers, rutas, etc.)
import { appConfig } from './app/app.config';

// Importa el componente raíz principal de la aplicación
import { App } from './app/app';

// Arranca la aplicación Angular pasando el componente raíz y su configuración
bootstrapApplication(App, appConfig)
  // Captura y muestra cualquier error que ocurra durante el arranque de la aplicación
  .catch((err) => console.error(err));
