/**
 * Archivo: edit-page.ts
 * Descripción: Componente de página para editar contactos existentes
 * Propósito: Proporcionar interfaz de usuario para formulario de edición de contactos
 */

// Importa estrategia de detección de cambios y decorador Component
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, resource } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactManagementService } from '@app/services';
import { lastValueFrom } from 'rxjs';
import { IsEmptyComponent, IsErrorComponent, IsLoadingComponent } from "@app/components/resource-status"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '@app/interfaces';
import { toast } from 'ngx-sonner';
// Decorador que define este como un componente Angular standalone
@Component({
  // Selector CSS para usar este componente en el router
  selector: 'app-edit-page',

  // Array vacío - no importa otros componentes por ahora
  imports: [IsEmptyComponent, IsErrorComponent, IsLoadingComponent, ReactiveFormsModule, RouterLink],

  // Ruta al archivo de template HTML
  templateUrl: './edit-page.html',

  // Estilos inline vacíos - se pueden usar estilos CSS personalizados aquí
  styles: ``,

  // Optimización: solo ejecuta detección de cambios cuando las props cambian
  changeDetection: ChangeDetectionStrategy.OnPush
})
// Clase del componente vacía - lógica de edición se implementará aquí
export class EditPage {
  constructor() {
    effect(() => {
      if (this.contactResource.hasValue()) {
        // this.editContactForm.patchValue(this.contactResource.value);
        this.editContactForm.setValue({
          name: this.contactResource.value().name,
          email: this.contactResource.value().email,
          phone: this.contactResource.value().phone
        });
      }
    })
  }
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  contactId = this._activatedRoute.snapshot.params['contactId'];
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _contactService = inject(ContactManagementService);
  private _router = inject(Router);

  public editContactForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
  });


  public contactResource = resource({
    // Función loader que define cómo cargar los datos de forma asíncrona
    loader: async () => await lastValueFrom(this._contactService.getContactById(this.contactId)),

    // Valor por defecto mientras se cargan los datos (objeto vacío o undefined)
    defaultValue: undefined,
  })


  onSubmit(): void {
    if (this.editContactForm.invalid) {
      this.editContactForm.markAllAsTouched();
      this.editContactForm.markAllAsDirty();
      return;
    }

    const newContact: Contact = this.editContactForm.value

    this._contactService.updateContactById(this.contactId, newContact).subscribe({
      next: (res: Contact) => {
        if (res) {
          toast.success('Contacto editado exitosamente');
          this.editContactForm.reset()
          this._router.navigate(['/']);
        }
      },
      error: (err: any) => {
        toast.error('Error al editar el contacto');
        console.error(err);
      },

    });
  }
}

export default EditPage;