import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiscoverPage } from './discover.page';
import { DiscoverPageRoutingModule } from './discover-routing.module';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
    DiscoverPageRoutingModule
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
