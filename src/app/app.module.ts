import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmergencyDataComponent } from './components/emergency-data/emergency-data.component';

@NgModule({
  declarations: [AppComponent, EmergencyDataComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
