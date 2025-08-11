/**
 * Archivo: create-page.ts
 * Descripción: Componente de página para crear nuevos contactos
 * Propósito: Proporcionar interfaz de usuario para formulario de creación de contactos
 */

// Importa estrategia de detección de cambios y decorador Component
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { ContactManagementService } from '@app/services';
import { Contact } from '@app/interfaces'
import { toast } from 'ngx-sonner';
// Decorador que define este como un componente Angular standalone
@Component({
  // Selector CSS para usar este componente en el router
  selector: 'app-create-page',

  // Array vacío - no importa otros componentes por ahora
  imports: [RouterLink, ReactiveFormsModule],

  // Ruta al archivo de template HTML
  templateUrl: './create-page.html',

  // Estilos inline vacíos - se pueden usar estilos CSS personalizados aquí
  styles: ``,

  // Optimización: solo ejecuta detección de cambios cuando las props cambian
  changeDetection: ChangeDetectionStrategy.OnPush
})
// Clase del componente vacía - lógica de creación se implementará aquí
export class CreatePage {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _contactService = inject(ContactManagementService);
  private _router = inject(Router);

  public newContactForm: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100)]],
  });



  onSubmit(): void {
    if (this.newContactForm.invalid) {
      this.newContactForm.markAllAsTouched();
      this.newContactForm.markAllAsDirty();
      return;
    }

    const newContact: Contact = this.newContactForm.value

    this._contactService.createNewContact(newContact).subscribe({
      next: (res: Contact) => {
        if (res) {
          toast.success('Contacto creado exitosamente');
          this.newContactForm.reset()
          this._router.navigate(['/']);
        }
      },
      error: (err: any) => {
        toast.error('Error al crear el contacto');
        console.error(err);
      },

    });
  }



}




export default CreatePage;