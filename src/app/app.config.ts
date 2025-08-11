/**
 * Archivo: app.config.ts
 * Descripción: Configuración principal de la aplicación Angular
 * Propósito: Define todos los providers y servicios globales que la aplicación necesita
 */

// Importa tipos y funciones para configurar la aplicación Angular
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';

// Importa el proveedor de routing para manejar navegación entre páginas
import { provideRouter } from '@angular/router';

// Importa las rutas definidas para la aplicación
import { routes } from './app.routes';

// Importa el proveedor de HTTP client para realizar peticiones a APIs
import { provideHttpClient } from '@angular/common/http';

// Exporta la configuración de la aplicación que será usada en main.ts
export const appConfig: ApplicationConfig = {
  // Array de providers que Angular inyectará globalmente en la aplicación
  providers: [
    // Configura listeners globales para manejar errores en el navegador
    provideBrowserGlobalErrorListeners(),

    // Habilita el modo sin Zone.js para mejor rendimiento (experimental en Angular 18+)
    provideZonelessChangeDetection(),

    // Configura el router con las rutas definidas para navegación SPA
    provideRouter(routes),

    // Proporciona HttpClient para realizar peticiones HTTP a APIs REST
    provideHttpClient(),
  ]
};
