import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location-info'; // model

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationInfo: HousingLocationInfo[] = [
  
  {
    id: 1,
    name: 'Big House for family',
    city: 'Schramberg',
    state: 'Baden-Württemberg',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?house',
    price: 1200,
    info: 'This is a spacious house suitable for families, located in a quiet neighborhood with easy access to schools and parks.',
    availableFrom: new Date('2023-11-01')
  },
  {
    id: 2,
    name: 'Cozy Apartment',
    city: 'Berlin',
    state: 'Berlin',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?apartment',
    price: 800,
    info: 'A cozy apartment in the heart of the city, perfect for young professionals.',
    availableFrom: new Date('2023-12-01')
  },
  {
    id: 3,
    name: 'Luxury Villa',
    city: 'Munich',
    state: 'Bavaria',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?villa',
    price: 2500,
    info: 'A luxury villa with a beautiful garden and pool, ideal for those who love comfort.',
    availableFrom: new Date('2024-01-01')
  },
  {
    id: 4,
    name: 'Modern Loft',
    city: 'Hamburg',
    state: 'Hamburg',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?loft',
    price: 1500,
    info: 'A modern loft with an open floor plan, perfect for creative individuals.',
    availableFrom: new Date('2023-11-15')
  },
  {
    id: 5,
    name: 'Charming Cottage',
    city: 'Freiburg',
    state: 'Baden-Württemberg',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?cottage',
    price: 900,
    info: 'A charming cottage in a quiet village, ideal for those seeking peace and tranquility.',
    availableFrom: new Date('2023-10-20')
  },
  {
    id: 6,
    name: 'Spacious Townhouse',
    city: 'Cologne',
    state: 'North Rhine-Westphalia',
    country: 'Germany',
    photo: 'https://source.unsplash.com/random/300x300/?townhouse',
    price: 1800,
    info: 'A spacious townhouse with multiple bedrooms, perfect for families.',
    availableFrom: new Date('2023-11-10')
  }
]

  constructor() { }

  // methode um housingLocationInfo zu bekommen
  getAllHousingLocationInfo(): HousingLocationInfo[] {
    return this.housingLocationInfo;
  }
}
