import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.interface';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit{
  contacts: Contact[] = [];
  searchTerm: string = '';

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe(
      (data: Contact[]) => {
        this.contacts = data;
      },
      (error: any) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
  get filteredContacts() {
    return this.contacts.filter((contact) =>
      Object.values(contact).some((value) =>
        value !== null &&
        value !== undefined &&
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
}