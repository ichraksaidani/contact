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
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    UpdateContactComponent,
    DeleteContactComponent,
    ListContactComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    FormsModule,
    FeatherModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
