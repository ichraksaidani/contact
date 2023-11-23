import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
  modifierContactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.modifierContactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+?[0-9]{10,14}$/),
        ],
      ],
    });
  }
  ngOnInit(): void {
    this.initializePhoneInput();
  }

  initializePhoneInput(): void {
    const inputElement = document.getElementById('phone');

    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: 'auto',
        separateDialCode: true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js'
      });
    }
  }
  

  onSubmit() {
    if (this.modifierContactForm.valid) {
      console.log(this.modifierContactForm.value);
    } else {
      alert('Veuillez corriger les erreurs du formulaire.');
    }
  }
}