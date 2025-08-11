/**
 * Archivo: app.routes.ts
 * Descripción: Configuración de rutas para el router de Angular
 * Propósito: Define las rutas de navegación y sus componentes asociados
 */

// Importa el tipo Routes para definir la configuración de rutas de Angular Router
import { Routes } from '@angular/router';

// Importa el componente de la página principal que muestra la lista de contactos
import { IndexPage } from './pages/index-page/index-page';

// Exporta el array de rutas que Angular Router usará para la navegación
export const routes: Routes = [
    {
        // Título que aparece en la pestaña del navegador cuando se visita esta ruta
        title: "Contactos",

        // Ruta vacía ('') significa que es la ruta por defecto/inicio de la aplicación
        path: '',

        // Componente que se renderiza cuando el usuario navega a esta ruta
        component: IndexPage
    },
    {
        title: "Crear Contacto",
        path: 'create',
        loadComponent: () => import("@app/pages/create-page/create-page")

    },


    {
        title: "Editar Contacto",
        path: 'edit/:contactId',
        loadComponent: () => import("@app/pages/edit-page/edit-page"),
    },




    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
