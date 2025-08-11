/**
 * Archivo: index-page.ts
 * Descripción: Componente de la página principal que muestra la lista de contactos
 * Propósito: Gestionar el estado de carga y visualización de contactos usando Angular Resources
 */

// Importa decorador Component, función inject para DI y resource para manejo de estado asíncrono
import { Component, inject, resource } from '@angular/core';

// Importa el servicio de gestión de contactos desde el barrel export
import { ContactManagementService } from '@app/services';

// Importa función RxJS para convertir Observable a Promise
import { lastValueFrom } from 'rxjs';

// Importa componentes de estado de recursos (loading, empty, error) desde barrel export
import { IsEmptyComponent, IsErrorComponent, IsLoadingComponent } from "@app/components/resource-status"

// Importa el componente de tarjeta de contacto para mostrar cada contacto individualmente
import { ContactCard } from './components/contact-card/contact-card';
import { RouterLink } from '@angular/router';

// Decorador que define este como un componente Angular standalone
@Component({
  // Selector CSS para usar este componente en templates
  selector: 'app-index-page',

  // Array de componentes importados para uso en el template
  imports: [IsEmptyComponent, IsErrorComponent, IsLoadingComponent, ContactCard, RouterLink],

  // Ruta al archivo de template HTML
  templateUrl: './index-page.html',

  // Ruta al archivo de estilos CSS específicos del componente
  styleUrl: './index-page.css'
})
export class IndexPage {
  // Inyecta el servicio de gestión de contactos usando la función inject moderna
  // private: encapsula el servicio para uso interno del componente
  private _contactsManagementService: ContactManagementService = inject(ContactManagementService);

  public contactsResource = this._contactsManagementService.contactsResource;
  // Resource API de Angular para manejo declarativo de estado asíncrono
  // public: accesible desde el template para binding de datos

}
