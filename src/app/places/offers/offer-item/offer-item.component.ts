import { Component, OnInit, Input } from '@angular/core';

import { mPlace } from '../../place.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  standalone: false,
})
export class OfferItemComponent implements OnInit {
  @Input() offer: mPlace | undefined;

  constructor() {}

  ngOnInit() {}

  getDummyDate() {
    return new Date();
  }
}
