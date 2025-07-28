import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from "./search/search.component";
import { ListingComponent } from "./listing/listing.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, ListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'HousingLocation';
}
