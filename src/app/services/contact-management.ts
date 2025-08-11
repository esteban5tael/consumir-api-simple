/**
 * Archivo: contact-management.ts
 * Descripción: Servicio Angular para gestionar operaciones relacionadas con contactos
 * Propósito: Centralizar la lógica de negocio y comunicación con APIs de contactos
 */

// Importa HttpClient para realizar peticiones HTTP a APIs REST
import { HttpClient } from '@angular/common/http';

// Importa funciones de Angular core para inyección de dependencias y estado reactivo
import { inject, Injectable, resource, signal } from '@angular/core';

/* Separador visual para organización del código */

// Importa tipos TypeScript para tipado fuerte (type-only import para optimización)
import type { Contact, Product, User } from "./../interfaces/"

// Importa configuración de entorno para URLs de API
import { environment } from '@env/environment';

// Importa operadores RxJS para manejo de streams asincrónicos
import { delay, lastValueFrom, Observable } from 'rxjs';

/* Separador visual para organización del código */

// Decorador que marca esta clase como un servicio inyectable
@Injectable({
  // 'root' significa que Angular creará una instancia singleton a nivel de aplicación
  providedIn: 'root'
})
export class ContactManagementService {

  // Inyecta HttpClient usando la función inject() moderna (Angular 14+)
  // private: solo accesible dentro de esta clase
  private _http: HttpClient = inject(HttpClient);

  // Signal que contiene la URL base para la API de contactos
  // private: encapsula la URL para evitar modificaciones externas
  private _contactsApiUrl = signal<string>(`${environment.apiUrl}/contacts`);

  // Método público que retorna un Observable con array de contactos
  public getContacts(): Observable<Contact[]> {
    // Realiza petición GET HTTP con tipado fuerte Contact[]
    return this._http.get<Contact[]>(this._contactsApiUrl()).pipe(
      // Agrega delay artificial de 2 segundos para simular latencia de red
      delay(200)
    );
  }

  public createNewContact(contact: Contact): Observable<Contact> {
    // Realiza petición POST HTTP con tipado fuerte Contact
    return this._http.post<Contact>(this._contactsApiUrl(), contact)
  }

  public getContactById(contactId: string): Observable<Contact> {
    // Realiza petición GET HTTP con tipado fuerte Contact
    return this._http.get<Contact>(`${this._contactsApiUrl()}/${contactId}`);
  }

  public updateContactById(contactId: string, contact: Contact): Observable<Contact> {
    // Realiza petición PUT HTTP con tipado fuerte Contact
    return this._http.patch<Contact>(`${this._contactsApiUrl()}/${contactId}`, contact);
  }

  public deleteContactById(contactId: string): Observable<void> {
    // Realiza petición DELETE HTTP sin cuerpo, solo retorna void
    return this._http.delete<void>(`${this._contactsApiUrl()}/${contactId}`);
  }

  public contactsResource = resource({
    // Función loader que define cómo cargar los datos de forma asíncrona
    loader: async () => await lastValueFrom(this.getContacts()),

    // Valor por defecto mientras se cargan los datos (array vacío)
    defaultValue: [],
  })

}
