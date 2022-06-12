import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-router.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { EditTripComponent } from './edit-trip/edit-trip.component';
// import { TripDataService } from '../services/trip-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    // TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
