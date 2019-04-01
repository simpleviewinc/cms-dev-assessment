import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private apiListings = 'https://sv-reqres.now.sh/api/listings';
  private apiEvents = 'https://sv-reqres.now.sh/api/events';
  private apiOffers = 'https://sv-reqres.now.sh/api/offers';
  public isListingsVisible = true;
  public isEventsVisible = true;
  public isOffersVisible = true;
  public isScrollable = false;
  public buttonName = 'Read More';
  events: any = [];
  offers: any = [];
  listings: any = [];
  constructor(private http: Http) {}
  getData(apiUrl) {
    return this.http.get(apiUrl).pipe(map((res: Response) => res.json()));
  }
  scrollToggle() {
    this.isScrollable = !this.isScrollable;

    if (this.isScrollable) {
      this.buttonName = 'Read Less';
    } else {
      this.buttonName = 'Read More';
    }
  }
  showAll() {
    this.isListingsVisible = true;
    this.isEventsVisible = true;
    this.isOffersVisible = true;
  }
  showListings() {
    this.isListingsVisible = true;
    this.isEventsVisible = false;
    this.isOffersVisible = false;
  }
  showEvents() {
    this.isListingsVisible = false;
    this.isEventsVisible = true;
    this.isOffersVisible = false;
  }
  showOffers() {
    this.isListingsVisible = false;
    this.isEventsVisible = false;
    this.isOffersVisible = true;
  }
  ngOnInit() {
    this.getData(this.apiListings).subscribe(data => {
      console.log(data);
      this.listings = data;
    });
    this.getData(this.apiEvents).subscribe(data => {
      console.log(data);
      this.events = data;
    });
    this.getData(this.apiOffers).subscribe(data => {
      console.log(data);
      this.offers = data;
    });
  }
}
