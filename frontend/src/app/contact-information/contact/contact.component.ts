import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';
import { ContactService } from '../services/contact.service';
import 'intl-tel-input/build/css/intlTelInput.css'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  addContactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService,private el: ElementRef) {
    this.addContactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.initializePhoneInput();
  }
  
  initializePhoneInput(): void {
    const inputElement = this.el.nativeElement.querySelector('#phone');

    if (inputElement) {
      const iti = intlTelInput(inputElement, {
        initialCountry: 'auto',
        separateDialCode: true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js'
      });
      inputElement.addEventListener('countrychange', () => {
        console.log('Selected country: ', iti.getSelectedCountryData());
      });
    }
  }
  

  onSubmit() {
    if (this.addContactForm.valid) {
      const newContact = this.addContactForm.value;
      this.contactService.addContact(newContact).subscribe(
        (response: any) => {
          console.log('Contact added successfully:', response);
          // You can navigate to the contact list or perform other actions here
        },
        (error: any) => {
          console.error('Error adding contact:', error);
        }
      );
    } else {
      alert('Please correct the form errors.');
    }
  }
}