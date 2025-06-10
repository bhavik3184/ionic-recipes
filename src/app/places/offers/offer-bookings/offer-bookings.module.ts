import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferBookingsPage } from './offer-bookings.page';
import { OfferBookingsPageRoutingModule } from './offer-bookings-routing.module';

const routes: Routes = [
  {
    path: '',
    component: OfferBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
    OfferBookingsPageRoutingModule
  ],
  declarations: [OfferBookingsPage]
})
export class OfferBookingsPageModule {}
