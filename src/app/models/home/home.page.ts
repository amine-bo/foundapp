import { Card } from './../../dto/card.model';
import { ApiService } from './../../service/api.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private platform: Platform, private api: ApiService,
    private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation, private translate: TranslateService) {
    this.foundLostSelect = "foundlost";
    this.sortSelect = "recentDate";
    this.optionsFoundSelect = [
      { code: "foundlost", label: this.translate.instant('home.foundlost') },
      { code: "found", label: this.translate.instant('home.found') },
      { code: "lost", label: this.translate.instant('home.lost') }
    ];
    this.optionsSortSelect = [{ code: "recentDate", label: this.translate.instant('home.most_recent') },
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

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribe(async () => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
