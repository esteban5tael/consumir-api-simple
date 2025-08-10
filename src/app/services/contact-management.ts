import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

/*  */

import type { Contact, Product, User } from "./../interfaces/"
import { environment } from '@env/environment';
import { delay, Observable } from 'rxjs';

/*  */
@Injectable({
  providedIn: 'root'
})
export class ContactManagementService {

  private _http: HttpClient = inject(HttpClient);

  private _contactsApiUrl = signal<string>(`${environment.apiUrl}/contacts`);

  public getContacts(): Observable<Contact[]> {
    return this._http.get<Contact[]>(this._contactsApiUrl()).pipe(
      delay(2000)
    );
  }

}
