/**
 * Archivo: app.ts
 * Descripción: Componente raíz principal de la aplicación Angular
 * Propósito: Actúa como contenedor principal donde se renderizan todas las rutas y páginas
 */

// Importa el decorador Component para crear componentes y signal para estado reactivo
import { Component, signal } from '@angular/core';

// Importa RouterOutlet para renderizar componentes según la ruta activa
import { RouterOutlet } from '@angular/router';
import {  NgxSonnerToaster } from 'ngx-sonner';

  

// Decorador que define este como un componente Angular standalone
@Component({
  // Selector CSS que identifica este componente en el HTML (usado en index.html)
  selector: 'app-root',

  // Array de imports para componentes standalone (reemplaza NgModules)
  imports: [RouterOutlet,NgxSonnerToaster],

  // Ruta al archivo de template HTML que define la estructura visual
  templateUrl: './app.html',

  // Ruta al archivo CSS que contiene los estilos específicos del componente
  styleUrl: './app.css'
})
export class App {
  // Signal que mantiene el título de la aplicación de forma reactiva
  // protected: accesible en el template pero no desde fuera del componente
  // readonly: no se puede reasignar la referencia del signal
  protected readonly title = signal('consumir-api-simple');
}
