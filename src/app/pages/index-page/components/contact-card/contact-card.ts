/**
 * Archivo: contact-card.ts
 * Descripción: Componente de tarjeta que muestra información individual de un contacto
 * Propósito: Renderizar de forma elegante los datos de un contacto con diseño responsive
 */

// Importa estrategia de detección de cambios y decorador Component, función input para props
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

// Importa la interface Contact para tipado fuerte del input
import { Contact } from '@app/interfaces';
import { ContactManagementService } from '@app/services';
import { toast } from 'ngx-sonner';

// Decorador que define este como un componente Angular standalone
@Component({
  // Selector CSS para usar este componente en templates padre
  selector: 'app-contact-card',


  imports: [RouterLink],

  // Ruta al archivo de template HTML que define la estructura visual
  templateUrl: './contact-card.html',

  // Ruta al archivo CSS con estilos específicos del componente
  styleUrl: './contact-card.css',

  // Optimización: solo ejecuta detección de cambios cuando las props cambian
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCard {
  // Input signal requerido que recibe un objeto Contact del componente padre
  // input.required: hace obligatorio pasar este valor desde el componente padre
  // <Contact>: tipado fuerte que garantiza la estructura correcta de datos
  contact = input.required<Contact>();

  private _contactsManagementService: ContactManagementService = inject(ContactManagementService);
  private _router: Router = inject(Router);
  private _contactsResource = this._contactsManagementService.contactsResource;

  public deleteContact(contactId: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto? Esta acción no se puede deshacer.')) {
      this._contactsManagementService.deleteContactById(contactId).subscribe({
        next: () => {
          toast.warning('Contacto eliminado exitosamente');
          // Redirige al usuario a la página de inicio después de eliminar el contacto
          // this._router.navigate(['/']);
          this._contactsResource.reload(); // Invalida el recurso para recargar los contactos
        },
        error: (err) => {
          toast.error('Error al eliminar el contacto: ' + err.message);
        }
      });
    }
  }
}
