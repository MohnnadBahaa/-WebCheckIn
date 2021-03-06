import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerTicketsComponent } from './passenger-tickets/passenger-tickets.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
import {GetTicketDetealiesService} from '../app/get-ticket-detealies.service';
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    PassengerTicketsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    FlexLayoutModule,

    [MatButtonModule,MatCheckboxModule,MatCardModule,MatIconModule,MatGridListModule]
  ],
  providers: [GetTicketDetealiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
