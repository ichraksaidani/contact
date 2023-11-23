import { NgModule } from '@angular/core';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { UpdateContactComponent } from './contact/update-contact/update-contact.component';
import { DeleteContactComponent } from './contact/delete-contact/delete-contact.component';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:'', component: AddContactComponent },
  { path:'update/:id', component: UpdateContactComponent },
  { path:'delete/:id', component: DeleteContactComponent },
  { path:'list', component: ListContactComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIntlTelInputModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
