import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact-information/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ContactListComponent } from './contact-information/contact-list/contact-list.component';
import { UpdateListComponent } from './contact-information/update-list/update-list.component';
import { DeleteContactComponent } from './contact-information/delete-contact/delete-contact.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'update/:id', component: UpdateListComponent },
  { path:'list', component: ContactListComponent },
  { path:'delete', component: DeleteContactComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    UpdateListComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxIntlTelInputModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
