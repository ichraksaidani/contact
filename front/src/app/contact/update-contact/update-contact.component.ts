import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  contactForm: FormGroup = this.formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [null, Validators.required],
  });
  contactId: number | null = null; 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.contactId = +idParam;
      this.contactService.getContactById(this.contactId).subscribe(
        (contact) => {
          this.contactForm.patchValue({
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone,
          });
        },
        (error) => {
          console.error('Error fetching contact:', error);
        }
      );
      
    }
  }
  
  onSubmit() {
    if (this.contactForm.valid && this.contactId !== null) {
      const updatedContact = this.contactForm.value;
      this.contactService.updateContact(this.contactId, updatedContact).subscribe(
        (response) => {
          console.log('Contact updated successfully:', response);
          this.router.navigate(['/list']); 
        },
        (error) => {
          console.error('Error updating contact:', error);
        }
      );
    } else {
      console.error('Invalid form submission or missing contact ID. Please check the form.');
    }
  }
  
  
}