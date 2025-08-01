import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from "./search/search.component";
import { ListingComponent } from "./listing/listing.component";
import { HousingLocationInfo } from './housing-location-info'; // model
import { HousingService } from './housing.service'; // service

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, ListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// export class AppComponent {
//   title = 'HousingLocation';

//   // objekt bzw dateien werden HIER definiert !!ALT!!!
//   housingLocationInfo: HousingLocationInfo = {
//     id: 1,
//     name: 'Big House for family',
//     city: 'Schramberg',
//     state: 'Baden-Württemberg',
//     country: 'Germany',
//     photo: 'https://source.unsplash.com/random/300x300/?house',
//     price: 1200,
//     info: 'This is a spacious house suitable for families, located in a quiet neighborhood with easy access to schools and parks.',
//     availableFrom: new Date('2023-11-01')
//   }

// }

export class AppComponent {
  title = 'HousingLocation';
  housingLocationInfo: HousingLocationInfo[] = []; // "linked" to service

  // ruft housingService auf, um housingLocationInfo ( array / daten ) zu bekommen
  constructor(private housingService: HousingService) {
    this.housingLocationInfo = this.housingService.getAllHousingLocationInfo(); // get data from service
  }
}