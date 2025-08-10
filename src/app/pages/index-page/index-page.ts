import { Component, inject, resource } from '@angular/core';
import { ContactManagementService } from '@app/services';
import { lastValueFrom } from 'rxjs';
import { IsEmptyComponent, IsErrorComponent, IsLoadingComponent } from "./../../components/resource-status"
import { ContactCard } from './components/contact-card/contact-card';
@Component({
  selector: 'app-index-page',
  imports: [IsEmptyComponent, IsErrorComponent, IsLoadingComponent, ContactCard],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css'
})
export class IndexPage {
  private _contactsManagementService: ContactManagementService = inject(ContactManagementService);

  public contactsResource = resource({
    loader: async () => await lastValueFrom(this._contactsManagementService.getContacts()),
    defaultValue: [],
  })
}
