import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { UpdateContactComponent } from './contact/update-contact/update-contact.component';
import { DeleteContactComponent } from './contact/delete-contact/delete-contact.component';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    UpdateContactComponent,
    DeleteContactComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
