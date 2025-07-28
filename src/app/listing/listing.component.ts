import { Component } from '@angular/core';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
  selector: 'app-listing',
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})

export class ListingComponent {
  housingLocationInfo: HousingLocationInfo = {
    id: 1,
    name: 'Sample Housing Location',
    city: 'Schramberg',
    state: 'Baden-Württemberg',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?house',
    price: 1200,
    availableFrom: new Date('2023-11-01')
  }
}
