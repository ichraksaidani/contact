import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {
  contactId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.contactId = +idParam;
    } else {
      // Gérer l'absence de contactId
    }
  }

  deleteContact() {
    if (this.contactId !== null) {
      this.contactService.deleteContact(this.contactId).subscribe(
        () => {
          console.log('Contact deleted successfully.');
          this.router.navigate(['/list']);  // Redirection vers la liste après la suppression réussie
        },
        (error) => {
          console.error('Error deleting contact:', error);
        }
      );
    } else {
      console.error('Missing contact ID. Please check the route parameter.');
    }
  }

  goBack() {
    this.router.navigate(['/list']);
  }
}