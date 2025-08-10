import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Contact } from '@app/interfaces';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCard {
  contact = input.required<Contact>();
}
