import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddressComponent } from './address/address.component';
import { OfficeAddrComponent } from './office-addr/office-addr.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddressComponent,
    OfficeAddrComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
