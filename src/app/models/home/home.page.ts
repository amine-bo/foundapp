import { Card } from './../../dto/card.model';
import { ApiService } from './../../service/api.service';
import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { CompleteSearchCityService } from 'src/app/service/complete-search-city.service';
import { AutoCompleteComponent } from 'ionic4-auto-complete';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  subscription: any;
  showSearchBar = false;
  foundLostSelect: string;
  sortSelect: string;
  textSelectFoundLost: string;
  myInput: string;
  cards: Card[] = [];
  optionsFoundSelect: Array<any>;
  optionsSortSelect: Array<any>;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;
  isItemAvailable: boolean;
  @ViewChild('citiesSearchBar', { static: false })
  citiesSearchBar: AutoCompleteComponent;

  constructor(private platform: Platform, private api: ApiService, private socialSharing: SocialSharing,
    private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation,
    public completeSearchCityService: CompleteSearchCityService) {
    this.foundLostSelect = "foundlost";
    this.sortSelect = "recentDate";
    this.isItemAvailable = false;
    this.optionsFoundSelect = [
      { code: "foundlost", label: "home.foundlost" },
      { code: "found", label: "home.found" },
      { code: "lost", label: "home.lost" }
    ];
    this.optionsSortSelect = [{ code: "recentDate", label: "home.most_recent" },
    { code: "found", label: "Lalala" },
    { code: "lost", label: "Tkharbi9a" }];
    this.updateTextHeader(this.foundLostSelect);
  }

  ngOnInit() {
    this.api.getCards().subscribe((data) => {
      console.log(data);
      this.cards = data;
    });
    this.getGeolocation();
  }

  clickMe(e: Event) {
    e.stopImmediatePropagation();
    console.log("clicked.");
  }

  clickedSearchIcon() {
    this.showSearchBar = !this.showSearchBar;
  }

  checkAndConfirmCity(e: Event) {
    let selected = this.citiesSearchBar.getSelection();
    if (selected.length > 0) {
      this.geoAddress = selected[0].split(",")[0];
      this.showSearchBar = !this.showSearchBar;
    }
  }

  updateTextHeader(selectedOption: string) {
    this.textSelectFoundLost = this.optionsFoundSelect.filter(option => option.code === selectedOption).map(op => op.label).toString();
  }

  //Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.geoAccuracy = resp.coords.accuracy;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.geoAddress = result[0].locality;
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  sendShare(message, subject, picture, url) {
    this.socialSharing.share(message, subject, picture, url);
  }

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribe(async () => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
