import { Component, input } from '@angular/core'; // import input as well
import { HousingLocationInfo } from '../housing-location-info';


@Component({
  selector: 'app-listing',
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})

export class ListingComponent {
  housingLocationInfo = input.required<HousingLocationInfo>();
}




// // unused - bsp von einem Objekt
// export class ListingComponent2 {
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
// //
// //
// // unused - bsp von mehreren Objekten in einem Array
// export class ListingComponent3 {
//   housingLocationInfo: HousingLocationInfo[] = [
//     {
//       id: 1,
//       name: 'Sample Housing Location',
//       city: 'Schramberg',
//       state: 'Baden-Württemberg',
//       country: 'Germany',
//       photo: 'https://source.unsplash.com/random/300x300/?house',
//       price: 1200,
//       info: 'This is a sample housing location for demonstration purposes.',
//       availableFrom: new Date('2023-11-01')
//     }
    
//   ]
// }